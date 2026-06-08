import type { ReactNode } from 'react'
import { label } from '../../lib/styles'

interface SectionProps {
  title: string
  children: ReactNode
}

export function Section({ title, children }: SectionProps) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className={label}>{title}</h2>
      {children}
    </section>
  )
}
