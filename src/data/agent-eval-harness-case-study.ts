import { ROUTES } from '../lib/routes'
import { SITE } from '../lib/site'

/** Real `ate eval` output for the bundled Support Desk cases. */
export const AGENT_EVAL_EXAMPLE_OUTPUT = `PASS  add-comment-confirmed        (4/4)
PASS  search-open-high             (3/3)
PASS  write-guard-blocks-unconfirmed expected fail

3/3 cases passed`

export const AGENT_EVAL_HARNESS_CASE_STUDY = {
  kind: 'public' as const,
  name: 'Agent Eval Harness',
  plainEnglish:
    'A CI gate for AI agent tool use. If an agent picks the wrong tool, skips a required confirmation, or takes too many steps, the build fails before that behavior reaches a live system.',
  tagline:
    'Companion CLI to Support Desk MCP. Structural assertions and fixture replay gate agent writes in CI - no LLM in the default path.',
  tags: ['TypeScript', 'CI', 'MCP', 'Zod', 'Vitest', 'Monorepo', 'CLI'],
  listDescription:
    'CI companion to Support Desk MCP. Gates agent tool choice, ordering, and write confirmation so unsafe runs fail the build before production.',
  repo: SITE.agentEvalHarnessRepo,
  pairedCaseStudy: ROUTES.projectsSupportDesk,
  pairedLabel: 'Support Desk MCP',
  role: {
    title: 'Solo build',
    context: 'CI companion to Support Desk MCP',
    status: 'Public on GitHub',
  },
  summary: [
    'Support Desk MCP is the product: typed tools, human confirmation, and an audit trail. Agent Eval Harness is the CI layer beside it. It turns audit rows or recorded MCP runs into trace JSON, then fails the build on wrong tools, bad argument shape, skipped write confirmation, or over-long traces.',
    'It does not grade prose. Bundled examples run offline; live record and import-audit plug into Support Desk when you want fresh traces from a real stack.',
  ],
  problem: [
    'Agent tools look like APIs, but the caller is non-deterministic. Prompt tweaks, new tools, or client upgrades can change which tool runs or skip a confirmation step, often without obvious failures in the final text.',
    'I wanted a harness that treats agent runs as testable artifacts. Capture once, check structure, replay with fixtures, and gate merges without calling an LLM on every CI run.',
  ],
  architecture: [
    {
      label: 'shared:',
      body: 'Zod schemas for traces, eval cases, record scripts, and audit normalization.',
    },
    {
      label: 'replay:',
      body: 'Assertion engine (tool_called, tool_order, write_guard, max_steps, output_contains) and fixture replay.',
    },
    {
      label: 'recorder:',
      body: 'MCP HTTP client, deterministic script recording, optional Anthropic prompt recording.',
    },
    {
      label: 'ATE CLI',
      body: 'The ate command validates, evals, replays, records, and imports audits. It orchestrates packages and prints PASS/FAIL reports.',
    },
  ],
  constraints: [
    {
      constraint: 'Deterministic CI',
      response: 'Fixture replay and structural eval; no LLM judge in the default path',
    },
    {
      constraint: 'Capture from real systems',
      response: 'import-audit from Support Desk REST; record via MCP HTTP or script',
    },
    {
      constraint: 'Write safety',
      response: 'write_guard assertions and negative expectedOutcome: fail cases',
    },
    {
      constraint: 'Transport-agnostic traces',
      response: 'Same trace shape from audit import, MCP record, or future sources',
    },
    {
      constraint: 'Runnable without live stack',
      response: 'Bundled traces, fixtures, and cases pass eval/replay offline',
    },
  ],
  decisions: [
    {
      title: 'Structural assertions before LLM-as-judge',
      body: 'Tool choice, ordering, and write guards are binary and belong in CI. Subjective reply quality can layer on later; the default path stays fast and deterministic.',
    },
    {
      title: 'Fixture replay alongside eval',
      body: 'Eval checks behavior against assertions; replay checks that fixture outputs still align with recorded steps. Together they catch schema drift and silent output changes.',
    },
    {
      title: 'Scripted recording before prompt recording',
      body: 'Deterministic MCP scripts capture real tool I/O without model variance. Prompt recording is optional for exploratory runs; scripts are the source of truth for regression fixtures.',
    },
  ],
  quality: [
    'pnpm monorepo: cli, shared, replay, recorder',
    'Biome + GitHub Actions CI; Vitest on schemas, replay, recorder, and CLI integration',
    'Bundled Support Desk examples: 3 eval cases including one negative write-guard test',
    'Docs with mermaid diagrams: why-agent-evals, how-traces-work, demo walkthrough, ADRs',
  ],
  ownership: [
    'System design: trace schema, assertion types, eval vs replay split',
    'Replay engine and fixture store',
    'MCP recorder and audit import normalization',
    'CLI commands and integration tests',
    'Example traces, fixtures, cases, and Support Desk pairing docs',
  ],
  exampleOutput: AGENT_EVAL_EXAMPLE_OUTPUT,
  prepend: {
    exampleSection: {
      title: 'Write confirmation as a CI gate',
      body:
        'The third line is a negative test: an unconfirmed add_comment must trip write_guard. PASS + expected fail means the guard still catches unsafe writes - if that guard ever stops failing, this case turns red.',
    },
    guardSection: {
      title: 'What a passing suite proves',
      body:
        'Positive cases prove safe tool choice and confirmed writes. The negative case proves unsafe writes still fail assertions. Together they gate agent behavior before a merge, without grading the wording of a model reply.',
    },
  },
} as const
