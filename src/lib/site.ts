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
  supportDeskRepo: 'https://github.com/eminkowski/support-desk-mcp',
  worksurfaceRepo: 'https://github.com/eminkowski/worksurface-ui',
  agentEvalHarnessRepo: 'https://github.com/eminkowski/agent-eval-harness',
} as const

export function pageTitle(pathname: string): string {
  return PAGE_TITLES[pathname as AppRoute] ?? SITE.domain
}

const PAGE_TITLES: Record<AppRoute, string> = {
  [ROUTES.home]: `${SITE.name} | ${SITE.domain}`,
  [ROUTES.projects]: `Projects | ${SITE.domain}`,
  [ROUTES.projectsTrudge]: `Trudge case study | ${SITE.domain}`,
  [ROUTES.projectsSupportDesk]: `Support Desk MCP | ${SITE.domain}`,
  [ROUTES.projectsWorksurface]: `Worksurface UI | ${SITE.domain}`,
  [ROUTES.projectsAgentEvalHarness]: `Agent Eval Harness | ${SITE.domain}`,
  [ROUTES.about]: `About | ${SITE.domain}`,
}
