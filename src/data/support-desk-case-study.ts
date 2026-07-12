import { ROUTES } from '../lib/routes'
import { SITE } from '../lib/site'

export const SUPPORT_DESK_SCREENSHOTS = [
  {
    src: '/projects/support-desk-mcp/tickets.png',
    alt: 'Support queue with filters and Ask the queue panel',
    caption: 'Ticket list with filters and Ask the queue. Quick searches call tools over REST.',
  },
  {
    src: '/projects/support-desk-mcp/ticket.png',
    alt: 'Ticket detail with comment thread',
    caption: 'Ticket detail with thread and internal comment form. Writes show in the tool log as web-ui.',
  },
  {
    src: '/projects/support-desk-mcp/tool-log.png',
    alt: 'Tool log showing REST and MCP tool calls',
    caption: 'Tool log records REST and MCP invocations with transport badges, filters, and result detail.',
  },
] as const

export const SUPPORT_DESK_CASE_STUDY = {
  kind: 'public' as const,
  name: 'Support Desk MCP',
  plainEnglish:
    'This is a small support desk app that can be used either through a normal web interface or through an AI assistant. Every action is logged, so a human can see exactly what the assistant did and why.',
  tagline:
    'A support queue with an MCP server on top. The browser and AI assistant use the same underlying API, shared Zod schemas, and one audit log.',
  tags: ['TypeScript', 'MCP', 'Fastify', 'React', 'PostgreSQL', 'Zod', 'Monorepo'],
  listDescription:
    'A support desk you can use in a browser or through an AI assistant, with every action logged for review. Public codebase with a web UI, API, and agent tooling.',
  repo: SITE.supportDeskRepo,
  pairedCaseStudy: ROUTES.projectsAgentEvalHarness,
  pairedLabel: 'Agent Eval Harness',
  pairedRepo: SITE.agentEvalHarnessRepo,
  role: {
    title: 'Solo build',
    context: 'Portfolio project',
    status: 'Public on GitHub',
  },
  summary: [
    'A small support desk with a web UI and an MCP server that exposes the same operations as typed tools. The API owns the business logic and persistence. The MCP layer validates tool arguments and forwards requests to the API. The browser never speaks MCP; it calls /api/* directly.',
    'The important part is the shared contract. Zod schemas in packages/shared define tool inputs once, then the MCP server, REST API, and web assist path all use the same definitions. Every invocation lands in one audit table, labeled by actor: web-ui, web-assist, or mcp-agent.',
    'The companion project, Agent Eval Harness, imports those audit rows or records live MCP runs into trace JSON. It regression-tests tool choice, write guards, and ordering in CI.',
  ],
  problem: [
    'MCP integrations often grow as one-off glue per client, with duplicate validation, no shared audit trail, and unclear boundaries between what the client decides and what the server enforces.',
    'I wanted a queue you can operate from a browser or from an MCP client, with the same tools, the same data, and a log that shows both paths side by side.',
  ],
  architectureIntro:
    'In plain terms, the API is the center of the system. The browser and MCP server take different paths into the same business logic, and both paths leave an audit trail.',
  architecture: [
    {
      label: 'REST API:',
      body: 'Fastify, Prisma, PostgreSQL. Tickets, agents, comments, assist endpoint, and audit reads/writes. API key on /api/*.',
    },
    {
      label: 'Web UI:',
      body: 'React, TanStack Query. Filterable queue, ticket detail with comments, Ask the queue panel (quick searches over REST), and a tool log page that explains REST vs MCP entry points.',
    },
    {
      label: 'MCP server:',
      body: 'Five typed tools with Zod input schemas. stdio for local clients, Streamable HTTP at /mcp for remote connectors. Calls the REST API; does not touch Postgres directly.',
    },
    {
      label: 'Shared package:',
      body: 'Zod schemas, tool result formatters, quick-search definitions, and audit detail formatting used by API, MCP, and web.',
    },
  ],
  constraints: [
    {
      constraint: 'Same tools, multiple clients',
      response: 'One schema package; MCP and REST share validation and formatters',
    },
    {
      constraint: 'Writes must be explicit',
      response: 'MCP add_comment requires confirmed: true; browser comments go through REST only',
    },
    {
      constraint: 'Observable cross-client usage',
      response: 'AuditLog with actor, input summary, and result detail in the UI',
    },
    {
      constraint: 'Runnable without a chat client',
      response: 'Web UI and quick searches work standalone; MCP is optional',
    },
    {
      constraint: 'Two MCP transports',
      response: 'stdio and Streamable HTTP share createMcpServer() and tool handlers',
    },
  ],
  decisions: [
    {
      title: 'API as source of truth over MCP-direct DB',
      body: 'The MCP server could have talked to Postgres directly. Routing everything through REST keeps one authorization layer, one audit path, and lets the web UI reuse the same endpoints the tools call.',
    },
    {
      title: 'Explicit quick searches over phrase parsing',
      body: 'Ask the queue quick-search buttons map to fixed tool calls in code, not regex on user text. Typed questions optionally go through the Anthropic API with the same tool definitions as MCP. Without an Anthropic key, the panel stays honest and only offers fixed quick searches.',
    },
    {
      title: 'Tool log as the integration proof',
      body: 'The portfolio story is not just that MCP exists, but that REST and MCP show up in one log with transport badges. That makes the architecture legible without running two separate demos.',
    },
  ],
  quality: [
    'pnpm monorepo: api, mcp-server, web, shared',
    'Biome for lint/format; GitHub Actions CI with Postgres service',
    'Vitest on shared formatters and API integration tests',
    '/health checks database connectivity (503 when Postgres is down)',
    'Documented walkthroughs for web-only and MCP HTTP paths',
  ],
  ownership: [
    'System design: REST + MCP boundaries, audit model, write gating',
    'API: Fastify routes, Prisma schema, seed data, assist routing',
    'MCP: tool registration, stdio and HTTP transports, API client',
    'Web: queue UI, tool log with REST/MCP legend, Ask the queue panel',
    'Shared schemas, formatters, and audit entry copy',
  ],
  screenshots: SUPPORT_DESK_SCREENSHOTS,
} as const
