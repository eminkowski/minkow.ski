import { ROUTES } from '../lib/routes'
import { SITE } from '../lib/site'

export const CAPABILITIES = [
  'Systems Architecture',
  'API Design',
  'Performance Engineering',
  'Full-Stack Development',
  'Technical Leadership',
] as const

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
 * [ Hero      ][ Hero      ][ Status    ]
 * [ Hero      ][ Hero      ][ GitHub    ]
 * [ Resume    ][ Email     ][ LinkedIn  ]
 * [ Numbers   ][ Capabilities][ Studio  ]
 * [ Featured  ][ Featured  ][ Projects  ]
 */
export const HOME_TILE_LAYOUT: Record<string, HomeTileLayout> = {
  hero: {
    order: 'order-1',
    tablet: 'sm:col-span-2',
    desktop: 'lg:col-start-1 lg:row-start-1 lg:col-span-2 lg:row-span-2',
  },
  status: {
    order: 'order-2',
    desktop: 'lg:col-start-3 lg:row-start-1 lg:col-span-1',
  },
  github: {
    order: 'order-3',
    desktop: 'lg:col-start-3 lg:row-start-2 lg:col-span-1',
  },
  featured: {
    order: 'order-4',
    tablet: 'sm:col-span-2',
    desktop: 'lg:col-start-1 lg:row-start-5 lg:col-span-2',
  },
  projects: {
    order: 'order-5',
    desktop: 'lg:col-start-3 lg:row-start-5 lg:col-span-1',
  },
  studio: {
    order: 'order-6',
    desktop: 'lg:col-start-3 lg:row-start-4 lg:col-span-1',
  },
  capabilities: {
    order: 'order-7',
    desktop: 'lg:col-start-2 lg:row-start-4 lg:col-span-1',
  },
  numbers: {
    order: 'order-8',
    desktop: 'lg:col-start-1 lg:row-start-4 lg:col-span-1',
  },
  resume: {
    order: 'order-9',
    desktop: 'lg:col-start-1 lg:row-start-3 lg:col-span-1',
  },
  linkedin: {
    order: 'order-10',
    desktop: 'lg:col-start-3 lg:row-start-3 lg:col-span-1',
  },
  email: {
    order: 'order-11',
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
  projectsRoute: ROUTES.projects,
} as const

export function homeTileClass(tile: keyof typeof HOME_TILE_LAYOUT): string {
  const layout = HOME_TILE_LAYOUT[tile]
  return [layout.order, layout.tablet, layout.desktop].filter(Boolean).join(' ')
}
