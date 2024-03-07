export interface AdminMockData {
  access_token?: string;
  refresh_token?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string | null;
  role?: string;
  company_name?: string;
  company_website?: string;
  linkedin_url?: string;
  country?: string;
  city?: string;
  state?: string;
  message?: string;
  is_active?: boolean;
  date_joined?: string;
  id?: string;
  user?: string;
  title?: string;
  description?: string;
  skills?: string[];
  contracts?: any[];
  project_size?: string;
  budget_type?: string;
  maximum_budget?: number;
  maximum_hourly_rate?: number | null;
  minimum_hourly_rate?: number | null;
  expertise?: string[];
  duration?: string;
  timezone?: string[];
  attachments?: string[];
  preferred_coder_residence?: string;
  is_enabled?: boolean;
  created?: string;
  updated?: string;

  // interface of keys hardcoded.
  status?: string;
  coder_avatar?: any;
  amt_released: number;
}

export const adminJobsMock: AdminMockData[] = [
  {
    id: '9d27ce0c-1692-4b37-889d-a2c0f3a7cd3f1',
    user: '8f27ce0c-1692-4b37-889d-a2c0f3a7f6789',
    title: 'Sr. Java Developer',
    description: 'Test Job Description',
    skills: ['python', 'mysql', 'java'],
    contracts: [
      {
        id: '9d27ce0c-1692-4b37-889d-a2c0f3a7cd341',
        coder_id: '8f27ce0c-1692-4b37-889d-a2c0f3a7f6789',
        client_id: '9f27ce0c-1692-4b37-889d-a2c0f3a7f6700',
        name: 'test contract',
        job_proposal: '7f27ce0c-1692-4b37-889d-a2c0f3a7f6745',
        start_date: '2023-10-31',
        end_date: '2023-12-31',
        is_active: true,
        created: '2023-10-31T16:26:34.524015Z',
        updated: '2023-10-31T16:26:34.524068Z'
      }
    ],
    project_size: 'SMALL',
    budget_type: 'FIXED',
    maximum_budget: 2000,
    maximum_hourly_rate: 100,
    minimum_hourly_rate: 80,
    expertise: ['EXPERT', 'INTERMEDIATE'],
    duration: 'SHORT_TERM',
    timezone: ['GMT-8:00 Pacific Time Zone', 'GMT-7:00 Mountain TimeZone'],
    attachments: ['/attachment1.pdf', '/attachment2.jpg', '/attachment3.py'],
    preferred_coder_residence: 'TEHRAN',
    is_enabled: true,
    created: '2023-10-31T16:26:34.524015Z',
    updated: '2023-10-31T16:26:34.524068Z',

    status: 'Completed',

    coder_avatar: [
      '/images/png/coder_1.png',
      '/images/png/coder_2.png',
      '/images/png/coder_3.png',
      '/images/png/coder_4.png'
    ],
    amt_released: 800
  },

  {
    id: '9d27ce0c-1692-4b37-889d-a2c0f3a7cd3f2',
    user: '8f27ce0c-1692-4b37-889d-a2c0f3a7f6789',
    title: 'Sr. Java Developer',
    description: 'Test Job Description',
    skills: ['python', 'mysql'],
    contracts: [
      {
        id: '9d27ce0c-1692-4b37-889d-a2c0f3a7cd342',
        coder_id: '8f27ce0c-1692-4b37-889d-a2c0f3a7f6789',
        client_id: '9f27ce0c-1692-4b37-889d-a2c0f3a7f6700',
        name: 'test contract',
        job_proposal: '7f27ce0c-1692-4b37-889d-a2c0f3a7f6745',
        start_date: '2023-10-31',
        end_date: '2023-12-31',
        is_active: true,
        created: '2023-10-31T16:26:34.524015Z',
        updated: '2023-10-31T16:26:34.524068Z'
      }
    ],
    project_size: 'SMALL',
    budget_type: 'HOURLY',
    maximum_budget: 2000,
    maximum_hourly_rate: 100,
    minimum_hourly_rate: 80,
    expertise: ['EXPERT', 'INTERMEDIATE'],
    duration: 'SHORT_TERM',
    timezone: ['GMT-8:00 Pacific Time Zone', 'GMT-7:00 Mountain TimeZone'],
    attachments: ['/attachment1.pdf', '/attachment2.jpg', '/attachment3.py'],
    preferred_coder_residence: 'USA_ONLY',
    is_enabled: true,
    created: '2023-10-31T16:26:34.524015Z',
    updated: '2023-10-31T16:26:34.524068Z',
    status: 'Active',
    coder_avatar: [
      '/images/png/coder_1.png',
      '/images/png/coder_2.png',
      '/images/png/coder_3.png',
      '/images/png/coder_4.png'
    ],
    amt_released: 800
  },

  {
    id: '9d27ce0c-1692-4b37-889d-a2c0f3a7cd3f3',
    user: '8f27ce0c-1692-4b37-889d-a2c0f3a7f6789',
    title: 'Sr. Java Developer',
    description: 'Test Job Description',
    skills: ['python', 'mysql'],
    contracts: [
      {
        id: '9d27ce0c-1692-4b37-889d-a2c0f3a7cd343',
        coder_id: '8f27ce0c-1692-4b37-889d-a2c0f3a7f6789',
        client_id: '9f27ce0c-1692-4b37-889d-a2c0f3a7f6700',
        name: 'test contract',
        job_proposal: '7f27ce0c-1692-4b37-889d-a2c0f3a7f6745',
        start_date: '2023-10-31',
        end_date: '2023-12-31',
        is_active: true,
        created: '2023-10-31T16:26:34.524015Z',
        updated: '2023-10-31T16:26:34.524068Z'
      }
    ],
    project_size: 'SMALL',
    budget_type: 'HOURLY',
    maximum_budget: 2000,
    maximum_hourly_rate: 100,
    minimum_hourly_rate: 80,
    expertise: ['EXPERT', 'INTERMEDIATE'],
    duration: 'SHORT_TERM',
    timezone: ['GMT-8:00 Pacific Time Zone', 'GMT-7:00 Mountain TimeZone'],
    attachments: ['/attachment1.pdf', '/attachment2.jpg', '/attachment3.py'],
    preferred_coder_residence: 'USA_ONLY',
    is_enabled: true,
    created: '2023-10-31T16:26:34.524015Z',
    updated: '2023-10-31T16:26:34.524068Z',
    status: 'Open',
    coder_avatar: [
      '/images/png/coder_1.png',
      '/images/png/coder_2.png',
      '/images/png/coder_3.png',
      '/images/png/coder_4.png'
    ],
    amt_released: 5000
  },

  {
    id: '9d27ce0c-1692-4b37-889d-a2c0f3a7cd3f4',
    user: '8f27ce0c-1692-4b37-889d-a2c0f3a7f6789',
    title: 'Sr. Java Developer',
    description: 'Test Job Description',
    skills: ['python', 'mysql'],
    contracts: [
      {
        id: '9d27ce0c-1692-4b37-889d-a2c0f3a7cd344',
        coder_id: '8f27ce0c-1692-4b37-889d-a2c0f3a7f6789',
        client_id: '9f27ce0c-1692-4b37-889d-a2c0f3a7f6700',
        name: 'test contract',
        job_proposal: '7f27ce0c-1692-4b37-889d-a2c0f3a7f6745',
        start_date: '2023-10-31',
        end_date: '2023-12-31',
        is_active: true,
        created: '2023-10-31T16:26:34.524015Z',
        updated: '2023-10-31T16:26:34.524068Z'
      }
    ],
    project_size: 'SMALL',
    budget_type: 'HOURLY',
    maximum_budget: 2000,
    maximum_hourly_rate: 100,
    minimum_hourly_rate: 80,
    expertise: ['EXPERT', 'INTERMEDIATE'],
    duration: 'SHORT_TERM',
    timezone: ['GMT-8:00 Pacific Time Zone', 'GMT-7:00 Mountain TimeZone'],
    attachments: ['/attachment1.pdf', '/attachment2.jpg', '/attachment3.py'],
    preferred_coder_residence: 'USA_ONLY',
    is_enabled: true,
    created: '2023-10-31T16:26:34.524015Z',
    updated: '2023-10-31T16:26:34.524068Z',
    status: 'Expired',
    coder_avatar: [
      '/images/png/coder_1.png',
      '/images/png/coder_2.png',
      '/images/png/coder_3.png',
      '/images/png/coder_4.png'
    ],
    amt_released: 800
  }
];
