import { ROUTES } from '../lib/routes'
import { SITE } from '../lib/site'

export const HOME_LABELS = {
  portfolio: 'Portfolio',
  about: 'About',
  github: 'GitHub',
  featured: 'Featured',
  publicCode: 'Public code',
  projects: 'Projects',
  studio: 'Studio',
  focus: 'Focus',
  resume: 'Resume',
  linkedin: 'LinkedIn',
  email: 'Email',
} as const

export const HOME_CTA = {
  background: 'Background',
  readCaseStudy: 'Read case study',
  viewAll: 'View all',
  viewPdf: 'View PDF',
} as const

export const HOME_FEATURED_TITLE = 'Trudge'

export const HOME_AGENT_TOOLING_TITLE = 'AI agent tooling'

export const HOME_AGENT_TOOLING_BLURB =
  'Support desk app with audit logging and safety checks for AI agent workflows.'

export const HOME_INTRO =
  'Lead full-stack engineer with 20 years of experience building B2B SaaS products, backend systems, frontend architecture, and AWS infrastructure. Recent work focuses on AI-assisted engineering tools, auditability, privacy-first product design, and systems that make messy workflows easier to understand, use, and maintain.'

export const HOME_STATUS = 'Available for remote roles'

export const HOME_GITHUB_SUBTITLE = 'Public projects and code'

export const TRUDGE_BLURB =
  'Privacy-first recovery app with local encrypted storage and 950+ tests.'

export const HOME_FOCUS = [
  'System Architecture',
  'API Design',
  'Performance Engineering',
  'Full-Stack Development',
  'Technical Leadership',
] as const

export const HOME_METRICS_LABEL = 'Experience'

export const METRICS = [
  { value: '20', label: 'yrs exp' },
  { value: '6', label: 'companies' },
  { value: '10', label: 'engineers led' },
] as const

interface HomeTileLayout {
  order: string
  /** 2-column tablet layout (sm to lg). */
  tablet?: string
  /** 3-column desktop bento (lg+). */
  desktop: string
}

/**
 * Desktop grid (lg+):
 * [ Hero      ][ Hero      ][ About     ]
 * [ Hero      ][ Hero      ][ GitHub    ]
 * [ Resume    ][ Email     ][ LinkedIn  ]
 * [ Numbers   ][ Focus     ][ Studio    ]
 * [ Trudge    ][ Agent tools][ Projects  ]
 */
export const HOME_TILE_LAYOUT: Record<string, HomeTileLayout> = {
  hero: {
    order: 'order-1',
    tablet: 'sm:col-span-2',
    desktop: 'lg:col-start-1 lg:row-start-1 lg:col-span-2 lg:row-span-2',
  },
  about: {
    order: 'order-2',
    desktop: 'lg:col-start-3 lg:row-start-1 lg:col-span-1',
  },
  github: {
    order: 'order-3',
    desktop: 'lg:col-start-3 lg:row-start-2 lg:col-span-1',
  },
  featured: {
    order: 'order-4',
    desktop: 'lg:col-start-1 lg:row-start-5 lg:col-span-1',
  },
  agentTooling: {
    order: 'order-5',
    desktop: 'lg:col-start-2 lg:row-start-5 lg:col-span-1',
  },
  projects: {
    order: 'order-6',
    desktop: 'lg:col-start-3 lg:row-start-5 lg:col-span-1',
  },
  studio: {
    order: 'order-7',
    desktop: 'lg:col-start-3 lg:row-start-4 lg:col-span-1',
  },
  focus: {
    order: 'order-8',
    desktop: 'lg:col-start-2 lg:row-start-4 lg:col-span-1',
  },
  numbers: {
    order: 'order-9',
    desktop: 'lg:col-start-1 lg:row-start-4 lg:col-span-1',
  },
  resume: {
    order: 'order-10',
    desktop: 'lg:col-start-1 lg:row-start-3 lg:col-span-1',
  },
  linkedin: {
    order: 'order-11',
    desktop: 'lg:col-start-3 lg:row-start-3 lg:col-span-1',
  },
  email: {
    order: 'order-12',
    tablet: 'sm:col-span-2 lg:col-span-1',
    desktop: 'lg:col-start-2 lg:row-start-3 lg:col-span-1',
  },
}

export const HOME_LINKS = {
  github: SITE.github,
  linkedin: SITE.linkedin,
  socialHandle: SITE.githubHandle,
  email: SITE.email,
  resume: SITE.resume,
  studio: SITE.studio,
  studioName: SITE.studioName,
  featuredRoute: ROUTES.projectsTrudge,
  agentToolingRoute: ROUTES.projectsSupportDesk,
  projectsRoute: ROUTES.projects,
  aboutRoute: ROUTES.about,
} as const

export function homeTileClass(tile: keyof typeof HOME_TILE_LAYOUT): string {
  const layout = HOME_TILE_LAYOUT[tile]
  return [layout.order, layout.tablet, layout.desktop].filter(Boolean).join(' ')
}
