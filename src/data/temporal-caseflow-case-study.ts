import { SITE } from '../lib/site'

export const TEMPORAL_CASEFLOW_CASE_STUDY = {
  kind: 'public' as const,
  name: 'Temporal Caseflow',
  plainEnglish:
    'A durable case lifecycle built with Temporal. A case is triaged, waits for a human approve or reject decision, and escalates automatically if the SLA timer fires - even if the worker process restarts mid-wait.',
  tagline:
    'TypeScript Temporal workflows with activity retries, approval signals, status queries, SLA escalation, a Fastify API, and a separate worker process.',
  tags: ['TypeScript', 'Temporal', 'Fastify', 'Node.js', 'Workflows'],
  listDescription:
    'Durable support-case lifecycle with Temporal: flaky triage with retries, human approve/reject signals, SLA escalation, and queryable workflow status across worker restarts.',
  repo: SITE.temporalCaseflowRepo,
  role: {
    title: 'Solo build',
    context: 'Portfolio project',
    status: 'Public on GitHub',
  },
  summary: [
    'Temporal Caseflow is a small, standalone system for durable case orchestration. A Fastify API starts workflows and sends signals. A worker runs triage, resolve, close, and escalate activities against an in-memory case store that stands in for an external system.',
    'The interesting path is the wait. After triage, the workflow blocks on an approve or reject signal, or on an SLA timer. Stopping the worker does not lose that wait. Bring the worker back, send the signal, and the case completes from Temporal history.',
  ],
  problem: [
    'Long-running business processes need more than a request/response API. Human approvals, timers, and flaky downstream calls all fail in awkward ways when state lives only in memory or in ad hoc job queues.',
    'I wanted a focused project that shows durable execution clearly: retries for side effects, signals for human decisions, queries for in-flight status, and a timer path that escalates when nobody answers.',
  ],
  architectureIntro:
    'Three processes cooperate. Temporal owns workflow history. The worker executes workflows and activities. The API starts runs, signals decisions, answers status queries, and hosts the mock case store activities call over HTTP.',
  architecture: [
    {
      label: 'Workflow:',
      body: 'caseLifecycle moves OPEN → TRIAGED → AWAITING_APPROVAL, then APPROVED/RESOLVED, REJECTED/CLOSED, or ESCALATED.',
    },
    {
      label: 'Activities:',
      body: 'triageCase, resolveCase, closeCase, escalateCase. Triage fails once per case on purpose so retries are visible in local runs and in history.',
    },
    {
      label: 'Signals and query:',
      body: 'approve and reject unblock the wait. status returns the current CaseStatus while the workflow is running.',
    },
    {
      label: 'API and worker:',
      body: 'Fastify exposes start/signal/query plus internal activity callbacks. The worker polls the caseflow task queue separately from the API process.',
    },
  ],
  constraints: [
    {
      constraint: 'Survive process death',
      response: 'Wait state lives in Temporal history, not in the Node process',
    },
    {
      constraint: 'Human-in-the-loop',
      response: 'Signals for approve/reject instead of polling a database from the workflow',
    },
    {
      constraint: 'Show retries without chaos tooling',
      response: 'First triage activity fails once per case, then succeeds',
    },
    {
      constraint: 'Keep the demo runnable offline',
      response: 'In-memory case store and temporal server start-dev; no cloud account required',
    },
    {
      constraint: 'Stay focused',
      response: 'No product UI or Postgres - the thesis is durable orchestration',
    },
  ],
  decisions: [
    {
      title: 'Standalone repo instead of extending Support Desk',
      body: 'Durable execution is its own portfolio signal. Keeping Caseflow separate makes the Temporal story glanceable without diluting the MCP product case study.',
    },
    {
      title: 'Signals and SLA timer in one workflow',
      body: 'One caseLifecycle path covers approve, reject, and timeout. That is enough to show human-in-the-loop and durable timers without a second sample app.',
    },
    {
      title: 'Activities call HTTP, not the store directly',
      body: 'Side effects go through the API so the worker boundary matches how real Temporal apps talk to external systems.',
    },
    {
      title: 'Test the workflow with a local Temporal test environment',
      body: '@temporalio/testing covers the approve and escalate paths in CI without requiring a manually started server.',
    },
  ],
  quality: [
    'npm run check: TypeScript, ESLint, Prettier',
    'npm test: two workflow tests via @temporalio/testing',
    'GitHub Actions on push and pull request',
    'Demos for approve, reject, and SLA timeout',
    'README with architecture diagram and a kill-the-worker failure walkthrough',
  ],
  ownership: [
    'Workflow design: signals, query, SLA branch, activity retries',
    'Fastify API for start/signal/query and activity callbacks',
    'Worker process and task queue wiring',
    'Local demos and Temporal workflow tests',
    'CI and project documentation',
  ],
} as const
