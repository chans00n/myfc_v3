"use client"

import * as React from 'react'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { createSupabaseBrowserClient } from '../../lib/supabase'
import { useRouter } from 'next/navigation'

export function AuthForm() {
  const router = useRouter()
  const supabase = createSupabaseBrowserClient()
  const [redirectTo, setRedirectTo] = React.useState<string>('')

  React.useEffect(() => {
    // Set redirectTo only on the client side
    setRedirectTo(`${window.location.origin}/auth/callback`)
    
    // Check if user is already logged in
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (session) {
        router.push('/dashboard')
      }
    }
    
    checkUser()
  }, [router, supabase])

  return (
    <Auth
      supabaseClient={supabase}
      appearance={{ 
        theme: ThemeSupa,
        variables: {
          default: {
            colors: {
              brand: '#404040',
              brandAccent: '#202020',
            }
          }
        }
      }}
      theme="dark"
      providers={['google']}
      redirectTo={redirectTo}
      onlyThirdPartyProviders={false}
    />
  )
} 