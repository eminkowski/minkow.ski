import { ROUTES, type AppRoute } from '../lib/routes'
import { SITE } from '../lib/site'
import { AGENT_EVAL_HARNESS_CASE_STUDY } from './agent-eval-harness-case-study'
import { SUPPORT_DESK_CASE_STUDY } from './support-desk-case-study'
import { TRUDGE_CASE_STUDY } from './trudge-case-study'
import { WORKSURFACE_CASE_STUDY } from './worksurface-case-study'

export interface Project {
  name: string
  description: string
  tags: readonly string[]
  url?: string
  repo?: string
  caseStudy?: AppRoute
}

export const PROJECTS_INTRO =
  'Selected work with case studies that explain the problem in plain English first, then the technical approach. Public repos include live code you can inspect.'

export const PROJECTS_GITHUB_CARD = {
  label: 'More on GitHub',
  title: 'Repositories',
  description:
    'Smaller experiments, utilities, and archived work that do not need full case studies.',
  cta: 'Browse repositories',
  href: SITE.github,
} as const

export const projects: readonly Project[] = [
  {
    name: TRUDGE_CASE_STUDY.name,
    description: TRUDGE_CASE_STUDY.listDescription,
    tags: TRUDGE_CASE_STUDY.tags,
    url: SITE.trudge,
    caseStudy: ROUTES.projectsTrudge,
  },
  {
    name: SUPPORT_DESK_CASE_STUDY.name,
    description: SUPPORT_DESK_CASE_STUDY.listDescription,
    tags: SUPPORT_DESK_CASE_STUDY.tags,
    repo: SITE.supportDeskRepo,
    caseStudy: ROUTES.projectsSupportDesk,
  },
  {
    name: WORKSURFACE_CASE_STUDY.name,
    description: WORKSURFACE_CASE_STUDY.listDescription,
    tags: WORKSURFACE_CASE_STUDY.tags,
    repo: SITE.worksurfaceRepo,
    caseStudy: ROUTES.projectsWorksurface,
  },
  {
    name: AGENT_EVAL_HARNESS_CASE_STUDY.name,
    description: AGENT_EVAL_HARNESS_CASE_STUDY.listDescription,
    tags: AGENT_EVAL_HARNESS_CASE_STUDY.tags,
    repo: SITE.agentEvalHarnessRepo,
    caseStudy: ROUTES.projectsAgentEvalHarness,
  },
  {
    name: SITE.domain,
    description:
      'Portfolio site with React 19, TanStack Router, Tailwind CSS v4, and route-based case studies.',
    tags: ['React 19', 'TypeScript', 'Vite', 'TanStack Router', 'Tailwind CSS'],
    url: `https://${SITE.domain}`,
    repo: SITE.repo,
  },
]
