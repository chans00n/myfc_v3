import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { createClient } from '@supabase/supabase-js'
import { stripe } from '../../../../lib/stripe'

// Initialize Supabase client with service role key for admin access
// We'll initialize this inside the POST handler to ensure environment variables are available
let supabase: ReturnType<typeof createClient>

export async function POST(req: Request) {
  const body = await req.text()
  const headersList = headers()
  const signature = headersList.get('stripe-signature') as string

  // Initialize Supabase client here to ensure environment variables are available
  supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  let event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (error: any) {
    console.error(`Webhook signature verification failed: ${error.message}`)
    return NextResponse.json(
      { error: `Webhook signature verification failed` },
      { status: 400 }
    )
  }

  // Handle the event
  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object
        
        // Update the subscription status
        if (session.subscription) {
          const subscription = await stripe.subscriptions.retrieve(
            session.subscription as string
          )
          
          const customerId = subscription.customer as string
          
          // Find the user by Stripe customer ID
          const { data: subscriptionData } = await supabase
            .from('subscriptions')
            .select('user_id')
            .eq('stripe_customer_id', customerId)
            .single()
            
          if (subscriptionData) {
            await supabase
              .from('subscriptions')
              .update({
                status: subscription.status,
                stripe_subscription_id: subscription.id,
                current_period_start: new Date(subscription.current_period_start * 1000).toISOString(),
                current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
                cancel_at_period_end: subscription.cancel_at_period_end,
              })
              .eq('user_id', subscriptionData.user_id)
          }
        }
        break
      }
      
      case 'customer.subscription.updated': {
        const subscription = event.data.object
        const customerId = subscription.customer as string
        
        // Find the user by Stripe customer ID
        const { data: subscriptionData } = await supabase
          .from('subscriptions')
          .select('user_id')
          .eq('stripe_customer_id', customerId)
          .single()
          
        if (subscriptionData) {
          await supabase
            .from('subscriptions')
            .update({
              status: subscription.status,
              current_period_start: new Date(subscription.current_period_start * 1000).toISOString(),
              current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
              cancel_at_period_end: subscription.cancel_at_period_end,
            })
            .eq('user_id', subscriptionData.user_id)
        }
        break
      }
      
      case 'customer.subscription.deleted': {
        const subscription = event.data.object
        const customerId = subscription.customer as string
        
        // Find the user by Stripe customer ID
        const { data: subscriptionData } = await supabase
          .from('subscriptions')
          .select('user_id')
          .eq('stripe_customer_id', customerId)
          .single()
          
        if (subscriptionData) {
          await supabase
            .from('subscriptions')
            .update({
              status: 'canceled',
              cancel_at_period_end: false,
            })
            .eq('user_id', subscriptionData.user_id)
        }
        break
      }
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Error handling webhook event:', error)
    return NextResponse.json(
      { error: 'Error handling webhook event' },
      { status: 500 }
    )
  }
} 