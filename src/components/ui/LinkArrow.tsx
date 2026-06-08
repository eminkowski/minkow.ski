import { cn } from '../../lib/cn'
import { linkArrow } from '../../lib/styles'

export type LinkArrowKind = 'external' | 'forward' | 'back'

const glyphs: Record<LinkArrowKind, string> = {
  external: '↗',
  forward: '→',
  back: '←',
}

interface LinkArrowProps {
  kind?: LinkArrowKind
  className?: string
}

/** Arrow glyph in body font - use inside mono link lines so ↗/→ stay readable. */
export function LinkArrow({ kind = 'external', className }: LinkArrowProps) {
  return (
    <span className={cn(linkArrow, className)} aria-hidden>
      {glyphs[kind]}
    </span>
  )
}
