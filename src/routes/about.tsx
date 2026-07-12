import { ABOUT_FOCUS, ABOUT_PARAGRAPHS, ABOUT_SIDE_PROJECTS_AFTER, ABOUT_SIDE_PROJECTS_BEFORE, SKILLS, STACK_INTRO } from '../data/about'
import {
  BulletList,
  Card,
  EmailIcon,
  ExternalLink,
  LinkedInIcon,
  LinkArrow,
  PageGrid,
  TagList,
} from '../components/ui'
import { label, textClass } from '../lib/styles'
import { SITE } from '../lib/site'

export function About() {
  return (
    <PageGrid>
      <Card className="sm:col-span-2">
        <p className={label}>About</p>
        {ABOUT_PARAGRAPHS.map(paragraph => (
          <p key={paragraph.slice(0, 32)} className={`${textClass.secondary} leading-7 text-sm`}>
            {paragraph}
          </p>
        ))}
        <p className={`${textClass.secondary} leading-7 text-sm`}>
          {ABOUT_SIDE_PROJECTS_BEFORE}
          <ExternalLink href={SITE.studio} variant="inline">
            {SITE.studioName}
          </ExternalLink>
          {ABOUT_SIDE_PROJECTS_AFTER}
        </p>
      </Card>

      <Card>
        <p className={label}>Focus</p>
        <BulletList items={ABOUT_FOCUS} />
      </Card>

      <Card>
        <p className={label}>Stack</p>
        <p className={`text-sm ${textClass.body} leading-relaxed`}>{STACK_INTRO}</p>
        <TagList tags={SKILLS} />
      </Card>

      <Card className="sm:col-span-2">
        <p className={label}>Contact</p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-8">
          <ExternalLink
            href={`mailto:${SITE.email}`}
            variant="contact"
            className="flex items-center gap-2"
          >
            <EmailIcon className="text-white/60" />
            {SITE.email} <LinkArrow />
          </ExternalLink>
          <ExternalLink
            href={SITE.linkedin}
            variant="contact"
            className="flex items-center gap-2"
          >
            <LinkedInIcon className="text-white/60" />
            LinkedIn <LinkArrow />
          </ExternalLink>
        </div>
      </Card>
    </PageGrid>
  )
}
