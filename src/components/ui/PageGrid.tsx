import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'
import { PAGE_MAX_WIDTH } from '../../lib/layout'

interface PageGridProps {
  children: ReactNode
  cols?: 2 | 3
  className?: string
}

const colClasses: Record<NonNullable<PageGridProps['cols']>, string> = {
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-2 lg:grid-cols-3',
}

export function PageGrid({ children, cols = 2, className }: PageGridProps) {
  return (
    <div
      className={cn(
        'card-grid grid grid-cols-1 gap-3 sm:gap-2.5',
        PAGE_MAX_WIDTH,
        colClasses[cols],
        className,
      )}
    >
      {children}
    </div>
  )
}
