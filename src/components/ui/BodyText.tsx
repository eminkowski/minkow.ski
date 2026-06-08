import type { ReactNode } from 'react'
import { textClass } from '../../lib/styles'

interface BodyTextProps {
  children: ReactNode
}

export function BodyText({ children }: BodyTextProps) {
  return <p className={`text-sm ${textClass.body} leading-relaxed`}>{children}</p>
}
