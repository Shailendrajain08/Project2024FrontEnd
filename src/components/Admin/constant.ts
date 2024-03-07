import {
  ManageAccountsOutlined,
  SupervisorAccountOutlined,
  TopicOutlined,
  FeedOutlined,
  DeveloperModeOutlined
} from '@mui/icons-material';
import { ICoderData } from './type';

export const adminclientMenu = [
  { id: 1, icon: ManageAccountsOutlined, label: 'Manage roles' },
  { id: 2, icon: TopicOutlined, label: 'Manage permission' },
  {
    id: 3,
    icon: SupervisorAccountOutlined,
    label: 'Manage',
    children: [
      {
        id: 4,
        icon: null,
        label: 'Clients'
      },
      {
        id: 5,
        icon: null,
        label: 'Coders'
      },
      {
        id: 6,
        icon: null,
        label: 'Jobs'
      },
      {
        id: 7,
        icon: null,
        label: 'Revenue'
      }
    ]
  },
  {
    id: 8,
    icon: FeedOutlined,
    label: 'Grievances',
    children: [
      {
        id: 9,
        icon: null,
        label: 'By Coder'
      },
      {
        id: 10,
        icon: null,
        label: 'By Client'
      }
    ]
  },
  {
    id: 11,
    icon: DeveloperModeOutlined,
    label: 'CMS',
    children: [
      {
        id: 12,
        icon: null,
        label: 'Homepage'
      },
      {
        id: 13,
        icon: null,
        label: 'About Us'
      },
      {
        id: 14,
        icon: null,
        label: 'Contact Us'
      },
      {
        id: 15,
        icon: null,
        label: 'FAQs'
      },
      {
        id: 16,
        icon: null,
        label: 'Team'
      },
      {
        id: 17,
        icon: null,
        label: 'Testimonials'
      },
      {
        id: 18,
        icon: null,
        label: 'Why Choose HireCoder'
      },
      {
        id: 19,
        icon: null,
        label: 'How to use HireCoder'
      }
    ]
  }
];

export const admin_coder_data: ICoderData[] = [
  {
    first_name: 'John',
    last_name: 'Doe',
    username: '@dave',
    email: 'john.doe@gmail.com',
    job_posts: [],
    skill: [
      {
        technology: {
          id: 'ff572785-d361-4f48-b567-9c30cbab627e1',
          name: 'python'
        },
        years_of_experience: 5,
        skill_type: 'PRIMARY',
        expertise_level: 'EXPERT'
      },
      {
        technology: {
          id: 'ff572785-d361-4f48-b567-9c30cbab627e1',
          name: 'Java'
        },
        years_of_experience: 5,
        skill_type: 'SECONDARY',
        expertise_level: 'EXPERT'
      },
      {
        technology: {
          id: 'ff572785-d361-4f48-b567-9c30cbab627e1',
          name: 'HTML'
        },
        years_of_experience: 5,
        skill_type: 'OTHER',
        expertise_level: 'EXPERT'
      }
    ],
    total_years_of_experience: 8,
    identity: 'BACKEND-DEVELOPER',
    company_website: 'https://acme.com',
    linkedin_url: 'https://www.linkedin.com/in/your_username',
    phone: '7474756545',
    country: 'USA',
    city: 'Sample City',
    state: 'CA',
    role: 'CODER',
    message: 'Email sent to john.doe@gmail.com',
    is_active: false,
    date_joined: 'May 11, 2022',
    address: {
      address_line_1: '123 Main St',
      address_line_2: 'Apt 101',
      country: 'USA',
      city: 'Sample City',
      state: 'CA',
      zip_code: '123-45'
    },
    educationDetails: {
      degree: [
        {
          id: 1,
          degree: 'BA',
          passing_year: '2018 - 21',
          university: 'Stanford University',
          location: 'America'
        },
        {
          id: 2,
          degree: 'MA',
          passing_year: '2021 - 23',
          university: 'Stanford University',
          location: 'America'
        }
      ],
      certification: [
        {
          id: 1,
          certification: 'Certificate in Network Professional',
          passing_year: '2020 - 21'
        },
        {
          id: 2,
          certification: 'Certificate in Network Professional',
          passing_year: '2021 - 23'
        }
      ],
      file: '',
      portfolioone: [
        {
          id: 1,
          image: '/images/png/portfolioimage.png',
          host_url: 'https://lens.google.com/search',
          description: 'premium website design'
        }
      ],
      portfoliotwo: [
        {
          id: 1,
          image: '/images/png/portfolioimage.png',
          host_url: 'https://lens.google.com/search',
          description: 'premium website design'
        }
      ]
    },
    past_employment: [
      {
        company: 'Acme Inc',
        position: 'Senior Software Engineer',
        start_date: '2022-10-31',
        end_date: '2023-10-31',
        created: '2023-10-31T16:26:34.524015Z',
        updated: '2023-10-31T16:26:34.524068Z'
      }
    ],
    payment_details: {
      account_no: '1234 5555 6666 3214',
      bank_name: 'ICICI',
      swift_code: 'ICICI',
      ifsc_code: '1250022',
      tax_id: 'Pan Card'
    }
  },
  {
    first_name: 'Dave',
    last_name: 'Doe',
    email: 'dave.doe@gmail.com',
    username: '@dave',
    job_posts: [],
    skill: [
      {
        technology: {
          id: 'ff572785-d361-4f48-b567-9c30cbab627e2',
          name: 'Java'
        },
        years_of_experience: 5,
        skill_type: 'PRIMARY',
        expertise_level: 'EXPERT'
      }
    ],
    total_years_of_experience: 8,
    identity: 'BACKEND-DEVELOPER',
    company_website: 'https://acme.com',
    linkedin_url: 'https://www.linkedin.com/in/your_username',
    phone: '+1 (555) 555-1234',
    country: 'INDIA',
    city: 'Sample City',
    state: 'CA',
    role: 'CODER',
    message: 'Email sent to john.doe@gmail.com',
    is_active: true,
    date_joined: 'May 11, 2022',
    address: {
      address_line_1: '123 Main St',
      address_line_2: 'Apt 101',
      country: 'INDIA',
      city: 'Sample City',
      state: 'CA',
      zip_code: '123-45'
    },
    educationDetails: {
      degree: [
        {
          id: 1,
          degree: 'BA',
          passing_year: '2018 - 21',
          university: 'Stanford University',
          location: 'America'
        },
        {
          id: 2,
          degree: 'MA',
          passing_year: '2021 - 23',
          university: 'Stanford University',
          location: 'America'
        }
      ],
      certification: [
        {
          id: 1,
          certification: 'Certificate in Network Professional',
          passing_year: '2020 - 21'
        },
        {
          id: 2,
          certification: 'Certificate in Network Professional',
          passing_year: '2021 - 23'
        }
      ],
      file: '',
      portfolioone: [
        {
          id: 1,
          image: '/images/png/portfolioimage.png',
          host_url: 'https://lens.google.com/search',
          description: 'premium website design'
        }
      ],
      portfoliotwo: [
        {
          id: 1,
          image: '/images/png/portfolioimage.png',
          host_url: 'https://lens.google.com/search',
          description: 'premium website design'
        }
      ]
    },
    past_employment: [
      {
        company: 'Acme Inc',
        position: 'Senior Software Engineer',
        start_date: '2022-10-31',
        end_date: '2023-10-31',
        created: '2023-10-31T16:26:34.524015Z',
        updated: '2023-10-31T16:26:34.524068Z'
      }
    ],
    payment_details: {
      account_no: '1234 5555 6666 3214',
      bank_name: 'ICICI',
      swift_code: 'ICICI',
      ifsc_code: '1250022',
      tax_id: 'Pan Card'
    }
  },
  {
    first_name: 'Mark',
    last_name: 'Doe',
    username: '@dave',
    email: 'mark.doe@gmail.com',
    job_posts: [],
    skill: [
      {
        technology: {
          id: 'ff572785-d361-4f48-b567-9c30cbab627e11',
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
    linkedin_url: 'https://www.linkedin.com/in/your_username',
    phone: null,
    country: 'INDIA',
    city: 'Sample City',
    state: 'CA',
    role: 'CODER',
    message: 'Email sent to john.doe@gmail.com',
    is_active: false,
    date_joined: 'May 11, 2022',
    address: {
      address_line_1: '123 Main St',
      address_line_2: 'Apt 101',
      country: 'INDIA',
      city: 'Sample City',
      state: 'CA',
      zip_code: '123-45'
    },
    educationDetails: {
      degree: [
        {
          id: 1,
          degree: 'BA',
          passing_year: '2018 - 21',
          university: 'Stanford University',
          location: 'America'
        },
        {
          id: 2,
          degree: 'MA',
          passing_year: '2021 - 23',
          university: 'Stanford University',
          location: 'America'
        }
      ],
      certification: [
        {
          id: 1,
          certification: 'Certificate in Network Professional',
          passing_year: '2020 - 21'
        },
        {
          id: 2,
          certification: 'Certificate in Network Professional',
          passing_year: '2021 - 23'
        }
      ],
      file: '',
      portfolioone: [
        {
          id: 1,
          image: '/images/png/portfolioimage.png',
          host_url: 'https://lens.google.com/search',
          description: 'premium website design'
        }
      ],
      portfoliotwo: [
        {
          id: 1,
          image: '/images/png/portfolioimage.png',
          host_url: 'https://lens.google.com/search',
          description: 'premium website design'
        }
      ]
    },
    past_employment: [
      {
        company: 'Acme Inc',
        position: 'Senior Software Engineer',
        start_date: '2022-10-31',
        end_date: '2023-10-31',
        created: '2023-10-31T16:26:34.524015Z',
        updated: '2023-10-31T16:26:34.524068Z'
      }
    ],
    payment_details: {
      account_no: '1234 5555 6666 3214',
      bank_name: 'ICICI',
      swift_code: 'ICICI',
      ifsc_code: '1250022',
      tax_id: 'Pan Card'
    }
  },
  {
    first_name: 'Sam',
    last_name: 'koe',
    username: '@dave',
    email: 'sam.doe@gmail.com',
    job_posts: [],
    skill: [
      {
        technology: {
          id: 'ff572785-d361-4f48-b567-9c30cbab627e32',
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
    linkedin_url: 'https://www.linkedin.com/in/your_username',
    phone: null,
    country: 'USA',
    city: 'Sample City',
    state: 'CA',
    role: 'CODER',
    message: 'Email sent to john.doe@gmail.com',
    is_active: true,
    date_joined: 'May 11, 2022',
    address: {
      address_line_1: '123 Main St',
      address_line_2: 'Apt 101',
      country: 'USA',
      city: 'Sample City',
      state: 'CA',
      zip_code: '123-45'
    },
    educationDetails: {
      degree: [
        {
          id: 1,
          degree: 'BA',
          passing_year: '2018 - 21',
          university: 'Stanford University',
          location: 'America'
        },
        {
          id: 2,
          degree: 'MA',
          passing_year: '2021 - 23',
          university: 'Stanford University',
          location: 'America'
        }
      ],
      certification: [
        {
          id: 1,
          certification: 'Certificate in Network Professional',
          passing_year: '2020 - 21'
        },
        {
          id: 2,
          certification: 'Certificate in Network Professional',
          passing_year: '2021 - 23'
        }
      ],
      file: '',
      portfolioone: [
        {
          id: 1,
          image: '/images/png/portfolioimage.png',
          host_url: 'https://lens.google.com/search',
          description: 'premium website design'
        }
      ],
      portfoliotwo: [
        {
          id: 1,
          image: '/images/png/portfolioimage.png',
          host_url: 'https://lens.google.com/search',
          description: 'premium website design'
        }
      ]
    },
    past_employment: [
      {
        company: 'Acme Inc',
        position: 'Senior Software Engineer',
        start_date: '2022-10-31',
        end_date: '2023-10-31',
        created: '2023-10-31T16:26:34.524015Z',
        updated: '2023-10-31T16:26:34.524068Z'
      }
    ],
    payment_details: {
      account_no: '1234 5555 6666 3214',
      bank_name: 'ICICI',
      swift_code: 'ICICI',
      ifsc_code: '1250022',
      tax_id: 'Pan Card'
    }
  },
  {
    first_name: 'Austin',
    last_name: 'Doe',
    username: '@dave',
    email: 'austin.doe@gmail.com',
    job_posts: [],
    skill: [
      {
        technology: {
          id: 'ff572785-d361-4f48-b567-9c30cbab627e123',
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
    linkedin_url: 'https://www.linkedin.com/in/your_username',
    phone: null,
    country: 'USA',
    city: 'Sample City',
    state: 'CA',
    role: 'CODER',
    message: 'Email sent to john.doe@gmail.com',
    is_active: true,
    date_joined: 'May 11, 2022',
    address: {
      address_line_1: '123 Main St',
      address_line_2: 'Apt 101',
      country: 'USA',
      city: 'Sample City',
      state: 'CA',
      zip_code: '123-45'
    },
    educationDetails: {
      degree: [
        {
          id: 1,
          degree: 'BA',
          passing_year: '2018 - 21',
          university: 'Stanford University',
          location: 'America'
        },
        {
          id: 2,
          degree: 'MA',
          passing_year: '2021 - 23',
          university: 'Stanford University',
          location: 'America'
        }
      ],
      certification: [
        {
          id: 1,
          certification: 'Certificate in Network Professional',
          passing_year: '2020 - 21'
        },
        {
          id: 2,
          certification: 'Certificate in Network Professional',
          passing_year: '2021 - 23'
        }
      ],
      file: '',
      portfolioone: [
        {
          id: 1,
          image: '/images/png/portfolioimage.png',
          host_url: 'https://lens.google.com/search',
          description: 'premium website design'
        }
      ],
      portfoliotwo: [
        {
          id: 1,
          image: '/images/png/portfolioimage.png',
          host_url: 'https://lens.google.com/search',
          description: 'premium website design'
        }
      ]
    },
    past_employment: [
      {
        company: 'Acme Inc',
        position: 'Senior Software Engineer',
        start_date: '2022-10-31',
        end_date: '2023-10-31',
        created: '2023-10-31T16:26:34.524015Z',
        updated: '2023-10-31T16:26:34.524068Z'
      }
    ],
    payment_details: {
      account_no: '1234 5555 6666 3214',
      bank_name: 'ICICI',
      swift_code: 'ICICI',
      ifsc_code: '1250022',
      tax_id: 'Pan Card'
    }
  }
];
