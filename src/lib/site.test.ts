import { describe, expect, it } from 'vitest'
import { ROUTES } from './routes'
import { pageTitle, SITE } from './site'

describe('pageTitle', () => {
  it('returns a titled string for known routes', () => {
    expect(pageTitle(ROUTES.home)).toBe(`${SITE.name} | ${SITE.domain}`)
    expect(pageTitle(ROUTES.projects)).toBe(`Projects | ${SITE.domain}`)
  })

  it('falls back to the domain for unknown paths', () => {
    expect(pageTitle('/unknown')).toBe(SITE.domain)
  })
})
