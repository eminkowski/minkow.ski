import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'
import { contactLink, inlineLink, metaLink, textLink } from '../../lib/styles'

type ExternalLinkVariant = 'meta' | 'contact' | 'inline' | 'text'

const variantClass: Record<ExternalLinkVariant, string> = {
  meta: metaLink,
  contact: contactLink,
  inline: inlineLink,
  text: textLink,
}

interface ExternalLinkProps {
  href: string
  children: ReactNode
  variant?: ExternalLinkVariant
  className?: string
}

function isExternal(href: string): boolean {
  return href.startsWith('http') || href.startsWith('mailto:')
}

export function ExternalLink({
  href,
  children,
  variant = 'meta',
  className,
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      className={cn(variantClass[variant], className)}
      {...(isExternal(href) ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  )
}
