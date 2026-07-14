import { ROUTES } from '../lib/routes'
import { SITE } from '../lib/site'

/** Main visual sequence: Review → Normal → Completed. */
export const SUPPORT_DESK_SCREENSHOTS = [
  {
    src: '/projects/support-desk-mcp/action-review.png',
    alt: 'Support queue with a review card for a proposed internal comment before confirm',
    caption:
      'Review state: selected ticket and proposal match, Confirm and save is primary, Assist awaits review, composer stays paused.',
  },
  {
    src: '/projects/support-desk-mcp/workspace.png',
    alt: 'Support queue with six tickets, a selected ticket workspace, and contextual Assist panel',
    caption:
      'Normal state: the queue, selected ticket, thread, and Assist context remain visible in one workspace before an action is proposed.',
  },
  {
    src: '/projects/support-desk-mcp/action-completed.png',
    alt: 'Support queue after confirming an assistant comment, with Done in Assist and updated thread',
    caption:
      'After: Assist settles to Done; thread and activity show the confirmed write. Cross-pane lifecycle complete.',
  },
] as const

export const SUPPORT_DESK_CASE_STUDY = {
  kind: 'public' as const,
  name: 'Support Desk MCP',
  plainEnglish:
    'A support desk built to show how AI agents can operate inside real product workflows. A human works from a dense React queue, reviews proposed actions before confirming them, and sees every browser or agent action in one audit trail.',
  tagline:
    'AI-assisted support desk with a keyboard-first React workflow, typed MCP tools, reviewable write actions, and unified audit logging.',
  tags: [
    'TypeScript',
    'React',
    'TanStack Table',
    'MCP',
    'Fastify',
    'PostgreSQL',
    'Zod',
    'Monorepo',
  ],
  listDescription:
    'Dense support-operations workspace where browser and MCP actions share one case history. Includes queue workflows, agent-proposed writes, human confirmation, and a unified audit trail.',
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
    'Support Desk MCP connects the queue, ticket workspace, Assist panel, review flow, and audit history into one operator session. Assistant writes are proposed rather than executed silently. The user can inspect or edit the draft, confirm it, and immediately see the thread, activity, queue metadata, and audit trail update together.',
    'The system uses a Fastify API, React UI, MCP server, shared Zod schemas, PostgreSQL, and a unified audit model. Browser and MCP clients enter through different transports but share the same validation, business logic, and write protections.',
    'The companion project, Agent Eval Harness, imports audit rows or records live MCP runs into trace JSON. It regression-tests tool choice, write guards, and ordering in CI.',
  ],
  problem: [
    'MCP integrations often grow as one-off glue per client, duplicating validation and obscuring which protections live in the client versus the server. Once agents can propose or perform writes, that ambiguity becomes a product and operational risk: users need to know what will change, who initiated it, and where the action was recorded.',
    'I wanted to solve that inside a web interface that felt like real support software rather than a chatbot demo.',
  ],
  architectureIntro:
    'The API is the center of the system. The browser calls REST directly. MCP clients talk to an MCP server that calls the same REST API, never Postgres. Both paths share Zod validation, business rules, and one audit trail with actor, transport, proposed versus confirmed writes, and inspectable payloads.',
  architecture: [
    {
      label: 'REST API:',
      body: 'Fastify, Prisma, PostgreSQL. Tickets, agents, comments, assist endpoint with propose-comment flow, and audit reads/writes. API key on /api/*.',
    },
    {
      label: 'Audit model:',
      body: 'Every REST and MCP tool call writes an AuditLog row. Web assist proposals are recorded separately from the human confirm that actually mutates the ticket, so the trail shows intent and commitment.',
    },
    {
      label: 'Web UI:',
      body: 'React, TanStack Query, and a keyboard-accessible split-pane workspace. Queue selection, ticket context, Assist state, review cards, thread updates, and activity records stay synchronized across one interaction lifecycle. URL ticket state, deliberate focus management, stale-proposal protection, and pending-state locks prevent actions from drifting across tickets.',
    },
    {
      label: 'MCP server:',
      body: 'Five typed tools with Zod input schemas. stdio for local clients, Streamable HTTP at /mcp for remote connectors. Calls the REST API; does not touch Postgres directly.',
    },
    {
      label: 'Shared package:',
      body: 'Zod schemas, tool result formatters, quick-search definitions, proposed-action types, and audit detail formatting used by API, MCP, and web.',
    },
  ],
  constraints: [
    {
      constraint: 'Same tools, multiple clients',
      response: 'One schema package; MCP and REST share validation and formatters',
    },
    {
      constraint: 'Writes must be explicit',
      response:
        'MCP add_comment requires confirmed: true; web assist proposes comments for human review before REST write',
    },
    {
      constraint: 'Observable cross-client usage',
      response:
        'Unified AuditLog across browser and MCP: actor attribution, transport, and propose vs confirm as separate events',
    },
    {
      constraint: 'Runnable without a chat client',
      response: 'Web UI, keyboard nav, and quick searches work standalone; MCP is optional',
    },
    {
      constraint: 'UI should feel like real ops software',
      response:
        'Dense queue, dominant workspace, secondary Assist, keyboard shortcuts, and review-before-write AI',
    },
  ],
  decisions: [
    {
      title: 'Evolve the working system instead of building a disconnected UI demo',
      body: 'The MCP and audit foundation already worked. I focused the next iteration on turning the React client into a product interface that reviewers could understand quickly, without creating a separate showcase app that bypassed the real architecture.',
    },
    {
      title: 'Propose → review → confirm for web assist writes',
      body: 'Web assist stays read-only for tool execution. Draft comment requests return a proposedAction; the UI shows a preview and safety copy before calling the existing comment endpoint. Audit logs propose then confirm as distinct events.',
    },
    {
      title: 'Connected workflow over feature checklist',
      body: 'Queue selection, detail pane, Assist, activity, and audit are one session: select ticket → draft → review → confirm → see thread and audit update together.',
    },
    {
      title: 'Composition before decoration',
      body: 'The visual system stays restrained on purpose: warm canvas, white workspace, teal selection rails, and a quieter Assist panel. Hierarchy comes from pane roles and state lifecycle, not gradients or sparklines.',
    },
  ],
  quality: [
    'pnpm monorepo: api, mcp-server, web, shared',
    'Biome for lint/format; GitHub Actions CI with Postgres service',
    'Vitest on shared formatters and API integration tests',
    '/health checks database connectivity (503 when Postgres is down)',
    'Demo seed, screenshot guide, and dev-only failure simulations for reviewable capture',
  ],
  ownership: [
    'System design: REST + MCP boundaries, audit model, write gating, propose-comment flow',
    'API: Fastify routes, Prisma schema, assist and propose-comment services',
    'MCP: tool registration, stdio and HTTP transports, API client',
    'Web: queue workspace, Assist lifecycle, action review card, activity strip, tool log',
    'Shared schemas, formatters, and audit entry copy',
  ],
  outcome: [
    'The finished workflow makes the safety model visible without turning the product into an AI demo. An operator can scan tickets, request help, inspect or edit a proposed comment, confirm the write, and trace the resulting change without leaving the workspace.',
    'The same server-enforced rules apply to browser and MCP clients. Proposals and confirmed writes remain separate audit events, and stale or failed actions preserve the draft rather than silently retrying or mutating outdated ticket state.',
  ],
  screenshots: SUPPORT_DESK_SCREENSHOTS,
} as const
