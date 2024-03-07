// interface of coder api.
export interface ICoder {
  first_name: string;
  last_name: string;
  email: string;
  completed_jobs: any[];
  skill: {
    technology: {
      id: string;
      name: string;
    };
    years_of_experience: number;
    skill_type: string;
    expertise_level: string;
  }[];
  total_years_of_experience: number;
  identity: string;
  linkedin_url: string;
  github_url: string;
  stackoverflow_url: string;
  glassdoor_url?: string;
  phone: null | string;
  country: string;
  city: string;
  state: string;
  role: 'CODER';
  is_favorite: boolean;
  date_joined: string;
  profile_pic: any;
  bio: string;
  hourly_rate: number;
}

// interface of active jobs/ contract api.
export interface IContract {
  id: string;
  coder_id: string;
  client_id: string;
  name: string;
  job_proposal: string;
  start_date: string;
  end_date: string | null;
  is_active: boolean;
  created: string;
  updated: string;
}

// interface of job proposal api.
interface IProposal {
  id: string;
  user: string;
  job_post: string;
  proposal_description: string;
  proposal_type: 'HOURLY' | 'FIXED'; // Adjust the types accordingly
  hourly_rate?: number | null; // Adjust if needed
  availability_per_week?: number | null; // Adjust if needed
  attachments: string[];
  milestones: string[] | null;
  coder_fee: number;
  hirecoder_fee: number;
  total_project_cost: number;
  created: string;
  updated: string;
}

// mock data of active jobs/ contract api.
export const contractMockData: IContract[] = [
  {
    id: '9d27ce0c-1692-4b37-889d-a2c0f3a7cd34',
    coder_id: '8f27ce0c-1692-4b37-889d-a2c0f3a7f6789',
    client_id: '9f27ce0c-1692-4b37-889d-a2c0f3a7f6700',
    name: 'test contract',
    job_proposal: '7f27ce0c-1692-4b37-889d-a2c0f3a7f6745',
    start_date: '2023-10-31',
    end_date: null,
    is_active: true,
    created: '2023-10-31T16:26:34.524015Z',
    updated: '2023-10-31T16:26:34.524068Z'
  }
];

// mock data of coder api.
export const hiredCoderMockData: ICoder[] = [
  {
    first_name: 'Eleanor',
    last_name: 'Pena',
    email: 'eleanorpena54@gmail.com',
    completed_jobs: [],
    skill: [
      {
        technology: {
          id: 'ff572785-d361-4f48-b567-9c30cbab627e',
          name: 'python'
        },
        years_of_experience: 5,
        skill_type: 'New Freelancer',
        expertise_level: 'EXPERT'
      }
    ],
    total_years_of_experience: 8,
    identity: 'Full Stack Dev',
    linkedin_url: 'https://www.linkedin.com/in/your_username',
    github_url: 'https://github.com/your_username',
    stackoverflow_url: 'https://stackoverflow.com/users/your_user_id',
    glassdoor_url: '',
    phone: null,
    country: 'India',
    city: 'Sample City',
    state: 'CA',
    role: 'CODER',
    is_favorite: true,
    date_joined: '',

    // extra keys added.
    profile_pic: '/images/png/_Avatar_.png',
    bio: 'I am interested for this position can you hire me? I am interested for this position can you hire me? I am interested for this position can you hire me?',
    hourly_rate: 40
  },

  {
    first_name: 'Esther',
    last_name: 'Howard',
    email: 'estherhoward23@gmail.com',
    completed_jobs: [],

    skill: [
      {
        technology: {
          id: 'ff572785-d361-4f48-b567-9c30cbab627e',
          name: 'python'
        },
        years_of_experience: 5,
        skill_type: 'New Freelancer',
        expertise_level: 'EXPERT'
      }
    ],
    total_years_of_experience: 8,
    identity: 'Full Stack Dev',
    linkedin_url: 'https://www.linkedin.com/in/your_username',
    github_url: 'https://github.com/your_username',
    stackoverflow_url: 'https://stackoverflow.com/users/your_user_id',
    glassdoor_url: '',
    phone: null,
    country: 'India',
    city: 'Sample City',
    state: 'CA',
    role: 'CODER',
    is_favorite: true,
    date_joined: '',
    profile_pic: '/images/png/_Avatar_.png',
    bio: 'I am interested for this position can you hire me? I am interested for this position can you hire me? I am interested for this position can you hire me?',
    hourly_rate: 40
  },

  {
    first_name: 'Kathryn',
    last_name: 'Murphy',
    email: 'kathrynmurphy0@gmail.com',
    completed_jobs: [],
    skill: [
      {
        technology: {
          id: 'ff572785-d361-4f48-b567-9c30cbab627e',
          name: 'python'
        },
        years_of_experience: 5,
        skill_type: 'New Freelancer',
        expertise_level: 'EXPERT'
      }
    ],
    total_years_of_experience: 8,
    identity: 'Full Stack Dev',
    linkedin_url: 'https://www.linkedin.com/in/your_username',
    github_url: 'https://github.com/your_username',
    stackoverflow_url: 'https://stackoverflow.com/users/your_user_id',
    glassdoor_url: '',
    phone: null,
    country: 'India',
    city: 'Sample City',
    state: 'CA',
    role: 'CODER',
    is_favorite: true,
    date_joined: '',
    profile_pic: '/images/png/_Avatar_.png',
    bio: 'I am interested for this position can you hire me? I am interested for this position can you hire me? I am interested for this position can you hire me?',
    hourly_rate: 40
  },

  {
    first_name: 'Cameron',
    last_name: 'Williamson',
    email: 'cameronwilliamson7@gmail.com',
    completed_jobs: [],

    skill: [
      {
        technology: {
          id: 'ff572785-d361-4f48-b567-9c30cbab627e',
          name: 'python'
        },
        years_of_experience: 5,
        skill_type: 'New Freelancer',
        expertise_level: 'EXPERT'
      }
    ],
    total_years_of_experience: 8,
    identity: 'Full Stack Dev',
    linkedin_url: 'https://www.linkedin.com/in/your_username',
    github_url: 'https://github.com/your_username',
    stackoverflow_url: 'https://stackoverflow.com/users/your_user_id',
    glassdoor_url: '',
    phone: null,
    country: 'India',
    city: 'Sample City',
    state: 'CA',
    role: 'CODER',
    is_favorite: true,
    date_joined: '',
    profile_pic: '/images/png/_Avatar_.png',
    bio: 'I am interested for this position can you hire me? I am interested for this position can you hire me? I am interested for this position can you hire me?',
    hourly_rate: 40
  }
];

export const coderProposalMockData: ICoder[] = [
  {
    first_name: 'Jerome',
    last_name: 'Bell',
    email: 'jerome2@gmail.com',
    completed_jobs: [],
    skill: [
      {
        technology: {
          id: 'ff572785-d361-4f48-b567-9c30cbab627e',
          name: 'python'
        },
        years_of_experience: 5,
        skill_type: 'Expert with 6 years',
        expertise_level: 'EXPERT'
      }
    ],
    total_years_of_experience: 8,
    identity: 'React/Node.js/PHP/Laravel/.Net/SEO specialist',
    linkedin_url: 'https://www.linkedin.com/in/your_username',
    github_url: 'https://github.com/your_username',
    stackoverflow_url: 'https://stackoverflow.com/users/your_user_id',
    glassdoor_url: '',
    phone: null,
    country: 'India',
    city: 'Sample City',
    state: 'CA',
    role: 'CODER',
    is_favorite: true,
    date_joined: '',
    profile_pic: '/images/png/_Avatar_.png',
    bio: "Hey, I'm a senior full stack developer and when it comes to HTML/CSS, Node.js, React.js, JavaScript, I'm confident in my skills and experience. I can help you with your requirements. I can start immediately. Please me project details. Waiting for your response. Thanks!",
    hourly_rate: 70
  },

  {
    first_name: 'Jenny',
    last_name: 'Wilson',
    email: 'jennywilson32@gmail.com',
    completed_jobs: [],
    skill: [
      {
        technology: {
          id: 'ff572785-d361-4f48-b567-9c30cbab627e',
          name: 'python'
        },
        years_of_experience: 5,
        skill_type: 'Expert with 6 years',
        expertise_level: 'EXPERT'
      }
    ],
    total_years_of_experience: 8,
    identity: 'React/Node.js/PHP/Laravel/.Net/SEO specialist',
    linkedin_url: 'https://www.linkedin.com/in/your_username',
    github_url: 'https://github.com/your_username',
    stackoverflow_url: 'https://stackoverflow.com/users/your_user_id',
    glassdoor_url: '',
    phone: null,
    country: 'India',
    city: 'Sample City',
    state: 'CA',
    role: 'CODER',
    is_favorite: true,
    date_joined: '',
    profile_pic: '/images/png/_Avatar_.png',
    bio: "Hey, I'm a senior full stack developer and when it comes to HTML/CSS, Node.js, React.js, JavaScript, I'm confident in my skills and experience. I can help you with your requirements. I can start immediately. Please me project details. Waiting for your response. Thanks!",
    hourly_rate: 70.0
  }
];

// mock data of job proposal api.
export const proposalMockData: IProposal[] = [
  {
    id: '8f27ce0c-1692-4b37-889d-a2c0f3a7f67891',
    user: '8f27ce0c-1692-4b37-889d-a2c0f3a7f6789',
    job_post: '9d27ce0c-1692-4b37-889d-a2c0f3a7cd3f',
    proposal_description: 'Test Job Proposal Description',
    proposal_type: 'HOURLY',
    hourly_rate: 60,
    availability_per_week: 40,
    attachments: ['/attachment1.pdf', '/attachment2.jpg', '/attachment3.py'],
    milestones: null,
    coder_fee: 72,
    hirecoder_fee: 8,
    total_project_cost: 80,
    created: '2023-10-31T16:26:34.524015Z',
    updated: '2023-10-31T16:26:34.524068Z'
  },
  {
    id: '8f27ce0c-1692-4b37-889d-a2c0f3a7f67892',
    user: '8f27ce0c-1692-4b37-889d-a2c0f3a7f6789',
    job_post: '9d27ce0c-1692-4b37-889d-a2c0f3a7cd3f',
    proposal_description: 'Test Job Proposal Description',
    proposal_type: 'FIXED',
    hourly_rate: null,
    availability_per_week: null,
    attachments: ['/attachment1.pdf', '/attachment2.jpg', '/attachment3.py'],
    milestones: ['m1', 'm2', 'm3'],
    coder_fee: 72,
    hirecoder_fee: 8,
    total_project_cost: 80,
    created: '2023-10-31T16:26:34.524015Z',
    updated: '2023-10-31T16:26:34.524068Z'
  }
];
