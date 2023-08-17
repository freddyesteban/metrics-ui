'use client'
import { useEffect } from "react"
import { usePathname } from 'next/navigation'

export default function NavigationEvents() {
  const pathname = usePathname()
  useEffect(() => {
    fetch('http://localhost:3001/visits/api', {
      method: 'POST',
      body: JSON.stringify({ page: pathname })
    })
  }, [pathname])
  return null
}
