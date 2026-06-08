import { Link } from '@tanstack/react-router'
import { ArchitectureDiagram } from '../components/ArchitectureDiagram'
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
} from '../components/ui'
import { TRUDGE_CASE_STUDY } from '../data/trudge-case-study'
import { ROUTES } from '../lib/routes'
import { label, metaLink, textClass } from '../lib/styles'

const study = TRUDGE_CASE_STUDY

export function ProjectsTrudge() {
  return (
    <ScrollPage>
      <Card>
        <Link to={ROUTES.projects} className={`${metaLink} w-fit`}>
          <LinkArrow kind="back" /> projects
        </Link>
        <p className={label}>Case study</p>
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">{study.name}</h1>
        <p className={`text-sm ${textClass.muted} leading-relaxed`}>{study.tagline}</p>
        <TagList tags={study.tags} />
        <div className="flex flex-wrap gap-4 pt-1">
          <ExternalLink href={study.url} variant="meta">
            trudge.app <LinkArrow />
          </ExternalLink>
          <span className={`font-mono text-xs ${textClass.muted}`}>code · private</span>
        </div>
      </Card>

      <Card>
        <Section title="Summary">
          {study.summary.map(paragraph => (
            <BodyText key={paragraph.slice(0, 32)}>{paragraph}</BodyText>
          ))}
        </Section>
      </Card>

      <Card>
        <Section title="Overview">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
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
          </div>
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
        <Section title="Architecture">
          <ArchitectureDiagram />
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
              <div
                key={constraint}
                className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-4 py-2 border-b border-white/[0.04] last:border-0"
              >
                <p className={`text-sm ${textClass.secondary}`}>{constraint}</p>
                <p className={`text-sm ${textClass.muted}`}>{response}</p>
              </div>
            ))}
          </div>
        </Section>
      </Card>

      <Card>
        <Section title="Three decisions">
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
        <Section title="Quality and operability">
          <BulletList items={study.quality} />
        </Section>
      </Card>

      <Card>
        <Section title="What I owned">
          <BulletList items={study.ownership} />
        </Section>
      </Card>

      <Card>
        <Section title="What I am not publishing">
          {study.privateNote.map(paragraph => (
            <BodyText key={paragraph.slice(0, 32)}>{paragraph}</BodyText>
          ))}
        </Section>
      </Card>
    </ScrollPage>
  )
}
