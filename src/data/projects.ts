import { ROUTES, type AppRoute } from '../lib/routes'
import { SITE } from '../lib/site'
import { AGENT_EVAL_HARNESS_CASE_STUDY } from './agent-eval-harness-case-study'
import { SUPPORT_DESK_CASE_STUDY } from './support-desk-case-study'
import { TRUDGE_CASE_STUDY } from './trudge-case-study'

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

export const projects: readonly Project[] = [
  {
    name: SUPPORT_DESK_CASE_STUDY.name,
    description: SUPPORT_DESK_CASE_STUDY.listDescription,
    tags: SUPPORT_DESK_CASE_STUDY.tags,
    repo: SITE.supportDeskRepo,
    caseStudy: ROUTES.projectsSupportDesk,
  },
  {
    name: AGENT_EVAL_HARNESS_CASE_STUDY.name,
    description: AGENT_EVAL_HARNESS_CASE_STUDY.listDescription,
    tags: AGENT_EVAL_HARNESS_CASE_STUDY.tags,
    repo: SITE.agentEvalHarnessRepo,
    caseStudy: ROUTES.projectsAgentEvalHarness,
  },
  {
    name: TRUDGE_CASE_STUDY.name,
    description: TRUDGE_CASE_STUDY.listDescription,
    tags: TRUDGE_CASE_STUDY.tags,
    url: SITE.trudge,
    caseStudy: ROUTES.projectsTrudge,
  },
  {
    name: SITE.domain,
    description:
      'This portfolio site. Built with React 19, TanStack Router, and Tailwind CSS v4. Responsive bento layout, file-based routing, no UI kit.',
    tags: ['React 19', 'TypeScript', 'Vite', 'TanStack Router', 'Tailwind CSS'],
    url: `https://${SITE.domain}`,
    repo: SITE.repo,
  },
]
