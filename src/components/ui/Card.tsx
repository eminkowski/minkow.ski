import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'
import { card } from '../../lib/styles'

interface CardProps {
  children: ReactNode
  className?: string
}

export function Card({ children, className }: CardProps) {
  return <div className={cn(card, className)}>{children}</div>
}
