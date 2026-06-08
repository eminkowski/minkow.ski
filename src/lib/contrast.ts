/** sRGB hex (#rrggbb) → relative luminance (WCAG 2.1). */
export function relativeLuminance(hex: string): number {
  const normalized = hex.replace('#', '')
  const channels = [0, 2, 4].map(offset =>
    parseInt(normalized.slice(offset, offset + 2), 16) / 255,
  )
  const linear = channels.map(channel =>
    channel <= 0.03928 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4,
  )
  return 0.2126 * linear[0]! + 0.7152 * linear[1]! + 0.0722 * linear[2]!
}

/** Contrast ratio between two sRGB colors (always ≥ 1). */
export function contrastRatio(foreground: string, background: string): number {
  const fg = relativeLuminance(foreground)
  const bg = relativeLuminance(background)
  const lighter = Math.max(fg, bg)
  const darker = Math.min(fg, bg)
  return (lighter + 0.05) / (darker + 0.05)
}

/** Alpha-composite an opaque sRGB foreground over a solid background. */
export function composite(fgHex: string, alpha: number, bgHex: string): string {
  const parse = (hex: string) => {
    const h = hex.replace('#', '')
    return [0, 2, 4].map(offset => parseInt(h.slice(offset, offset + 2), 16))
  }
  const [fr, fg, fb] = parse(fgHex)
  const [bgr, bgg, bgb] = parse(bgHex)
  const blend = (f: number, b: number) => Math.round(alpha * f + (1 - alpha) * b)
  const toHex = (n: number) => n.toString(16).padStart(2, '0')
  return `#${toHex(blend(fr!, bgr!))}${toHex(blend(fg!, bgg!))}${toHex(blend(fb!, bgb!))}`
}

/** White at opacity over a solid background → effective sRGB hex. */
export function whiteOn(bgHex: string, opacity: number): string {
  return composite('#ffffff', opacity, bgHex)
}

export const AA_NORMAL = 4.5
export const AA_LARGE = 3
