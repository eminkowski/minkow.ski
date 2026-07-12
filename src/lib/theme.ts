/**
 * Background anchors for contrast checks.
 * Gradient peak is the lightest page tint (purple radial in root layout).
 */
export const BACKGROUNDS = {
  page: '#020202',
  surface: '#070707',
  gradientPeak: '#1e1e3f',
} as const

/**
 * Text opacities validated against all BACKGROUNDS at WCAG 2.1 AA.
 * - normal: 4.5:1 minimum (body, labels, links, captions)
 * - large: 3:1 minimum (≥ 18pt regular or ≥ 14pt bold only)
 */
export const TEXT_OPACITY = {
  primary: 1,
  link: 0.8,
  secondary: 0.7,
  body: 0.68,
  muted: 0.5,
} as const

export type TextOpacityToken = keyof typeof TEXT_OPACITY

export const NORMAL_TEXT_TOKENS: TextOpacityToken[] = [
  'primary',
  'link',
  'secondary',
  'body',
  'muted',
]

/** Tailwind class map - single source for text color tokens. */
export const textClass: Record<TextOpacityToken, string> = {
  primary: 'text-white',
  link: 'text-white/80',
  secondary: 'text-white/70',
  body: 'text-white/68',
  muted: 'text-white/50',
}
