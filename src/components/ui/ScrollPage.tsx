import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'
import { PAGE_MAX_WIDTH } from '../../lib/layout'

interface ScrollPageProps {
  children: ReactNode
  className?: string
}

export function ScrollPage({ children, className }: ScrollPageProps) {
  return (
    <div
      className={cn(
        PAGE_MAX_WIDTH,
        'flex flex-col gap-3',
        // Mobile/tablet: scroll with the page.main. Desktop: contained scroll.
        'lg:max-h-[calc(100dvh-7rem)] lg:scroll-pane lg:pr-1',
        className,
      )}
    >
      {children}
    </div>
  )
}
