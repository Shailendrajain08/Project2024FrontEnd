export interface IAdminCoworkerProfile {
  first_name: string;
  last_name?: string;
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
  position: string;
}

export const adminCoworkerMockData: IAdminCoworkerProfile[] = [
  {
    first_name: 'Stacy',
    email: 'john.doe@gmail.com',
    company_name: 'Acme Inc',
    company_website: 'https://acme.com',
    linkedin_url: 'https://www.linkedin.com/in/your_username1',
    phone: null,
    country: 'USA',
    city: 'Sample City',
    state: 'Nevada',
    role: 'COWORKER',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    is_active: true,
    date_joined: '',
    position: 'Project Manager'
  },

  {
    first_name: 'Morgan',
    last_name: 'Meller',
    email: 'john.doe@gmail.com',
    company_name: 'Acme Inc',
    company_website: 'https://acme.com',
    linkedin_url: 'https://www.linkedin.com/in/your_username2',
    phone: 1234567890,
    country: 'USA',
    city: 'Sample City',
    state: 'CA',
    role: 'COWORKER',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    is_active: false,
    date_joined: '',
    position: 'Scrum Master'
  },

  {
    first_name: 'Sudarshan',
    email: 'john.doe@gmail.com',
    company_name: 'Acme Inc',
    company_website: 'https://acme.com',
    linkedin_url: 'https://www.linkedin.com/in/your_username3',
    phone: null,
    country: 'USA',
    city: 'Sample City',
    state: 'Nevada',
    role: 'COWORKER',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    is_active: true,
    date_joined: '',
    position: 'Project Manager'
  }
];
