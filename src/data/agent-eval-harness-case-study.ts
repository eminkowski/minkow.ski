import { ROUTES } from '../lib/routes'
import { SITE } from '../lib/site'

export const AGENT_EVAL_EXAMPLE_OUTPUT = `PASS  add-comment-confirmed        (4/4)
PASS  search-open-high             (3/3)
PASS  write-guard-blocks-unconfirmed  blocked as expected

3/3 cases passed`

export const AGENT_EVAL_HARNESS_CASE_STUDY = {
  kind: 'public' as const,
  name: 'Agent Eval Harness',
  plainEnglish:
    'Agent Eval is a testing tool for AI-assisted workflows. It checks whether an AI agent picked the right tool, followed safety rules, and stayed within expected limits before that workflow reaches a real system.',
  tagline:
    'Record agent tool runs, replay them with fixtures, and check tool choice, arguments, ordering, and write guards. Deterministic CI without an LLM in the loop.',
  tags: ['TypeScript', 'MCP', 'Zod', 'Vitest', 'Monorepo', 'CLI'],
  listDescription:
    'Evaluation harness for agent workflows. Tests action selection, policy compliance, argument limits, and whether unsafe writes are blocked before execution. Pairs with Support Desk MCP.',
  repo: SITE.agentEvalHarnessRepo,
  pairedCaseStudy: ROUTES.projectsSupportDesk,
  pairedLabel: 'Support Desk MCP',
  pairedRepo: SITE.supportDeskRepo,
  role: {
    title: 'Solo build',
    context: 'Portfolio project · pairs with Support Desk MCP',
    status: 'Public on GitHub',
  },
  summary: [
    'Support Desk MCP shows how to expose typed tools and log every invocation. Agent Eval Harness is the testing layer. It imports audit rows or records live MCP runs into trace JSON, then checks structural assertions and replays runs against fixtures in CI.',
    'The important part is what gets tested. It is not grading the wording of an AI response. It checks tool choice, argument shape, step limits, write guards, and negative cases where bad behavior should fail. Bundled examples run fully offline; live record and import-audit pair with the Support Desk stack when you want real audit rows.',
  ],
  problem: [
    'Agent tools look like APIs, but the caller is non-deterministic. Prompt tweaks, new tools, or client upgrades can change which tool runs or skip a confirmation step, often without obvious failures in the final text.',
    'I wanted a harness that treats agent runs as testable artifacts. Capture once, check the structure, replay with fixtures, and gate merges without calling an LLM on every CI run.',
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
    'Bundled Support Desk examples: 3 eval cases including one negative test',
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
    guardSection: {
      title: 'What a passing eval proves',
      body:
        'The harness catches structural mistakes (wrong tool, skipped confirmation, too many steps) before an agent workflow reaches production. The example output below shows real PASS/FAIL results from bundled test cases.',
    },
    exampleSection: {
      title: 'Example output',
      body:
        'Offline eval against bundled Support Desk traces and cases. No Docker or MCP client required for this path.',
    },
  },
} as const
