"use client"

import * as React from 'react'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { createSupabaseBrowserClient } from '../../lib/supabase'

export function AuthForm() {
  const supabase = createSupabaseBrowserClient()

  return (
    <Auth
      supabaseClient={supabase}
      appearance={{ theme: ThemeSupa }}
      theme="dark"
      providers={['google']}
      redirectTo={`${window.location.origin}/auth/callback`}
    />
  )
} 