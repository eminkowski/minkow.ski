import { ROUTES } from '../lib/routes'
import { SITE } from '../lib/site'

/**
 * Portfolio screenshots in story order:
 * product context → central pattern → safety → reasoning → reuse.
 */
export const WORKSURFACE_SCREENSHOTS = [
  {
    src: '/projects/worksurface-ui/relay-workspace.png',
    alt: 'Relay Operations wide workspace with queue, billing-hold case, ActionReview, and activity',
    caption:
      'Relay workspace (wide): queue, selected billing hold, ActionReview, and activity in one composition.',
  },
  {
    src: '/projects/worksurface-ui/action-review.png',
    alt: 'Action review live example in awaiting-review with lifecycle, proposal, case context, activity, and audit preview',
    caption:
      'Action review: awaiting confirmation. Proposal stays beside case context, activity, and an audit preview.',
  },
  {
    src: '/projects/worksurface-ui/action-review-stale.png',
    alt: 'Action review in stale state with alert and Confirm and save disabled',
    caption:
      'Stale: the case moved after the draft. Confirm is blocked until the operator dismisses or regenerates.',
  },
  {
    src: '/projects/worksurface-ui/design-decisions.png',
    alt: 'Design decisions page showing core constraints and rejected approaches',
    caption:
      'Design decisions: review is amber, not red; propose and confirm stay separate; Dialog and generic Card were rejected for this flow.',
  },
  {
    src: '/projects/worksurface-ui/adoption.png',
    alt: 'Adoption page with package boundary diagram and "Compose, don\'t fork" example',
    caption:
      'Adoption: package boundary, "Compose, don\'t fork" example, and what v0.1 exports today.',
  },
] as const

export const WORKSURFACE_CASE_STUDY = {
  kind: 'public' as const,
  name: 'Worksurface UI',
  plainEnglish:
    'A React design system for dense operational interfaces. It takes the layout primitives, accessibility patterns, and review-before-write contracts from a support-operations prototype and documents them with a fictional Relay Operations workspace.',
  tagline:
    'Semantic tokens, layout primitives, React Aria overlays, and ActionReview and defineAction for agent-proposed writes that still need human confirmation.',
  tags: [
    'TypeScript',
    'React',
    'React Aria',
    'Vite',
    'CSS tokens',
    'Design system',
  ],
  listDescription:
    'React system for dense operational interfaces: semantic tokens, layout primitives, accessible overlays, and a typed review contract for agent-proposed writes. Extracted from Support Desk MCP and exercised through fictional Relay Operations examples.',
  repo: SITE.worksurfaceRepo,
  pairedCaseStudy: ROUTES.projectsSupportDesk,
  pairedLabel: 'Support Desk MCP',
  pairedRepo: SITE.supportDeskRepo,
  role: {
    title: 'Solo build',
    context: 'Portfolio project · extracted from Support Desk MCP',
    status: 'Public on GitHub',
  },
  summary: [
    'Support Desk MCP needed a dense queue where an assistant could propose a write, but a human still had to review and confirm it. Worksurface UI extracts the reusable parts of that workflow: semantic tokens, density-aware layout primitives, accessible overlays, and a typed ActionReview lifecycle.',
    'The documentation exercises those pieces through a fictional Relay Operations workspace. v0.1 deliberately stays narrow, with its automated coverage, inherited behavior, package boundaries, and excluded features documented explicitly.',
  ],
  problem: [
    'Support Desk MCP combined a dense case queue with assistant-generated actions. The difficult part was not generating a draft. It was keeping the proposal beside enough case history for an operator to evaluate it, preventing stale confirmation, and preserving a usable audit trail after the write.',
    'Those contracts were useful beyond one product, but they were embedded in product-specific screens and terminology. Worksurface extracts them without pretending to be a complete enterprise design system.',
  ],
  architectureIntro:
    'Worksurface is a library plus a docs explorer. The library owns tokens, primitives, controls, and ActionReview. Consuming apps own routes, fetching, domain schemas, and how workspace regions are composed.',
  architecture: [
    {
      label: null,
      body: 'The package is organized from semantic foundations through layout primitives and accessible controls to product-level patterns. Relay Operations serves only as a composition fixture, showing how queue controls, activity, overlays, and ActionReview behave together without moving product routes or domain logic into the library.',
    },
  ],
  decisions: [
    {
      title: 'Extract from a working product, then rename the reference domain',
      body: 'The interaction model came from Support Desk MCP. Docs examples use Relay Operations (REL-8841, Northwind Analytics) so the system can be read on its own while still pointing at the prototype that forced the contracts.',
    },
    {
      title: 'ActionReview as a first-class pattern, not a demo widget',
      body: 'Confirmation fails when it is a floating card with no case context. The pattern carries scope, draft, and status, and compositions place it next to activity and audit.',
    },
    {
      title: 'React Aria for overlays; tokens for everything else',
      body: 'Focus, dismissal, and labeling for menu, popover, tooltip, and dialog come from React Aria. Visual language stays on semantic CSS tokens and density modes.',
    },
    {
      title: 'Document rejected approaches and real quality tiers',
      body: 'Design decisions and Quality pages state what was refused and what the tests actually cover. That honesty mattered more than adding another foundation page.',
    },
    {
      title: 'Keep the library/product boundary sharp',
      body: 'Worksurface exports interaction surfaces. Routes, auth, domain rules, and product-local panels stay in the consuming app. Compose, don\'t fork the system for small product differences.',
    },
    {
      title: 'Publish a narrow v0.1',
      body: 'Dark theme, data tables, form frameworks, and an npm package are out of scope. Page depth follows the material rather than a design-system checklist.',
    },
  ],
  quality: [
    'Vite + React + TypeScript library and docs site',
    'Vitest: ActionReview / defineAction cases plus docs-nav route integrity',
    'npm run check: typecheck, tests, production build',
    'Quality docs separate automated coverage from React Aria-inherited and manual behavior',
    'Adoption page: package boundary, export status, allowed / not-allowed composition guidance',
  ],
  ownership: [
    'Extracting reusable surface and review contracts from Support Desk MCP',
    'Tokens, density and motion modes, primitives, and control wrappers',
    'ActionReview lifecycle and defineAction contract',
    'Docs explorer and Relay composition fixture',
    'Accessibility posture for exported surfaces',
  ],
  outcome: [
    'The result is a runnable library and documentation explorer with a typed action contract, stale-state protection, density and motion modes, responsive workspace examples, route-integrity tests, and an explicit adoption boundary.',
    'The next step is adoption in another real product, not expanding the docs to imitate a larger design-system catalog.',
  ],
  screenshots: WORKSURFACE_SCREENSHOTS,
} as const
