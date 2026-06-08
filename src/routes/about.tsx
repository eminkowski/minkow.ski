import { ABOUT_INTRO, SKILLS } from '../data/about'
import { Card, ExternalLink, LinkArrow, PageGrid, TagList } from '../components/ui'
import { label, textClass } from '../lib/styles'
import { SITE } from '../lib/site'

export function About() {
  return (
    <PageGrid>
      <Card className="sm:col-span-2">
        <p className={label}>About</p>
        <p className={`${textClass.secondary} leading-relaxed text-sm`}>{ABOUT_INTRO}</p>
        <p className={`${textClass.secondary} leading-relaxed text-sm`}>
          I also run{' '}
          <ExternalLink href={SITE.studio} variant="inline">
            {SITE.studioName}
          </ExternalLink>
          , my own LLC, where I build and ship products like Trudge.
        </p>
      </Card>

      <Card>
        <p className={label}>Stack</p>
        <TagList tags={SKILLS} />
      </Card>

      <Card>
        <p className={label}>Contact</p>
        <ExternalLink href={`mailto:${SITE.email}`} variant="contact">
          {SITE.email} <LinkArrow />
        </ExternalLink>
        <ExternalLink href={SITE.linkedin} variant="contact">
          linkedin <LinkArrow />
        </ExternalLink>
      </Card>
    </PageGrid>
  )
}
