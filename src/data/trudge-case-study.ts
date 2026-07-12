import { SITE } from '../lib/site'

export const TRUDGE_CASE_STUDY = {
  name: 'Trudge',
  tagline:
    'Privacy-first mobile companion for sensitive personal data. Local-first architecture, client-side encryption, and a thin API that never handles readable user content.',
  tags: ['React Native', 'TypeScript', 'Hono', 'PostgreSQL', 'OpenAPI', 'Monorepo'],
  url: SITE.trudge,
  role: {
    title: 'Founder / lead engineer',
    studio: SITE.studioName,
    studioUrl: SITE.studio,
    status: 'Pre-launch',
    trademark: 'US trademark filed',
  },
  summary: [
    'Trudge is a privacy-first mobile companion built for people managing sensitive personal health and recovery data on their phones. The product is local-first: the app is the system of record, and the backend exists only for public reference data, app configuration, and optional encrypted backups the server cannot read.',
    'I designed and built the whole thing myself: mobile app, API, shared types, CI, and store pipelines. The goal was a codebase I can still maintain in five years, not a quick demo.',
  ],
  problem: [
    'Apps in this space often ask users to trust a cloud account with deeply personal information. The catch is simple: the more useful the product, the more data leaves the device.',
    'I wanted something useful day to day (tracking, journaling, directory lookup) without the server ever holding readable personal content. That constraint shaped every major decision.',
  ],
  architecture: [
    {
      label: 'Mobile (the product):',
      body: 'React Native with Expo, file-based routing, WatermelonDB for reactive local storage, Zustand for UI state, TanStack Query for server-backed data. Custom UI with no third-party component library.',
    },
    {
      label: 'Backend (intentionally thin):',
      body: 'Hono on Node.js, PostgreSQL, Prisma. Serves public directory data and configuration. Accepts only opaque, client-encrypted backup payloads when the user opts in.',
    },
    {
      label: 'Shared package:',
      body: 'Domain types and validation schemas consumed by both mobile and API so contracts stay aligned.',
    },
    {
      label: null,
      body: 'Network calls carry public data, anonymous auth tokens, and ciphertext. They do not carry journal entries, personal notes, or other recovery content in plaintext.',
    },
  ],
  constraints: [
    {
      constraint: 'Sensitive personal data',
      response: 'Client-side encryption at rest; server stores ciphertext only',
    },
    {
      constraint: 'Must work without connectivity',
      response: 'Local-first storage; UI driven by observable DB queries',
    },
    {
      constraint: 'Small team, long maintenance horizon',
      response: 'Strict layering (hooks / services / routes), documented ADRs',
    },
    {
      constraint: 'API must stay evolvable',
      response: 'OpenAPI schema-first routes with shared Zod validation',
    },
    {
      constraint: 'Production quality bar',
      response: '950+ unit tests, lint/typecheck/test gate on every change',
    },
  ],
  decisions: [
    {
      title: 'Local-first over server-centric',
      body: 'A server-centric model is simpler to build early but makes offline use and privacy guarantees harder. I chose local-first storage with a reactive query layer so the UI stays fast when the network is unavailable. The server is a supplement, not the source of truth for personal data.',
    },
    {
      title: 'Thin backend over "smart" backend',
      body: 'It was tempting to put more logic and identity on the server. I kept the API narrow: public data, config, and optional blob storage. That reduces attack surface, simplifies compliance reasoning, and keeps the product usable when backend features are down.',
    },
    {
      title: 'Schema-first API over ad-hoc routes',
      body: 'As the API grew, undocumented response shapes became a maintenance risk. Every endpoint is declared with OpenAPI (createRoute + Zod schemas), validated consistently, and tested via an in-process fetch harness. Interactive docs are generated from the same schemas the code enforces.',
    },
  ],
  quality: [
    'Monorepo (mobile, backend, shared) with Turborepo and pnpm workspaces',
    'TypeScript strict mode end to end, including exactOptionalPropertyTypes',
    '950+ unit tests across mobile, API, and shared packages',
    'CI gate: format, lint, typecheck, and test must pass with zero warnings',
    'Optional Redis-backed job queue with a separate worker process when scale requires it',
    'Architecture decisions recorded as ADRs (stack choices, storage, API style, privacy posture)',
  ],
  ownership: [
    'System architecture and threat-model-aligned data boundaries',
    'Mobile app: navigation, design system, local data layer, encryption integration',
    'Backend: API design, database schema, ingestion jobs for public directory data',
    'Shared contracts, test strategy, and developer documentation',
    'App store accounts, build pipelines, and pre-launch compliance groundwork',
  ],
  privateNote: [
    'The codebase is private. This case study does not describe product positioning, launch sequencing, differentiated UX patterns, content strategy, or operational details that would help a competitor replicate the product rather than evaluate my engineering.',
    'Happy to walk through architecture, code organization, and testing in interviews. Engineering depth, not product spoilers.',
  ],
} as const
