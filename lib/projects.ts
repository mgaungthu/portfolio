export type Project = {
  title: string
  description: string
  image?: string
  links: { label: string; href: string }[]
}

export const projects: Project[] = [
  {
    title: 'Bagan AI — Prompt Generator',
    description: 'A content‑heavy prompt generator with image analysis and structured outputs. Built with Next.js and modern UI/UX principles.',
    image: '/projects/bagan-ai.png',
    links: [
      { label: 'Website', href: 'https://bagan.ai/' },
    ],
  },
  {
    title: 'Globiance — Banking & Exchange Mobile App',
    description: 'Cross‑platform banking/exchange app. Led v2→v3 platform migration; integrated QRPay, trade market, and card modules. Improved stability and performance.',
    image: '/projects/globiance.jpg',
    links: [
      { label: 'Play Store', href: 'https://play.google.com/store/apps/details?id=com.globiance.android&hl=en' },
    ],
  },
  {
    title: 'Ananda Attendance System',
    description: 'Attendance app used by 1,500+ users in 3 regions. Implemented geofencing, custom navigation, and Mapbox SDK. Built secure auth with Redux Toolkit.',
    image: '/projects/soloversion.png',
    links: [
      { label: 'Play Store', href: 'https://play.google.com/store/apps/details?id=com.ananda.attendance&hl=en&gl=US&pli=1' },
    ],
  },
  {
    title: 'Mandalay Ads — Ad Manager Reporting',
    description: 'SaaS reporting portal tracking impressions, clicks, and revenue shares for publishers and admins.',
    image: '/projects/mandalay-ads.png',
    links: [
      { label: 'Website', href: 'https://mandalayads.ai/login' },
    ],
  },
  {
    title: 'Tutu Fiber — Website',
    description: 'High‑performance landing + calculator + multi‑step survey with React Hook Form & Yup.',
    image: '/projects/tutufiber.png',
    links: [
      { label: 'Demo', href: 'https://mgaungthu.github.io/tutustatic/' },
    ],
  },
]
