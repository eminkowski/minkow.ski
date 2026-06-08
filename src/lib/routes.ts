export const ROUTES = {
  home: '/',
  projects: '/projects',
  projectsTrudge: '/projects/trudge',
  about: '/about',
} as const

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES]
