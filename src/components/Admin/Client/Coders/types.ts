export interface IAdminCoderProfile {
  first_name: string;
  last_name?: string;
  email: string;
  job_posts: any[];
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
  company_website: string;
  linkedin_url: string;
  phone: number | null;
  country: string;
  city: string;
  state: string;
  role: string;
  message: string;
  is_active: boolean;
  date_joined: string;
}

export const adminCoderMockData: IAdminCoderProfile[] = [
  {
    first_name: 'John',
    last_name: 'Doe',
    email: 'john.doe@gmail.com',
    job_posts: [
      // this data comes from jobpost api.
      {
        id: '9d27ce0c-1692-4b37-889d-a2c0f3a7cd3f',
        user: '8f27ce0c-1692-4b37-889d-a2c0f3a7f6789',
        title: 'Software Engineer',
        description: 'Test Job Description',
        skills: ['python', 'mysql'],
        contracts: [],
        project_size: 'SMALL',
        budget_type: 'FIXED',
        maximum_budget: 2000,
        maximum_hourly_rate: null,
        minimum_hourly_rate: null,
        expertise: ['EXPERT', 'INTERMEDIATE'],
        duration: 'SHORT_TERM',
        timezone: ['GMT-8:00 Pacific Time Zone', 'GMT-7:00 Mountain TimeZone'],
        attachments: ['/attachment1.pdf', '/attachment2.jpg', '/attachment3.py'],
        preferred_coder_residence: 'USA_ONLY',
        status: 'ACTIVE',
        created: '2023-10-31T16:26:34.524015Z',
        updated: '2023-10-31T16:26:34.524068Z'
      }
    ],
    skill: [
      {
        technology: {
          id: 'ff572785-d361-4f48-b567-9c30cbab627e1',
          name: 'python'
        },
        years_of_experience: 5,
        skill_type: 'PRIMARY',
        expertise_level: 'EXPERT'
      }
    ],
    total_years_of_experience: 8,
    identity: 'BACKEND-DEVELOPER',
    company_website: 'https://acme.com',
    linkedin_url: 'https://www.linkedin.com/in/your_username1',
    phone: 1234567890,
    country: 'USA',
    city: 'Sample City',
    state: 'CA',
    role: 'CODER',
    message: 'Email sent to john.doe@gmail.com',
    is_active: false,
    date_joined: ''
  },

  {
    first_name: 'Morgan',
    last_name: 'Meller',
    email: 'john.doe@gmail.com',
    job_posts: [
      {
        id: '9d27ce0c-1692-4b37-889d-a2c0f3a7cd3f',
        user: '8f27ce0c-1692-4b37-889d-a2c0f3a7f6789',
        title: 'Test Job',
        description: 'Test Job Description',
        skills: ['python', 'mysql'],
        contracts: [],
        project_size: 'SMALL',
        budget_type: 'FIXED',
        maximum_budget: 2000,
        maximum_hourly_rate: null,
        minimum_hourly_rate: null,
        expertise: ['EXPERT', 'INTERMEDIATE'],
        duration: 'SHORT_TERM',
        timezone: ['GMT-8:00 Pacific Time Zone', 'GMT-7:00 Mountain TimeZone'],
        attachments: ['/attachment1.pdf', '/attachment2.jpg', '/attachment3.py'],
        preferred_coder_residence: 'USA_ONLY',
        status: 'ACTIVE',
        created: '2023-10-31T16:26:34.524015Z',
        updated: '2023-10-31T16:26:34.524068Z'
      }
    ],
    skill: [
      {
        technology: {
          id: 'ff572785-d361-4f48-b567-9c30cbab627e2',
          name: 'python'
        },
        years_of_experience: 5,
        skill_type: 'PRIMARY',
        expertise_level: 'EXPERT'
      }
    ],
    total_years_of_experience: 8,
    identity: 'BACKEND-DEVELOPER',
    company_website: 'https://acme.com',
    linkedin_url: 'https://www.linkedin.com/in/your_username2',
    phone: null,
    country: 'USA',
    city: 'Sample City',
    state: 'CA',
    role: 'CODER',
    message: 'Email sent to john.doe@gmail.com',
    is_active: true,
    date_joined: ''
  },

  {
    first_name: 'John',
    last_name: 'Parker',
    email: 'john.doe@gmail.com',
    job_posts: [
      {
        id: '9d27ce0c-1692-4b37-889d-a2c0f3a7cd3f',
        user: '8f27ce0c-1692-4b37-889d-a2c0f3a7f6789',
        title: 'Test Job',
        description: 'Test Job Description',
        skills: ['python', 'mysql'],
        contracts: [],
        project_size: 'SMALL',
        budget_type: 'FIXED',
        maximum_budget: 2000,
        maximum_hourly_rate: null,
        minimum_hourly_rate: null,
        expertise: ['EXPERT', 'INTERMEDIATE'],
        duration: 'SHORT_TERM',
        timezone: ['GMT-8:00 Pacific Time Zone', 'GMT-7:00 Mountain TimeZone'],
        attachments: ['/attachment1.pdf', '/attachment2.jpg', '/attachment3.py'],
        preferred_coder_residence: 'USA_ONLY',
        status: 'INACTIVE',
        created: '2023-10-31T16:26:34.524015Z',
        updated: '2023-10-31T16:26:34.524068Z'
      }
    ],
    skill: [
      {
        technology: {
          id: 'ff572785-d361-4f48-b567-9c30cbab627e3',
          name: 'python'
        },
        years_of_experience: 5,
        skill_type: 'PRIMARY',
        expertise_level: 'EXPERT'
      }
    ],
    total_years_of_experience: 8,
    identity: 'BACKEND-DEVELOPER',
    company_website: 'https://acme.com',
    linkedin_url: 'https://www.linkedin.com/in/your_username3',
    phone: 1234567890,
    country: 'USA',
    city: 'Sample City',
    state: 'CA',
    role: 'CODER',
    message: 'Email sent to john.doe@gmail.com',
    is_active: false,
    date_joined: ''
  }
];
