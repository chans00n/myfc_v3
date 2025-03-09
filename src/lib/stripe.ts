import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16' as any,
  typescript: true,
})

export const getStripeProducts = async () => {
  const products = await stripe.products.list({
    active: true,
    expand: ['data.default_price'],
  })

  return products.data.map((product) => {
    const price = product.default_price as Stripe.Price
    return {
      id: product.id,
      name: product.name,
      description: product.description,
      image: product.images[0],
      price: {
        id: price.id,
        unit_amount: price.unit_amount,
        currency: price.currency,
        interval: price.type === 'recurring' ? price.recurring?.interval : null,
      },
      metadata: product.metadata,
    }
  })
}

export const createCheckoutSession = async ({
  priceId,
  customerId,
  successUrl,
  cancelUrl,
}: {
  priceId: string
  customerId?: string
  successUrl: string
  cancelUrl: string
}) => {
  const session = await stripe.checkout.sessions.create({
    customer: customerId,
    payment_method_types: ['card'],
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: 'subscription',
    success_url: successUrl,
    cancel_url: cancelUrl,
    allow_promotion_codes: true,
  })

  return session
}

export const createCustomerPortalSession = async ({
  customerId,
  returnUrl,
}: {
  customerId: string
  returnUrl: string
}) => {
  const session = await stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: returnUrl,
  })

  return session
} 