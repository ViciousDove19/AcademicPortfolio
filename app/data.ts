type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
  highlights: string[]
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
  date: string
}

type SocialLink = {
  label: string
  link: string
}

type NavLink = {
  label: string
  href: string
}

type ResearchLink = {
  label: string
  href: string
}

type ResearchProject = {
  id: string
  name: string
  slug: string
  subtitle: string
  description: string
  status: string
  links?: ResearchLink[]
}

type PublicationStatus = 'under-review' | 'in-preparation' | 'peer-reviewed'

type Publication = {
  id: string
  title: string
  venue: string
  year?: string
  status: PublicationStatus
  link?: string
}

export const HERO_TITLE =
  'Project Research Scientist · Health Informatics and Imaging Lab, IIT Madras'

export const HERO_STATEMENT =
  'I work on modelling biological intelligence: representation learning for medical imaging, and agentic systems that reason over multimodal clinical data.'

export const BIO = `I'm a Project Research Scientist at the Health Informatics and Imaging Lab at IIT Madras, working with Prof. Pradeeba Sridar on ICMR-funded research in medical image analysis. My work centres on self-supervised representation learning for ultrasound — designing pretraining objectives around the physics and anatomy of the data rather than applying generic SSL — and, more recently, on agentic systems that reason over multimodal clinical evidence.

I'm interested more broadly in modelling biological intelligence: what biological systems can teach us about building better learning machines, and what learned representations can tell us about biology. Before returning to research I worked on product analytics at Ather Energy and computer vision and reinforcement learning at Samsung Research. I hold a dual B.Tech + M.Tech in Engineering Design from IIT Madras.`

// TODO: fill in arXiv/code links once available.
export const RESEARCH: ResearchProject[] = [
  {
    id: 'research-ps-mae',
    name: 'PS-MAE',
    slug: 'ps-mae',
    subtitle:
      'Peritumoral masked autoencoding for axillary lymph node metastasis prediction',
    description:
      'Nodal status in breast cancer is decided by tissue that sits outside the tumour, but most imaging models are trained to attend to the lesion itself. PS-MAE uses a Sobel-guided masking scheme over the peritumoral ring to force the encoder to represent the margin and surrounding tissue during pretraining, rather than treating it as background.',
    status: 'Under review, IEEE JBHI',
  },
  {
    id: 'research-openbus',
    name: 'OpenBUS',
    slug: 'openbus',
    subtitle: 'A foundation model for breast and multi-anatomy ultrasound',
    description:
      'A JEPA-style self-supervised model trained across a curated multi-source ultrasound corpus, using masking informed by ultrasound image formation rather than uniform random patches. The aim is a general-purpose ultrasound encoder that transfers across anatomies and acquisition settings.',
    status: 'In preparation, Medical Image Analysis',
  },
  {
    id: 'research-waau-net',
    name: 'WAAU-Net',
    slug: 'waau-net',
    subtitle: 'Wavelet-domain adversarial training for cross-population segmentation',
    description:
      'Breast ultrasound segmentation models degrade when moved between scanner populations. WAAU-Net applies adversarial alignment in the wavelet domain, targeting the frequency bands where acquisition differences concentrate, to improve robustness across populations.',
    status: 'Under review, IEEE JBHI',
  },
  {
    id: 'research-chimera',
    name: 'CHIMERA',
    slug: 'chimera',
    subtitle: 'Agentic multimodal decision support for prostate cancer — MICCAI 2026 Challenge',
    description:
      'An agentic pipeline that integrates histopathology, clinical, and molecular evidence to produce prostate cancer risk assessments, evaluated on both prediction accuracy and the fidelity of the reasoning trace it produces.',
    // TODO: update with final leaderboard rank once known.
    status: 'Ongoing',
  },
]

// TODO: fill in formal titles for PS-MAE / WAAU-Net once submitted titles are final,
// and the ICECCME title + link once available.
export const PUBLICATIONS: Publication[] = [
  {
    id: 'pub-ps-mae',
    title: 'PS-MAE: Peritumoral masked autoencoding for axillary lymph node metastasis prediction',
    venue: 'IEEE Journal of Biomedical and Health Informatics',
    year: '2026',
    status: 'under-review',
  },
  {
    id: 'pub-waau-net',
    title: 'WAAU-Net: Wavelet-domain adversarial training for cross-population segmentation',
    venue: 'IEEE Journal of Biomedical and Health Informatics',
    year: '2026',
    status: 'under-review',
  },
  {
    id: 'pub-openbus',
    title: 'OpenBUS: A foundation model for breast and multi-anatomy ultrasound',
    venue: 'Medical Image Analysis',
    status: 'in-preparation',
  },
  {
    id: 'pub-iceccme',
    title: 'ICECCME paper',
    venue: 'ICECCME',
    year: '2026',
    status: 'peer-reviewed',
  },
  {
    id: 'pub-iros',
    title:
      'Automated Flexible Needle Trajectory Planning for Keyhole Neurosurgery Using Reinforcement Learning',
    venue: 'IROS',
    year: '2022',
    status: 'peer-reviewed',
    link: 'https://ieeexplore.ieee.org/abstract/document/9981164',
  },
  {
    id: 'pub-litear',
    title:
      'LiteAR: A Framework to Estimate Lighting for Mixed Reality Sessions for Enhanced Realism',
    venue: 'Advances in Computer Graphics (CGI)',
    year: '2022',
    status: 'peer-reviewed',
    link: 'https://link.springer.com/chapter/10.1007/978-3-031-23473-6_32',
  },
]

export const SERVICE = ['Reviewer: MICCAI, International Journal of Biomedical Imaging']

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'IIT Madras',
    title: 'Project Research Scientist',
    start: 'Nov 2025',
    end: 'Present',
    link: 'https://mst.iitm.ac.in/',
    id: 'work1',
    highlights: [
      'Designed PS-MAE, a masked autoencoder that replaces random patch masking with peritumoral ring masking and Sobel edge reconstruction targets, encoding the clinical prior that nodal metastasis signal lives in the tissue surrounding the lesion rather than within it. Exceeds SOTA under linear probing and holds that margin on a class-imbalanced out-of-distribution external cohort. First-author manuscript under review at IEEE JBHI.',
      'Distilled a frozen ultrasound foundation model into a point-of-care-scale ViT via JEPA latent prediction, with a supervised auxiliary loss so the student inherits diagnostic signal rather than agreement with the teacher — 15× fewer parameters while exceeding teacher performance. In preparation, IEEE TUFFC.',
      "Built the lab's representation-quality diagnostic toolkit — eigenspectrum analysis, nuisance-subspace alignment, and quantification of acquisition-parameter entanglement — to separate representations that generalize from those that memorize acquisition settings. Diagnosed collapse in an early JEPA-style variant and redirected the pretraining objective accordingly.",
      'Showed that breast ultrasound segmentation models degrade across demographically distinct cohorts (Indian, Polish, Egyptian) for acquisition as well as biological reasons, and designed an adaptive wavelet normalization module to close the gap. Manuscript under review.',
      'Trained vision-language models to produce diagnostic chain-of-thought for breast ultrasound, using preference-based RL to place reward on the reasoning trace rather than only the final call — so the stated rationale is one a radiologist can audit, not a post-hoc justification.',
      "Own the lab's research computing: GPU server specification and procurement, user provisioning and storage allocation, environment and driver stack maintenance, and administration of the lab's GitHub organization.",
    ],
  },
  {
    company: 'Ather Energy',
    title: 'Senior Product Analyst',
    start: 'Aug 2023',
    end: 'Oct 2025',
    link: 'https://www.atherenergy.com/',
    id: 'work2',
    highlights: [
      'Analysed large-scale telemetric datasets from 400,000+ connected electric scooters each having 100+ IoT sensors transmitting 800 GB+ data daily, extracting insights on riding style, charging patterns, smart features usage and vehicle utilisation across various demographic groups in India, Sri Lanka and Nepal.',
      'Built an ETL pipeline using PySpark and Clickhouse SQL for product analytics. Designed and monitored product metrics; conducted regular analysis on their movement to generate actionable product and business insights.',
      'Performed population modelling for ride assist features, correlating adoption and engagement of a feature to other ride metrics and behavioural patterns to build adaptive intelligent algorithms, which led to 12% improvement in adoption.',
      'Developed a LangChain-based LLM tool to categorise user feedback from multiple channels, unifying qualitative data with quantitative metrics.',
    ],
  },
  {
    company: 'Samsung Research Institute Bangalore',
    title: 'Research Intern',
    start: 'Dec 2021',
    end: 'May 2022',
    link: 'https://research.samsung.com/sri-b',
    id: 'work3',
    highlights: [
      "Developed a CNN model 'LiteAR' for dynamically estimating illumination for mixed reality applications using spherical harmonics for A and M series Samsung smartphones.",
      'Developed an augmented reality app by incorporating LiteAR into the open-source rendering engine Filament.',
      "Worked on Samsung's proprietary Neural Radiance Fields (NeRF) model utilising inverse rendering to generate 3D views from a few 2D images.",
    ],
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
    // TODO: set actual publish date.
    date: '2024-01-01',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
    // TODO: set actual publish date.
    date: '2024-01-02',
  },
]

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Research', href: '/research' },
  { label: 'Blog', href: '/blog' },
  { label: 'Experience', href: '/experience' },
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
