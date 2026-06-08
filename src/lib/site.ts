import { ROUTES, type AppRoute } from './routes'

export const SITE = {
  name: 'Eric Minkowski',
  domain: 'minkow.ski',
  title: 'Lead Software Engineer',
  email: 'eric@minkow.ski',
  github: 'https://github.com/eminkowski',
  githubHandle: 'eminkowski',
  linkedin: 'https://linkedin.com/in/eminkowski',
  studio: 'https://minkolabs.com',
  studioName: 'Minko Labs',
  /** Redirects to Google Drive via public/_redirects (prod) or Vite middleware (dev). */
  resume: '/resume',
  trudge: 'https://trudge.app',
  repo: 'https://github.com/eminkowski/minkow-ski',
} as const

export function pageTitle(pathname: string): string {
  return PAGE_TITLES[pathname as AppRoute] ?? SITE.domain
}

const PAGE_TITLES: Record<AppRoute, string> = {
  [ROUTES.home]: `${SITE.name} | ${SITE.domain}`,
  [ROUTES.projects]: `Projects | ${SITE.domain}`,
  [ROUTES.projectsTrudge]: `Trudge case study | ${SITE.domain}`,
  [ROUTES.about]: `About | ${SITE.domain}`,
}
