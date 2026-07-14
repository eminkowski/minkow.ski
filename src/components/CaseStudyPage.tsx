import { Link } from '@tanstack/react-router'
import type { ReactNode } from 'react'
import { CaseStudyIntro } from './CaseStudyIntro'
import {
  BodyText,
  BulletList,
  Card,
  ExternalLink,
  LinkArrow,
  MetaField,
  ScrollPage,
  Section,
  TagList,
} from './ui'
import { constraintRowClass, type PortfolioCaseStudy } from '../lib/case-study'
import { UI_LABELS } from '../data/ui-labels'
import { ROUTES } from '../lib/routes'
import { label, metaLink, textClass } from '../lib/styles'

interface CaseStudyPageProps {
  study: PortfolioCaseStudy
  diagram: ReactNode
  prepend?: ReactNode
}

function CaseStudyTitle({ study }: { study: PortfolioCaseStudy }) {
  if (study.kind === 'private' && study.showTrademark !== false) {
    return (
      <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
        {study.name}
        <sup className="ml-0.5 text-[0.45em] font-semibold tracking-normal text-white/70">™</sup>
      </h1>
    )
  }

  return (
    <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">{study.name}</h1>
  )
}

function CaseStudyHeaderIntro({ study }: { study: PortfolioCaseStudy }) {
  if (study.kind === 'public') {
    return <CaseStudyIntro plainEnglish={study.plainEnglish} technicalSummary={study.tagline} />
  }

  return <p className={`text-sm ${textClass.muted} leading-relaxed`}>{study.tagline}</p>
}

function CaseStudyHeaderLinks({ study }: { study: PortfolioCaseStudy }) {
  if (study.kind === 'public') {
    return (
      <div className="flex flex-wrap gap-4 pt-1">
        <ExternalLink href={study.repo} variant="meta">
          {UI_LABELS.github} <LinkArrow />
        </ExternalLink>
        <Link to={study.pairedCaseStudy} className={metaLink}>
          {study.pairedLabel} <LinkArrow kind="forward" />
        </Link>
        <span className={`font-mono text-xs ${textClass.muted}`}>{UI_LABELS.codePublic}</span>
      </div>
    )
  }

  return (
    <div className="flex flex-wrap gap-4 pt-1">
      <ExternalLink href={study.url} variant="meta">
        {study.linkLabel} <LinkArrow />
      </ExternalLink>
      <span className={`font-mono text-xs ${textClass.muted}`}>{UI_LABELS.codePrivate}</span>
    </div>
  )
}

function CaseStudyOverview({ study }: { study: PortfolioCaseStudy }) {
  if (study.kind === 'private') {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
        <MetaField label="Role">
          <p className={textClass.secondary}>{study.role.title}</p>
        </MetaField>
        <MetaField label="Studio">
          <ExternalLink href={study.role.studioUrl} variant="text">
            {study.role.studio} <LinkArrow />
          </ExternalLink>
        </MetaField>
        <MetaField label="Status">
          <p className={textClass.secondary}>{study.role.status}</p>
        </MetaField>
        <MetaField label="Trademark">
          <p className={textClass.secondary}>{study.role.trademark}</p>
        </MetaField>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
      <MetaField label="Role">
        <p className={textClass.secondary}>{study.role.title}</p>
      </MetaField>
      <MetaField label="Context">
        <p className={textClass.secondary}>{study.role.context}</p>
      </MetaField>
      <MetaField label="Status">
        <p className={textClass.secondary}>{study.role.status}</p>
      </MetaField>
    </div>
  )
}

export function CaseStudyPage({ study, diagram, prepend }: CaseStudyPageProps) {
  return (
    <ScrollPage>
      <Card>
        <Link to={ROUTES.projects} className={`${metaLink} w-fit`}>
          <LinkArrow kind="back" /> {UI_LABELS.backToProjects}
        </Link>
        <p className={label}>{UI_LABELS.caseStudyLabel}</p>
        <CaseStudyTitle study={study} />
        <CaseStudyHeaderIntro study={study} />
        <TagList tags={study.tags} />
        <CaseStudyHeaderLinks study={study} />
      </Card>

      {prepend}

      <Card>
        <Section title="Summary">
          {study.summary.map(paragraph => (
            <BodyText key={paragraph.slice(0, 32)}>{paragraph}</BodyText>
          ))}
        </Section>
      </Card>

      <Card>
        <Section title="Overview">
          <CaseStudyOverview study={study} />
        </Section>
      </Card>

      <Card>
        <Section title="The problem">
          {study.problem.map(paragraph => (
            <BodyText key={paragraph.slice(0, 32)}>{paragraph}</BodyText>
          ))}
        </Section>
      </Card>

      <Card>
        <Section title="Key decisions">
          <div className="flex flex-col gap-4">
            {study.decisions.map(({ title, body }) => (
              <div key={title} className="flex flex-col gap-1.5">
                <p className={`text-sm ${textClass.link} font-medium`}>{title}</p>
                <p className={`text-sm ${textClass.muted} leading-relaxed`}>{body}</p>
              </div>
            ))}
          </div>
        </Section>
      </Card>

      <Card>
        <Section title="Architecture">
          {study.architectureIntro && <BodyText>{study.architectureIntro}</BodyText>}
          {diagram}
          {study.architecture.map(entry => (
            <BodyText key={entry.body.slice(0, 32)}>
              {entry.label && <span className={textClass.link}>{entry.label}</span>}
              {entry.label ? ' ' : null}
              {entry.body}
            </BodyText>
          ))}
        </Section>
      </Card>

      <Card>
        <Section title="Constraints">
          <div className="flex flex-col gap-2">
            {study.constraints.map(({ constraint, response }) => (
              <div key={constraint} className={constraintRowClass}>
                <p className={`text-sm ${textClass.secondary}`}>{constraint}</p>
                <p className={`text-sm ${textClass.muted}`}>{response}</p>
              </div>
            ))}
          </div>
        </Section>
      </Card>

      <Card>
        <Section title="Quality and operability">
          <BulletList items={study.quality} />
        </Section>
      </Card>

      <Card>
        <Section title="What I owned">
          <BulletList items={study.ownership} />
        </Section>
      </Card>

      {study.outcome && (
        <Card>
          <Section title="Outcome">
            {study.outcome.map(paragraph => (
              <BodyText key={paragraph.slice(0, 32)}>{paragraph}</BodyText>
            ))}
          </Section>
        </Card>
      )}

      {study.kind === 'private' && (
        <Card>
          <Section title="What I am not publishing">
            {study.privateNote.map(paragraph => (
              <BodyText key={paragraph.slice(0, 32)}>{paragraph}</BodyText>
            ))}
          </Section>
        </Card>
      )}
    </ScrollPage>
  )
}
