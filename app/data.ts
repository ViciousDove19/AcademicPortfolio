type Project = {
  name: string
  description: string
  link: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Automated Flexible Needle Trajectory Planning for Keyhole Neurosurgery Using Reinforcement Learning ',
    description: 'Intelligent Robots and Systems 2022',
    link: 'https://ieeexplore.ieee.org/abstract/document/9981164',
    id: 'project1',
  },
  {
    name: 'LiteAR: A Framework to Estimate Lighting for Mixed Reality Sessions for Enhanced Realism',
    description: 'Advances in Computer Graphics 2022',
    link: 'https://link.springer.com/chapter/10.1007/978-3-031-23473-6_32',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'IIT Madras',
    title: 'Research Assistant',
    start: 'Nov 2025',
    end: 'Present',
    link: 'https://mst.iitm.ac.in/',
    id: 'work1',
  },
  {
    company: 'Ather Energy',
    title: 'Senion Product Analyst',
    start: 'Aug 2023',
    end: 'Oct 2025',
    link: 'https://www.atherenergy.com/',
    id: 'work2',
  },
  {
    company: 'Samsung Reserch Institute Bangalore',
    title: 'Research Intern',
    start: 'Dec 2021',
    end: 'May 2022',
    link: 'https://research.samsung.com/sri-b',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/ViciousDove19',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/chinmay-raut-09307a15a/',
  },
]

export const EMAIL = 'rautchinmay19@gmail.com'
