import type { ReactNode } from 'react'
import { Link } from '@tanstack/react-router'
import { cn } from '../../lib/cn'
import { linkCard } from '../../lib/styles'
import type { AppRoute } from '../../lib/routes'

interface LinkCardBaseProps {
  children: ReactNode
  className?: string
}

interface RouterLinkCardProps extends LinkCardBaseProps {
  to: AppRoute
  href?: never
}

interface HrefLinkCardProps extends LinkCardBaseProps {
  href: string
  to?: never
  external?: boolean
}

export type LinkCardProps = RouterLinkCardProps | HrefLinkCardProps

function isExternalHref(href: string): boolean {
  return href.startsWith('http') || href.startsWith('mailto:')
}

export function LinkCard(props: LinkCardProps) {
  const className = cn(linkCard, props.className)

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={className}>
        {props.children}
      </Link>
    )
  }

  const external = props.external ?? isExternalHref(props.href)

  return (
    <a
      href={props.href}
      className={className}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {props.children}
    </a>
  )
}
