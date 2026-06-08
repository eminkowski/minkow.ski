import { textClass } from './theme'

const cardBase = [
  'rounded-xl border border-white/[0.06] [border-top-color:rgba(255,255,255,0.12)] bg-white/[0.02]',
  'backdrop-blur-[8px]',
  'p-4 sm:p-5 flex flex-col gap-3',
].join(' ')

const hoverEase = 'ease-[cubic-bezier(0.22,1,0.36,1)]'
const linkTransition = `transition-colors duration-500 ${hoverEase} hover:duration-200`

/** Static card surface. */
export const card = cardBase

/** Clickable card shell. Surface stays still; use link text tokens for hover feedback. */
export const linkCard = `${cardBase} cursor-pointer group touch-manipulation`

export const label = `font-mono text-[10px] ${textClass.muted} uppercase tracking-widest`

export const chip = [
  'font-mono text-[10px] px-2 py-1 rounded-md bg-white/[0.05]',
  textClass.secondary,
  'border border-white/[0.08] cursor-default',
].join(' ')

/** Primary line inside a linkCard (group-hover). */
export const linkText = `text-sm ${textClass.link} group-hover:text-white ${linkTransition}`

/** Secondary CTA inside a linkCard (group-hover). */
export const linkTextMuted = `font-mono text-xs ${textClass.muted} group-hover:text-white ${linkTransition}`

/** Card title inside a linkCard. */
export const linkTitle = `text-white font-medium group-hover:text-white ${linkTransition}`

/** Arrow glyph in body/sans font (pair with mono link text). */
export const linkArrow = 'font-sans'

/** Small standalone link (live ↗, case study →, back nav). */
export const metaLink = `font-mono text-xs ${textClass.muted} hover:text-white ${linkTransition} py-1 -my-1`

/** Inline link in body copy. */
export const inlineLink = [
  textClass.link,
  'hover:text-white',
  linkTransition,
  'underline underline-offset-2 decoration-white/40 hover:decoration-white/60',
].join(' ')

/** Standalone contact-style link (not inside linkCard). */
export const contactLink = `text-sm ${textClass.link} hover:text-white ${linkTransition}`

/** Body link without underline (case study metadata). */
export const textLink = `text-sm ${textClass.secondary} hover:text-white ${linkTransition}`

/** Nav links. */
export const navLink = `font-mono text-xs ${textClass.muted} hover:text-white ${linkTransition} py-2 -my-2 px-1 -mx-1`

/** Re-export text tokens for one-off use in routes and components. */
export { textClass } from './theme'
