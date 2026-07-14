import type { AppRoute } from './routes'

export interface CaseStudyArchitectureEntry {
  label: string | null
  body: string
}

export interface CaseStudyConstraint {
  constraint: string
  response: string
}

export interface CaseStudyDecision {
  title: string
  body: string
}

interface CaseStudyContent {
  name: string
  tagline: string
  tags: readonly string[]
  listDescription: string
  summary: readonly string[]
  problem: readonly string[]
  architecture: readonly CaseStudyArchitectureEntry[]
  architectureIntro?: string
  constraints: readonly CaseStudyConstraint[]
  decisions: readonly CaseStudyDecision[]
  quality: readonly string[]
  ownership: readonly string[]
  outcome?: readonly string[]
}

export interface PublicCaseStudy extends CaseStudyContent {
  kind: 'public'
  plainEnglish: string
  repo: string
  pairedCaseStudy: AppRoute
  pairedLabel: string
  role: {
    title: string
    context: string
    status: string
  }
}

export interface PrivateCaseStudy extends CaseStudyContent {
  kind: 'private'
  url: string
  linkLabel: string
  showTrademark?: boolean
  role: {
    title: string
    studio: string
    studioUrl: string
    status: string
    trademark: string
  }
  privateNote: readonly string[]
}

export type PortfolioCaseStudy = PublicCaseStudy | PrivateCaseStudy

export const constraintRowClass =
  'grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-4 py-2 border-b border-white/[0.04] last:border-0'
