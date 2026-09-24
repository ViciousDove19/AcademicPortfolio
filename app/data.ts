type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
  highlights: string[]
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
  question: string
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

type Education = {
  id: string
  institution: string
  degree: string
  location: string
  start: string
  end: string
  details: string[]
}

type Position = {
  id: string
  title: string
  org: string
  link?: string
  start: string
  end: string
  highlights: string[]
}

export const HERO_TITLE =
  'Project Research Scientist · Health Informatics and Imaging Lab, IIT Madras'

export const BIO = `I'm a Project Research Scientist at the Health Informatics and Imaging Lab at IIT Madras, working with Prof. Pradeeba Sridar on ICMR-funded research in medical image analysis and agentic AI for breast cancer. My current work spans designing pretraining objectives for self-supervised representation learning, building agentic AI systems to mimic clinical workflows, and developing compact models for real-world deployment.

I am deeply curious about learning how biological or natural systems work. I find a lot of joy in studying complex biomedical data to derive insights. I am interested in translating these insights into building intelligent machines that can be understood mechanistically. My long-term goal is to help move healthcare from reactive care toward preventive care.

Previously, I worked at Ather Energy, where I analyzed terabytes of telemetry data. I also worked as a research intern at Samsung Research Institute. I hold a dual B.Tech. and M.Tech. degree in Engineering Design from IIT Madras. I graduated in 2023 with a master's specialization in Biomedical Design.`

// TODO: fill in arXiv/code links once available.
export const RESEARCH: ResearchProject[] = [
  {
    id: 'research-chimera',
    name: 'CHIMERA',
    slug: 'chimera',
    subtitle: 'Policy-orchestrated specialist agents for prostate-cancer decision support',
    question:
      'How can we build an agentic AI system that recommends biopsy when clinical evidence is incomplete or conflicting?',
    description:
      'We translate a clinical guideline into an executable policy graph. Each node poses a focused clinical question. Specialist agents evaluate the available evidence to answer these questions. An orchestrator traverses the graph and coordinates the agents to reach a decision. Every step produces an auditable trace. This trace shows which variables influenced the decision and how confident the system was.',
    status: 'MICCAI 2026 Challenge submission',
    links: [{ label: 'Code', href: 'https://github.com/ViciousDove19/chimera-baseline' }],
  },
  {
    id: 'research-ps-mae',
    name: 'PS-MAE',
    slug: 'ps-mae',
    subtitle:
      'A clinically-informed peritumoral masked autoencoder for axillary lymph node status',
    question: 'Can biological knowledge guide pretraining for metastasis prediction?',
    description:
      'Predicting axillary lymph node metastasis is difficult because labelled datasets are small. Prior research suggests that the tissue surrounding a tumour or lymph node contains signals associated with metastasis. We use this biological insight to design a pretraining objective for breast ultrasound. A ViT-B model learns to predict the Sobel edge response within masked peritumoral regions. The resulting encoder outperforms state-of-the-art methods for predicting metastasis on small datasets.',
    status: 'Under review, IEEE JBHI',
    links: [
      {
        label: 'Manuscript',
        href: 'https://drive.google.com/file/d/1uA4wO42cmVO_O1MPjc-dfPNupsrszNDH/view?usp=sharing',
      },
    ],
  },
  {
    id: 'research-tiny-vit-distillation',
    name: 'Tiny ViT Distillation',
    slug: 'tiny-vit-distillation',
    subtitle: 'A 5.7M-parameter ultrasound encoder for point-of-care deployment',
    question:
      'How can we compress an ultrasound foundation model without sacrificing diagnostic accuracy?',
    description:
      'We distil knowledge from ultrasound foundation models into small ViT models using a JEPA-style latent prediction objective. During distillation, we observe a collapse in the effective rank of the learned representations. This collapse limits the diversity of information retained by the student model. We address it by encouraging the model to preserve orthogonal information. The resulting models match or outperform their teachers on several downstream tasks.',
    status: 'Paper plan, target: Computers in Biology and Medicine',
  },
  {
    id: 'research-decoder-free-segmentation',
    name: 'Decoder-Free Segmentation',
    slug: 'decoder-free-segmentation',
    subtitle: 'A decoder-free soft-token segmenter for point-of-care breast ultrasound',
    question: 'Can a transformer segment tumours without a decoder?',
    description:
      'Most segmentation models pair an encoder with a dedicated decoder. We replace the decoder with a single linear head applied directly to the ViT’s patch tokens. The head predicts the fraction of tumour area within each patch instead of assigning a binary label. With this design, a tiny ViT can localise tumours while achieving performance comparable to a ViT-B model with a decoder.',
    status: 'Under review, Journal of Imaging Informatics in Medicine',
    links: [
      {
        label: 'Manuscript',
        href: 'https://drive.google.com/file/d/1J4gtFzo6HZVDxOXNqFhGjUKemOuvhJnC/view?usp=sharing',
      },
    ],
  },
  {
    id: 'research-waau-net',
    name: 'WAAU-Net',
    slug: 'waau-net',
    subtitle: 'Wavelet-domain adversarial adaptation for cross-cohort segmentation',
    question:
      'Can we build fair models without erasing meaningful biological differences between populations?',
    description:
      'Many domain generalisation methods remove signals that predict cohort membership. However, some differences between cohorts may reflect meaningful biological variation rather than acquisition artefacts. Our radiomics analysis found that most cohort-level differences were concentrated in the wavelet domain rather than the raw image. WAAU-Net acts on this finding by decomposing each image into frequency subbands. It learns how strongly each subband should be normalised. A population discriminator encourages generalisation across cohorts while the selective normalisation preserves useful information.',
    status: 'Preprint submitted, Biomedical Signal Processing and Control',
    links: [
      {
        label: 'Manuscript',
        href: 'https://drive.google.com/file/d/1muuNvQmDt99Kb_faXOygx6TR9FsYYZiz/view?usp=sharing',
      },
    ],
  },
]

// TODO: fill in arXiv/code links once available.
export const PUBLICATIONS: Publication[] = [
  {
    id: 'pub-ps-mae',
    title:
      'Clinically-Informed Peritumoral Masked Autoencoder for Axillary Lymph Node Status Assessment from Breast Ultrasound',
    venue: 'IEEE Journal of Biomedical and Health Informatics',
    year: '2026',
    status: 'under-review',
    link: 'https://drive.google.com/file/d/1uA4wO42cmVO_O1MPjc-dfPNupsrszNDH/view?usp=sharing',
  },
  {
    id: 'pub-waau-net',
    title:
      'WAAU-Net: Wavelet-Domain Adversarial Adaptation for Cross-Cohort Generalization in Breast Ultrasound Tumor Segmentation',
    venue: 'Biomedical Signal Processing and Control',
    year: '2026',
    status: 'under-review',
    link: 'https://drive.google.com/file/d/1muuNvQmDt99Kb_faXOygx6TR9FsYYZiz/view?usp=sharing',
  },
  {
    id: 'pub-tiny-vit-distillation',
    title:
      'A 5.7M-Parameter Ultrasound Encoder for Point-of-Care Deployment: Simple Masked Latent Distillation, and Where Compression Fails',
    venue: 'Computers in Biology and Medicine',
    status: 'in-preparation',
  },
  {
    id: 'pub-decoder-free-segmentation',
    title: 'A Decoder-Free Soft-Token Segmenter for Point-of-Care Breast Ultrasound',
    venue: 'Journal of Imaging Informatics in Medicine',
    year: '2026',
    status: 'under-review',
    link: 'https://drive.google.com/file/d/1J4gtFzo6HZVDxOXNqFhGjUKemOuvhJnC/view?usp=sharing',
  },
  {
    id: 'pub-iceccme',
    title:
      'Region of Interest Matters: How Input Region and Feature Extractor Choice Interact for Axillary Lymph Node Metastasis Prediction from Breast Ultrasound',
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
    company: 'iNSPIRE Lab, IIT Madras',
    title: 'Undergraduate Researcher',
    start: 'May 2021',
    end: 'May 2023',
    link: 'https://niravatgit.github.io/INSPIRELab/',
    id: 'work3',
    highlights: [
      'Worked on developing tools and algorithms for planning needle trajectories for minimally invasive neurosurgeries.',
      'Implemented and trained a UNet-based network architecture using Pytorch for tumour segmentation using a publicly available dataset from the BraTS challenge.',
      'Utilised FastsurferCNN for cortical parcellation and MRA data for blood vessel identification to generate the environment for reinforcement learning.',
      'Developed a reinforcement learning framework called Flexible Needle Path Generation, which generated 15% safer and 10% smoother curves compared to traditional path-finding algorithms like RRT*.',
      'Developed a virtual reality pipeline using Slicer 3D software and an Aruco marker as an input device tool to plan linear surgical trajectories.',
      'Used Unity 3D game engine to simulate environments with different lighting to generate images to train a CNN model to minimise registration error, which was utilised for a demo augmented reality app using the Vuforia engine.',
    ],
  },
  {
    company: 'Samsung Research Institute Bangalore',
    title: 'Research Intern',
    start: 'Dec 2021',
    end: 'May 2022',
    link: 'https://research.samsung.com/sri-b',
    id: 'work4',
    highlights: [
      "Developed a CNN model 'LiteAR' for dynamically estimating illumination for mixed reality applications using spherical harmonics for A and M series Samsung smartphones.",
      'Developed an augmented reality app by incorporating LiteAR into the open-source rendering engine Filament.',
      "Worked on Samsung's proprietary Neural Radiance Fields (NeRF) model utilising inverse rendering to generate 3D views from a few 2D images.",
    ],
  },
]

export const EDUCATION: Education[] = [
  {
    id: 'edu-iitm',
    institution: 'Indian Institute of Technology Madras',
    degree: 'Dual Degree Programme - B.Tech in Engineering Design & M.Tech in Biomedical Design',
    location: 'Chennai, India',
    start: 'Jul 2018',
    end: 'May 2023',
    details: [
      'CGPA: 8.91/10',
      'Graduated in the top 5% of the class',
      'Relevant coursework: Applied Statistics, Mathematical Foundations of Data Science, Life Sciences, Human Anatomy, Physiology & Biomechanics, Medical Image Analysis, Signals and Systems, Digital Signal Processing, Design of Monitoring and Diagnostic Systems.',
    ],
  },
]

export const POSITIONS: Position[] = [
  {
    id: 'pos-ta',
    title: 'Teaching Assistant',
    org: 'Data Science: Theory & Practice, Introduction to Computation & Visualization',
    start: 'Aug 2022',
    end: 'May 2023',
    highlights: [
      'Taught Python for data science and C for computation and graphics visualisation in the laboratory sessions for both courses.',
      'Evaluated assignments and code submissions for 60+ students.',
    ],
  },
  {
    id: 'pos-nirmaan',
    title: 'Project Management Head',
    org: 'Nirmaan, IIT Madras',
    link: 'https://nirmaan.iitm.ac.in/',
    start: 'Sep 2020',
    end: 'Jun 2021',
    highlights: [
      'Led a team of 10 and managed pre-seed funding, legal support, and talent acquisition for 40+ student startups.',
      'Conducted project reviews that helped 15+ teams develop an MVP.',
    ],
  },
  {
    id: 'pos-nss',
    title: 'Teaching Resource for Underprivileged Children',
    org: 'National Service Scheme, IIT Madras',
    start: 'Sep 2018',
    end: 'May 2019',
    highlights: [
      'Taught mathematics and science to children from underprivileged communities in Chennai.',
    ],
  },
]

export const TECHNICAL_SKILLS: { label: string; items: string[] }[] = [
  { label: 'Languages', items: ['Python', 'SQL', 'C/C++', 'JavaScript', 'HTML/CSS'] },
  {
    label: 'Frameworks',
    items: ['PyTorch', 'PySpark', 'Flask', 'Streamlit', 'LangChain', 'LangGraph'],
  },
  { label: 'Developer Tools', items: ['Git', 'Docker'] },
]

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Research', href: '/research' },
  { label: 'CV', href: '/experience' },
  { label: 'About', href: '/about' },
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

type PersonalGame = {
  title: string
  description: string
  link?: string
}

type PersonalPhoto = {
  src: string
  alt: string
  caption: string
}

export const ABOUT_PROFESSIONAL = `I have always been motivated by the joy of learning and the joy of creating. I find the process of observing data and forming hypotheses deeply satisfying. I also enjoy designing experiments that can support or challenge those hypotheses. Fortunately, I have been able to find work that rewards this way of thinking.

At this stage, I want to further develop my identity as a researcher. I hope to pursue a PhD that allows me to devote sustained time and energy to a question that can support years of inquiry.`

export const ABOUT_READING = `I love reading. Growing up, my favourite activity was visiting the public library while my mom shopped for groceries. My habit of hoarding books eventually led me to invest in e-readers. I currently use an 11th-generation Kindle Paperwhite. That has not stopped me from treating book buying as a separate hobby.`

export const ABOUT_READING_PHOTO: PersonalPhoto = {
  src: '/about/photos/reading.webp',
  alt: 'Reading',
  caption: 'Some of my books with my dog Oscar',
}

export const ABOUT_GAMING = `Video games were another important part of my childhood. I believe they have immense potential as a storytelling medium. They can change how we think and experience another person's perspective. We can design them as empathy machines. We can also use them to develop cognitive skills.`

export const GAMING_FAVOURITES = [
  'Red Dead Redemption 2',
  'The Last of Us',
  'Hollow Knight',
  'Cuphead',
]

export const ABOUT_GAMEDEV_INTRO = `I have also made a couple of video games. I hope to make many more in the future.`

export const PERSONAL_GAMES: PersonalGame[] = [
  {
    title: 'The Maze of Malazzar',
    description: 'A game I made — playable at the link below.',
    link: 'https://viciousdove19.itch.io/the-maze-of-malazzar',
  },
  {
    title: 'Chase and Capture',
    description:
      'A version of Scotland Yard set on the IIT Madras campus. It is no longer available online.',
  },
]

export const ABOUT_TREKKING = `I also enjoy trekking and spending time in nature. I have been fortunate to spend some beautiful days climbing in the Himalayas. Few experiences compare to witnessing the scale and beauty of the mountains firsthand.`

export const ABOUT_TREKKING_PHOTOS: PersonalPhoto[] = [
  {
    src: '/about/photos/kuari-pass-trekking.webp',
    alt: 'Trekking at Kuari Pass',
    caption: 'Kuari Pass Range',
  },
  {
    src: '/about/photos/sleeping-buddha-trekking.webp',
    alt: 'Trekking near the Sleeping Buddha viewpoint',
    caption: 'Facing the Sleeping Buddha',
  },
  {
    src: '/about/photos/yak-trekking.webp',
    alt: 'A yak encountered while trekking',
    caption: 'A yak chilling against the Everest mountain range',
  },
]

export const ABOUT_ART = `I am a great admirer of art. I believe that creating art is one of the purest forms of self-expression. I occasionally work with acrylics and watercolours to paint an image I have in mind. I find the process of layering paint and watching a composition emerge deeply calming.`

export const ABOUT_ART_PHOTOS: PersonalPhoto[] = [
  {
    src: '/about/photos/egg-painting.webp',
    alt: 'A painting of an egg',
    caption: 'Acrylics',
  },
  {
    src: '/about/photos/trees-painting.webp',
    alt: 'A painting of trees',
    caption: 'Watercolor',
  },
]

export const ABOUT_GUITAR = `I am also an amateur classical guitarist. I play with more heart than steady hands.`

export const ABOUT_FOOTBALL = `I follow football closely and enjoy playing it too. My friends have gradually moved to different cities and countries, so finding opportunities to play has become harder. I support FC Barcelona. One of my dreams is to watch Barça play a Champions League match at Camp Nou.`
