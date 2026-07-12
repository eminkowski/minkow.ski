import { createRouter, createRoute, createRootRoute } from '@tanstack/react-router'
import { ROUTES } from './lib/routes'
import { Root } from './routes/root'
import { Home } from './routes/home'
import { Projects } from './routes/projects'
import { ProjectsTrudge } from './routes/projects-trudge'
import { ProjectsSupportDesk } from './routes/projects-support-desk'
import { ProjectsAgentEvalHarness } from './routes/projects-agent-eval-harness'
import { About } from './routes/about'

const rootRoute = createRootRoute({ component: Root })

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.home,
  component: Home,
})

const projectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.projects,
  component: Projects,
})

const projectsTrudgeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.projectsTrudge,
  component: ProjectsTrudge,
})

const projectsSupportDeskRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.projectsSupportDesk,
  component: ProjectsSupportDesk,
})

const projectsAgentEvalHarnessRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.projectsAgentEvalHarness,
  component: ProjectsAgentEvalHarness,
})

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.about,
  component: About,
})

const routeTree = rootRoute.addChildren([
  homeRoute,
  projectsRoute,
  projectsTrudgeRoute,
  projectsSupportDeskRoute,
  projectsAgentEvalHarnessRoute,
  aboutRoute,
])

export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
