import { describe, expect, it } from 'vitest'
import { AA_LARGE, AA_NORMAL, composite, contrastRatio, whiteOn } from './contrast'
import { BACKGROUNDS, NORMAL_TEXT_TOKENS, TEXT_OPACITY } from './theme'

describe('contrast', () => {
  it('normal text tokens meet AA on page, surface, and gradient peak', () => {
    for (const bg of Object.values(BACKGROUNDS)) {
      for (const token of NORMAL_TEXT_TOKENS) {
        const opacity = TEXT_OPACITY[token]
        const fg = opacity === 1 ? '#ffffff' : whiteOn(bg, opacity)
        const ratio = contrastRatio(fg, bg)
        expect(ratio, `${token} on ${bg}`).toBeGreaterThanOrEqual(AA_NORMAL)
      }
    }
  })

  it('status emerald on page backgrounds meets AA normal', () => {
    for (const bg of Object.values(BACKGROUNDS)) {
      const status = composite('#34d399', 0.9, bg)
      expect(contrastRatio(status, bg)).toBeGreaterThanOrEqual(AA_NORMAL)
    }
  })

  it('link underline decoration meets AA non-text on page background', () => {
    const decoration = whiteOn(BACKGROUNDS.page, 0.4)
    expect(contrastRatio(decoration, BACKGROUNDS.page)).toBeGreaterThanOrEqual(AA_LARGE)
  })
})
