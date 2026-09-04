export interface Project {
  title: string
  description: string
  tags: string[]
  link: string
}

export interface SocialLink {
  label: string
  href: string
}

export const profile = {
  name: 'Himanshu Singh Bisen',
  role: 'Software Engineer',
  tagline:
    'I build fast, accessible web applications and delightful developer tools.',
  location: 'India',
  about:
    "I'm a software engineer who loves turning complex problems into simple, elegant products. My focus is on the web platform, performance, and clean developer experience. When I'm not shipping code, I'm exploring open-source projects and writing about what I learn.",
}

export const skills: string[] = [
  'TypeScript',
  'React',
  'Node.js',
  'Vite',
  'Go',
  'Python',
  'PostgreSQL',
  'Docker',
]

export const projects: Project[] = [
  {
    title: 'Realtime Collab Editor',
    description:
      'A conflict-free collaborative document editor powered by CRDTs and WebSockets, supporting hundreds of concurrent editors.',
    tags: ['TypeScript', 'React', 'WebSockets'],
    link: 'https://github.com/himanshusinghbisen',
  },
  {
    title: 'Edge Analytics Pipeline',
    description:
      'A low-latency analytics pipeline that ingests millions of events per minute and serves live dashboards from the edge.',
    tags: ['Go', 'Kafka', 'ClickHouse'],
    link: 'https://github.com/himanshusinghbisen',
  },
  {
    title: 'DevTools CLI',
    description:
      'An extensible command-line toolkit that automates repetitive project setup and scaffolding for engineering teams.',
    tags: ['Node.js', 'CLI', 'Automation'],
    link: 'https://github.com/himanshusinghbisen',
  },
]

export const socials: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/himanshusinghbisen' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { label: 'Email', href: 'mailto:hello@example.com' },
]
