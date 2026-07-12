import { ROUTES, type AppRoute } from '../lib/routes'
import { SITE } from '../lib/site'

export interface Project {
  name: string
  description: string
  tags: readonly string[]
  url?: string
  repo?: string
  caseStudy?: AppRoute
}

export const projects: readonly Project[] = [
  {
    name: 'Support Desk MCP',
    description:
      'Support queue with an MCP server on top. Shared Zod tool schemas, REST API, web UI, and one audit log for browser and MCP tool calls.',
    tags: ['TypeScript', 'MCP', 'Fastify', 'React', 'PostgreSQL', 'Zod', 'Monorepo'],
    repo: SITE.supportDeskRepo,
    caseStudy: ROUTES.projectsSupportDesk,
  },
  {
    name: 'Trudge',
    description:
      'Privacy-first mobile product for sensitive personal data. Local-first client, encrypted storage, thin API that never sees readable user content. TypeScript monorepo with 950+ unit tests. Solo end-to-end ownership.',
    tags: ['React Native', 'TypeScript', 'Hono', 'PostgreSQL', 'OpenAPI', 'Monorepo'],
    url: SITE.trudge,
    caseStudy: ROUTES.projectsTrudge,
  },
  {
    name: SITE.domain,
    description:
      'This portfolio. React 19, TanStack Router, and Tailwind CSS v4. Responsive bento layout, file-based routing, no UI kit.',
    tags: ['React 19', 'TypeScript', 'Vite', 'TanStack Router', 'Tailwind CSS'],
    url: `https://${SITE.domain}`,
    repo: SITE.repo,
  },
]
