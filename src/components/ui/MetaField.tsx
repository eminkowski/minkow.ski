import type { ReactNode } from 'react'
import { label as fieldLabelStyle } from '../../lib/styles'

interface MetaFieldProps {
  label: string
  children: ReactNode
}

export function MetaField({ label: fieldLabel, children }: MetaFieldProps) {
  return (
    <div>
      <p className={`${fieldLabelStyle} mb-1`}>{fieldLabel}</p>
      {children}
    </div>
  )
}
