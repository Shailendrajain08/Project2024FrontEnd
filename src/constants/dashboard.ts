const userData = {
  username: '6b3a3412-7aef-48dc-a8a7-66674c102943',
  first_name: 'John',
  last_name: 'Doe',
  email: 'john.doe@gmail.com',
  phone: '9427481234',
  role: 'CLIENT',
  type: 'INDIVIDUAL',
  tc: true,
  is_profile_complete: false,
  profile_completeness_percentage: 75,
  profile_img: '/images/png/coder_profile1.png',
  identity: 'UI/UX Designer'
};

const filterData = [
  {
    label: 'Expertise Level',
    key: 'expertise',
    data: [
      { id: 1, category: 'Expert', value: 'Expert' },
      { id: 2, category: 'Intermediate', value: 'Intermediate' },
      { id: 3, category: 'Beginner', value: 'Beginner' }
    ]
  },
  {
    label: 'Fixed Budget',
    key: 'maximum_budget',
    data: [
      { id: 1, category: 'Below $2000', value: '2000' },
      { id: 2, category: '$2001 - $5000', value: '5000' },
      { id: 3, category: 'Above $5000', value: '999999999' }
    ]
  },
  {
    label: 'Job Type',
    key: 'budget_type',
    data: [
      { id: 1, category: 'Any', value: 'ANY' },
      { id: 2, category: 'Hourly Rate', value: 'HOURLY' },
      { id: 3, category: 'Fixed Budget', value: 'FIXED' }
    ]
  },
  {
    label: 'Location',
    key: 'location',
    data: [
      { id: 1, category: 'USA', value: 'USA_ONLY' },
      { id: 2, category: 'Anywhere in the world', value: 'ANYWHERE_IN_THE_WORLD' }
    ]
  },
  {
    label: 'Hourly Rate',
    key: 'hourly_rate',
    data: [
      { id: 1, category: '$0 - $50', value: '0-50' },
      { id: 2, category: '$50 - $100', value: '50-100' },
      { id: 3, category: 'More than $100', value: '100-999999999' }
    ]
  }
];

const coderJobsLabelObject: any = {
  1: 'All Jobs',
  2: 'My Active Jobs',
  3: 'Job Offers',
  4: 'My Job Applications',
  5: 'My Completed Jobs'
};

const projectDuration: any = {
  SHORT_TERM: '1 to 3 months',
  MEDIUM_TERM: '3 to 6 months',
  LONG_TERM: 'More than 6 months'
};

const jobPostData = [
  {
    id: 'job235rwef',
    title: 'Full Stack Developer - Ruby on Rails',
    description:
      "Join our startup team in Austin and work on building web applications using Ruby on Rails. We're seeking a Full Stack Developer with expertise in frontend and backend development.",
    skills: ['Ruby on Rails', 'JavaScript', 'React.js', 'Backend Development'],
    preferred_coder_residence: 'USA_ONLY',
    contracts: [],
    budget_type: 'HOURLY',
    maximum_budget: null,
    maximum_hourly_rate: 100,
    minimum_hourly_rate: 80,
    created: '2023-10-31T16:26:34.524015Z',
    updated: '2023-10-31T16:26:34.524068Z',
    project_size: 'SMALL',
    duration: 'SHORT_TERM',
    expertise: ['INTERMEDIATE'],
    timezone: ['GMT-7:00 Mountain TimeZone'],
    status: 'APPLIED'
  },
  {
    id: 'job32423er3',
    title: 'iOS App Developer - Swift',
    description:
      "Join our mobile app development team in Sydney and create exceptional iOS applications. We're looking for an iOS App Developer proficient in Swift and iOS development.",
    skills: ['Swift', 'iOS Development', 'Mobile App Design'],
    preferred_coder_residence: 'USA_ONLY',
    contracts: [],
    budget_type: 'FIXED',
    maximum_budget: 2000,
    maximum_hourly_rate: null,
    minimum_hourly_rate: null,
    created: '2023-10-31T16:26:34.524015Z',
    updated: '2023-10-31T16:26:34.524068Z',
    project_size: 'SMALL',
    duration: 'SHORT_TERM',
    expertise: ['INTERMEDIATE'],
    timezone: ['GMT-8:00 Pacific Time Zone', 'GMT-7:00 Mountain TimeZone'],
    status: 'saved',
    attachments: ['/attachment1.pdf']
  },
  {
    id: 'job234rew',
    title: 'AI Research Scientist - Natural Language Processing',
    description:
      "Join our AI research lab in Silicon Valley and work on advancing NLP skills. We're seeking an AI Research Scientist with expertise in Python, NLP, and deep learning.",
    skills: ['Python', 'NLP', 'Deep Learning', 'Machine Learning'],
    preferred_coder_residence: 'USA_ONLY',
    contracts: [],
    budget_type: 'FIXED',
    maximum_budget: 2000,
    maximum_hourly_rate: null,
    minimum_hourly_rate: null,
    created: '2023-10-31T16:26:34.524015Z',
    updated: '2023-10-31T16:26:34.524068Z',
    project_size: 'MEDIUM',
    duration: 'SHORT_TERM',
    expertise: ['EXPERT', 'INTERMEDIATE'],
    timezone: ['GMT-7:00 Mountain TimeZone'],
    status: 'ACTIVE'
  },
  {
    id: 'job97iukm',
    title: 'Backend Developer - Node.js',
    description:
      "Join our development team in Toronto and work on building scalable backend systems using Node.js. We're looking for a Backend Developer experienced in REST APIs and database management.",
    skills: ['Node.js', 'JavaScript', 'REST API', 'Database Management'],
    preferred_coder_residence: 'USA_ONLY',
    contracts: [],
    budget_type: 'HOURLY',
    maximum_budget: null,
    maximum_hourly_rate: 90,
    minimum_hourly_rate: 60,
    created: '2023-10-31T16:26:34.524015Z',
    updated: '2023-10-31T16:26:34.524068Z',
    project_size: 'MEDIUM',
    duration: 'LONG_TERM',
    expertise: ['INTERMEDIATE'],
    timezone: ['GMT-8:00 Pacific Time Zone'],
    status: 'ACTIVE'
  },
  {
    id: 'job987yiukjb',
    title: 'Senior DevOps Engineer - Kubernetes Specialist',
    description:
      "We're a tech company in Seattle seeking a Senior DevOps Engineer with expertise in Kubernetes and cloud infrastructure. Help us optimize our CI/CD pipelines and deployment processes.",
    skills: ['Kubernetes', 'Docker', 'AWS', 'CI/CD'],
    preferred_coder_residence: 'USA_ONLY',
    contracts: [],
    budget_type: 'FIXED',
    maximum_budget: 2000,
    maximum_hourly_rate: null,
    minimum_hourly_rate: null,
    created: '2023-10-31T16:26:34.524015Z',
    updated: '2023-10-31T16:26:34.524068Z',
    project_size: 'LARGE',
    duration: 'LONG_TERM',
    expertise: ['EXPERT', 'INTERMEDIATE'],
    timezone: ['GMT-7:00 Mountain TimeZone'],
    status: 'ACTIVE'
  },
  {
    id: 'job79uikl',
    title: 'UX/UI Designer - Mobile App Development',
    description:
      "Join our design team in Berlin and shape the user experience for our mobile applications. We're seeking a talented UX/UI Designer proficient in Figma and mobile app design.",
    skills: ['Figma', 'Mobile App Design', 'UI/UX Design', 'Prototyping'],
    preferred_coder_residence: 'USA_ONLY',
    contracts: [],
    budget_type: 'FIXED',
    maximum_budget: 2000,
    maximum_hourly_rate: null,
    minimum_hourly_rate: null,
    created: '2023-10-31T16:26:34.524015Z',
    updated: '2023-10-31T16:26:34.524068Z',
    project_size: 'SMALL',
    duration: 'LONG_TERM',
    expertise: ['INTERMEDIATE'],
    timezone: ['GMT-8:00 Pacific Time Zone', 'GMT-7:00 Mountain TimeZone'],
    status: 'COMPLETED',
    attachments: ['/attachment1.pdf', '/attachment3.py']
  },
  {
    id: 'job345fdfg',
    title: 'Data Scientist - Machine Learning Specialist',
    description:
      "Join our data science team in London and work on cutting-edge machine learning projects. We're looking for a Data Scientist with expertise in Python, TensorFlow, and deep learning.",
    skills: ['Python', 'TensorFlow', 'Machine Learning', 'Data Analysis'],
    preferred_coder_residence: 'USA_ONLY',
    contracts: [],
    budget_type: 'FIXED',
    maximum_budget: 2000,
    maximum_hourly_rate: null,
    minimum_hourly_rate: null,
    created: '2023-10-31T16:26:34.524015Z',
    updated: '2023-10-31T16:26:34.524068Z',
    project_size: 'MEDIUM',
    duration: 'MEDIUM_TERM',
    expertise: ['EXPERT', 'INTERMEDIATE'],
    timezone: ['GMT-7:00 Mountain TimeZone'],
    status: 'COMPLETED'
  },
  {
    id: 'job24erw',
    title: 'Frontend Developer - React.js',
    description:
      "We're a fast-growing e-commerce company based in OFFERED York. We're looking for a skilled Frontend Developer with expertise in React.js to enhance our user interfaces and create seamless shopping experiences.",
    skills: ['React.js', 'JavaScript', 'CSS', 'HTML5'],
    preferred_coder_residence: 'USA_ONLY',
    contracts: [],
    budget_type: 'HOURLY',
    maximum_budget: null,
    maximum_hourly_rate: 100,
    minimum_hourly_rate: 70,
    created: '2023-10-31T16:26:34.524015Z',
    updated: '2023-10-31T16:26:34.524068Z',
    project_size: 'SMALL',
    duration: 'MEDIUM_TERM',
    expertise: ['INTERMEDIATE'],
    timezone: ['GMT-8:00 Pacific Time Zone'],
    status: 'APPLIED'
  }
];

const pageOption = [
  { label: 5, value: 5 },
  { label: 10, value: 10 },
  { label: 15, value: 15 }
];

export { userData, filterData, coderJobsLabelObject, projectDuration, jobPostData, pageOption };
