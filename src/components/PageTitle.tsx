import { useEffect } from 'react'
import { useRouterState } from '@tanstack/react-router'
import { pageTitle } from '../lib/site'

export function PageTitle() {
  const pathname = useRouterState({ select: state => state.location.pathname })

  useEffect(() => {
    document.title = pageTitle(pathname)
  }, [pathname])

  return null
}
