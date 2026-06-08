const EM_DASH = '\u2014'
const EN_DASH = '\u2013'

/** Em dash (U+2014) and en dash (U+2013). */
export const FORBIDDEN_DASH = new RegExp(`[${EM_DASH}${EN_DASH}]`)

export interface CopyViolation {
  line: number
  char: 'em dash' | 'en dash'
  excerpt: string
}

export function findCopyViolations(content: string): CopyViolation[] {
  const violations: CopyViolation[] = []

  for (const [index, line] of content.split('\n').entries()) {
    const match = line.match(FORBIDDEN_DASH)
    if (match) {
      violations.push({
        line: index + 1,
        char: match[0] === EM_DASH ? 'em dash' : 'en dash',
        excerpt: line.trim().slice(0, 120),
      })
    }
  }

  return violations
}
