export const proposalData: any = [
  {
    id: 1,
    title: 'Need Backend Developer',
    description: 'Java developer need',
    name: 'John Doe Smith',
    totalExperienceYear: 12,
    project_size: 'Large',
    duration: 'More than 6 months',
    expertise: 'Expert',
    timezone: ['GMT-8:00 Pacific Time Zone', 'GMT-7:00 Mountain TimeZone'],
    preferred_coder_residence: 'USA_ONLY',
    rating: 4,
    coderType: 'Freelancers',
    hourlyRate: '60',
    briefExperience: `I'm a software engineer specialised in Backend development for complex scalable web apps`,
    jobRole: 'Sr software engineer',
    skills: ['Java', 'Python', 'SpringBot'],
    country: 'United State',
    profilePic: '',
    profileDoc: 'profile_doc',
    bidAmount: '1000',
    earnedAmount: '20K',
    isFavourate: true,
    files: [
      { name: 'SRS', value: '', id: 1 },
      { name: 'Resume', value: '', id: 2 },
      { name: 'Portfollio', value: '', id: 3 }
    ],
    linkedinUrl: 'https://www.linkedin.com/in/john',
    githubUrl: 'https://github.com/john',
    stackoverflowUrl: 'https://stackoverflow.com/john',
    mockUpCompleteDuration: 7,
    betaReleaseDuration: 7,
    mockUpCompleteAmount: 500,
    betaReleaseAmount: 500,
    coverLetter: `Hi, I would like you to consider my application for the [title of the position] at [name of the company/organization]. I am a [adjective that describes you] scientist with over [number] years of experience in [field of research], and have excellent [list the most important skills for the position].`
  },
  {
    id: 2,
    title: 'Need Backend Developer',
    description: 'Java developer need',
    jobSize: 'Large',
    jobDuration: 'More than 6 months',
    name: 'Itsme Smith',
    totalExperienceYear: 4,
    expertiseLevel: 'Intermediate',
    rating: 5,
    coderType: 'Freelancers',
    hourlyRate: '50',
    briefExperience: `I'm a software engineer specialised in backend development for complex scalable web apps`,
    jobRole: 'Sr Node developer',
    skills: ['Java', 'Python', 'SpringBot'],
    country: 'United State',
    profilePic: '',
    profileDoc: 'profile_doc',
    bidAmount: '700',
    earnedAmount: '',
    isFavourate: false,
    files: [
      { name: 'SRS', value: '', id: 1 },
      { name: 'Resume', value: '', id: 2 }
    ],
    linkedinUrl: 'https://www.linkedin.com/in/itsme',
    githubUrl: 'https://github.com/itsme',
    stackoverflowUrl: 'https://stackoverflow.com/itsme',
    mockUpCompleteDuration: 7,
    betaReleaseDuration: 7,
    mockUpCompleteAmount: 350,
    betaReleaseAmount: 350,
    coverLetter: `Hi, I would like you to consider my application for the [title of the position] at [name of the company/organization]. I am a [adjective that describes you] scientist with over [number] years of experience in [field of research], and have excellent [list the most important skills for the position].`
  },
  {
    id: 3,
    title: 'Need Backend Developer',
    description: 'Java developer need',
    name: 'Hack4u',
    totalExperienceYear: 10,
    expertiseLevel: 'Expert',
    jobSize: 'Large',
    jobDuration: 'More than 6 months',
    rating: 3,
    coderType: 'Agencies',
    hourlyRate: '80',
    briefExperience: `I'm a software engineer specialised in frontend development for complex scalable web apps`,
    jobRole: 'FE and Deveops developer',
    skills: ['Java', 'Python', 'SpringBot'],
    country: 'India',
    profilePic: '',
    profileDoc: 'profile_doc',
    bidAmount: '900',
    earnedAmount: '10K',
    isFavourate: false,
    files: [
      { name: 'SRS', value: '', id: 1 },
      { name: 'Portfollio', value: '', id: 2 }
    ],
    linkedinUrl: 'https://www.linkedin.com/in/hack4u',
    githubUrl: 'https://github.com/hack4u',
    stackoverflowUrl: 'https://stackoverflow.com/hack4u',
    mockUpCompleteDuration: 7,
    betaReleaseDuration: 7,
    mockUpCompleteAmount: 450,
    betaReleaseAmount: 450,
    coverLetter: `Hi, I would like you to consider my application for the [title of the position] at [name of the company/organization]. I am a [adjective that describes you] scientist with over [number] years of experience in [field of research], and have excellent [list the most important skills for the position].`
  }
];

export const tabList = [
  { label: 'All Proposals', key: 'allProposal' }
  // { label: 'Saved', key: 'saved' },
];

export const filterHourlyLists = [
  {
    name: 'any',
    label: 'Any hourly rate',
    helperText: '',
    defaultChecked: true,
    value: '0'
  },
  {
    name: 'ten',
    label: '$10 and below',
    helperText: '',
    defaultChecked: false,
    value: '10-0'
  },
  {
    name: 'tenToThirty',
    label: '$10 - $30',
    helperText: '',
    defaultChecked: false,
    value: '10-30'
  },
  {
    name: 'thirtyToSixty',
    label: '$30 - $60',
    helperText: '',
    defaultChecked: false,
    value: '30-60'
  },
  {
    name: 'sixtyToAbove',
    label: '$60 & above',
    helperText: '',
    defaultChecked: false,
    value: '60'
  }
];

export const filterCoderTypeLists = [
  {
    name: 'freelancersAndAgencies',
    label: 'Freelancers & Agencies',
    helperText: '',
    defaultChecked: true,
    value: 'any'
  },
  {
    name: 'freelancers',
    label: 'Freelancers',
    helperText: '',
    defaultChecked: false,
    value: 'Freelancers'
  },
  {
    name: 'agencies',
    label: 'Agencies',
    helperText: '',
    defaultChecked: false,
    value: 'Agencies'
  }
];

export const filterStarRatingLists = [
  {
    name: 'any',
    label: 'Any',
    helperText: '',
    defaultChecked: true,
    value: 0
  },
  {
    name: 'fiveStar',
    label: '5 Star Only',
    helperText: '',
    defaultChecked: false,
    value: 5
  },
  {
    name: 'moreThanFourStarts',
    label: 'More than 4 Stars',
    helperText: '',
    defaultChecked: false,
    value: 4
  },
  {
    name: 'moreThanThreeStarts',
    label: 'More than 3 Stars',
    helperText: '',
    defaultChecked: false,
    value: 3
  }
];

export const filterExpertiseLists = [
  {
    name: 'any',
    label: 'Any',
    helperText: '',
    defaultChecked: true,
    value: 'any'
  },
  {
    name: 'expert',
    label: 'Expert',
    helperText: '',
    defaultChecked: false,
    value: 'Expert'
  },
  {
    name: 'intermediate',
    label: 'Intermediate',
    helperText: '',
    defaultChecked: false,
    value: 'Intermediate'
  },
  {
    name: 'beginner',
    label: 'Beginner',
    helperText: '',
    defaultChecked: false,
    value: 'Beginner'
  }
];

export const filterKeys = ['hourlyFilter', 'coderType', 'starRating', 'expertiseLevel'];

export const jobCategories = [
  { label: 'Latest Proposal', id: 0 },
  { label: 'Highest Hourly Rate', id: 1 },
  { label: 'Lowest Hourly Rate', id: 2 }
];

export const facetData = [
  {
    label: 'Location',
    data: [
      { id: 1, category: 'USA' },
      { id: 2, category: 'Anywhere in the world' }
    ]
  },
  {
    label: 'Hourly Rate',
    data: [
      { id: 1, category: '$0 - $50' },
      { id: 2, category: '$50 - $100' },
      { id: 3, category: 'More than $100' }
    ]
  }
];

export const userData = {
  first_name: 'John',
  last_name: 'Doe',
  email: 'john.doe@gmail.com',
  completed_jobs: [],
  skill: [
    {
      technology: {
        id: 'ff572785-d361-4f48-b567-9c30cbab627e',
        name: 'python'
      },
      years_of_experience: 5,
      skill_type: 'PRIMARY',
      expertise_level: 'EXPERT'
    }
  ],
  total_years_of_experience: 8,
  identity: 'BACKEND-DEVELOPER',
  linkedin_url: 'https://www.linkedin.com/in/your_username',
  github_url: 'https://github.com/your_username',
  stackoverflow_url: 'https://stackoverflow.com/users/your_user_id',
  glassdoor_url: null,
  phone: null,
  country: 'USA',
  city: 'Sample City',
  state: 'CA',
  role: 'CODER',
  is_favorite: true,
  date_joined: '2 yrs',
  hourly_rate: 60,
  profile_pic: '/images/png/coder_pic.png',
  bio: 'Planning, developing, and managing java-based software',
  rating: '4.3',
  total_earned: '3k+'
};

export const jobData = {
  id: '9d27ce0c-1692-4b37-889d-a2c0f3a7cd3f',
  user: '8f27ce0c-1692-4b37-889d-a2c0f3a7f6789',
  title: 'Remote - Java Fullstack Developer - Full time Contract',
  description:
    ' A developer is responsible for several Java-related duties throughout the software development lifecycle, from concept and design to testing. The developer is required to Volutpat. Volutpat sapien ultricies accumsan etiam pellentesque. Faucibus eu lorem quisque tempor Id lectus nunc nam sit lorem. \nLorem ipsum dolor sit amet consectetur. Laoree. Duis pretium nec posuere sed fringilla purus. Volutpat sapien ultricies accumsan etiam pellentesque. Faucibus eu lorem quisque tempor pellentesque amet sed pharetra. Eget est a morbi mattis. Id lectus nunc nam sit lorem. Porta vitae turpis ipsum nisi fermentum volutpat.',
  technologies: ['python', 'mysql', 'react', 'CSS', 'HTML'],
  skills: ['python', 'mysql', 'react', 'CSS', 'HTML'],
  contracts: [],
  project_size: 'SMALL',
  budget_type: 'HOURLY',
  maximum_budget: null,
  maximum_hourly_rate: 80,
  minimum_hourly_rate: 60,
  expertise: ['EXPERT', 'INTERMEDIATE'],
  duration: 'SHORT_TERM',
  timezone: ['GMT-8:00 Pacific Time Zone', 'GMT-7:00 Mountain TimeZone'],
  attachments: ['/attachment1.pdf', '/attachment2.jpg', '/attachment3.py'],
  preferred_coder_residence: 'USA_ONLY',
  status: 'ACTIVE',
  created: '2023-10-31T16:26:34.524015Z',
  updated: '2023-10-31T16:26:34.524068Z'
};

export const Job_Proposal = {
  id: '8f27ce0c-1692-4b37-889d-a2c0f3a7f6789',
  user: '8f27ce0c-1692-4b37-889d-a2c0f3a7f6789',
  job_post: '9d27ce0c-1692-4b37-889d-a2c0f3a7cd3f',
  proposal_description:
    'Lorem ipsum dolor sit amet consectetur. Laoreet cursus ac malesuada in eget tincidunt. Amet faucibus suscipit dui magna vestibulum. Fringilla urna nec nisl leo. Volutpat neque facilisi ut purus. Sit viverra aliquam pulvinar aliquam. Iaculis velit volutpat adipiscing quis nulla arcu pulvinar non sed. Consectetur arcu velit sed amet. Fringilla tempus vestibulum et orci. Eu enim aenean au /n Lorem ipsum dolor sit amet consectetur. Laoree. Duis pretium nec posuere sed fringilla purus. Volutpat sapien ultricies accumsan etiam pellentesque. Faucibus eu lorem quisque tempor pellentesque amet sed pharetra. Eget est a morbi mattis. Id lectus nunc nam sit lorem. Porta vitae turpis ipsum nisi fermentum volutpat.',
  proposal_type: 'HOURLY',
  hourly_rate: 80,
  availability_per_week: 40,
  attachments: ['/attachment1.pdf', '/attachment2.jpg', '/attachment3.py'],
  milestones: ['m1', 'm2', 'm3'],
  coder_fee: 72,
  hirecoder_fee: 8,
  total_project_cost: 80,
  created: '2023-10-31T16:26:34.524015Z',
  updated: '2023-10-31T16:26:34.524068Z'
};
export const milestones = [
  { milestone: 'Mockup Complete', time: 7, amount: 500 },
  { milestone: 'Beta Release', time: 7, amount: 500 }
];
