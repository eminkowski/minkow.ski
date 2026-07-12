export const ROUTES = {
  home: '/',
  projects: '/projects',
  projectsTrudge: '/projects/trudge',
  projectsSupportDesk: '/projects/support-desk-mcp',
  projectsAgentEvalHarness: '/projects/agent-eval-harness',
  about: '/about',
} as const

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES]
