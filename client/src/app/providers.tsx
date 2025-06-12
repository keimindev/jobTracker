'use client'

import React, { useEffect } from 'react'
import { supabase } from '../lib/supabase'
import { useUserStore } from '../store/userStore'

export default function Providers({ children }: { children: React.ReactNode }) {
  const setUser = useUserStore((state) => state.setUser)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [setUser])

  return <>{children}</>
}
