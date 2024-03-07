export interface IAdminCoderinvitedProfile {
  first_name: string;
  last_name: string;
  email: string;
  company_name: string;
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
  skills: string[];
}

export const adminCoderinvitedMockData: IAdminCoderinvitedProfile[] = [
  {
    first_name: 'John',
    last_name: 'Doe',
    email: 'john.doe@gmail.com',
    company_name: 'Acme Inc',
    company_website: 'https://acme.com',
    linkedin_url: 'https://www.linkedin.com/in/your_username1',
    phone: 1234567890,
    country: 'USA',
    city: 'Sample City',
    state: 'CA',
    role: 'COWORKER',
    message: 'Email sent to john.doe@gmail.com',
    is_active: true,
    date_joined: '',
    skills: ['Java', 'Python']
  },

  {
    first_name: 'John',
    last_name: 'Doe',
    email: 'john.doe@gmail.com',
    company_name: 'Acme Inc',
    company_website: 'https://acme.com',
    linkedin_url: 'https://www.linkedin.com/in/your_username2',
    phone: null,
    country: 'USA',
    city: 'Sample City',
    state: 'CA',
    role: 'COWORKER',
    message: 'Email sent to john.doe@gmail.com',
    is_active: true,
    date_joined: '',
    skills: ['Java', 'Python']
  },

  {
    first_name: 'John',
    last_name: 'Doe',
    email: 'john.doe@gmail.com',
    company_name: 'Acme Inc',
    company_website: 'https://acme.com',
    linkedin_url: 'https://www.linkedin.com/in/your_username3',
    phone: 1234567890,
    country: 'USA',
    city: 'Sample City',
    state: 'CA',
    role: 'COWORKER',
    message: 'Email sent to john.doe@gmail.com',
    is_active: true,
    date_joined: '',
    skills: ['Java', 'Python']
  }
];
