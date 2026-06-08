import { describe, expect, it } from 'vitest'
import { findCopyViolations, FORBIDDEN_DASH } from './copy-rules'

describe('FORBIDDEN_DASH', () => {
  it('matches em and en dashes', () => {
    expect('hello — world'.match(FORBIDDEN_DASH)?.[0]).toBe('—')
    expect('hello – world'.match(FORBIDDEN_DASH)?.[0]).toBe('–')
  })

  it('does not match a plain hyphen', () => {
    expect('hello - world'.match(FORBIDDEN_DASH)).toBeNull()
  })
})

describe('findCopyViolations', () => {
  it('returns line numbers and excerpts for violations', () => {
    const violations = findCopyViolations('clean line\nbad — line\nalso – bad')
    expect(violations).toHaveLength(2)
    expect(violations[0]).toMatchObject({ line: 2, char: 'em dash' })
    expect(violations[1]).toMatchObject({ line: 3, char: 'en dash' })
  })

  it('returns an empty list for clean copy', () => {
    expect(findCopyViolations('Plain hyphen - ok.\nSecond line.')).toEqual([])
  })
})
