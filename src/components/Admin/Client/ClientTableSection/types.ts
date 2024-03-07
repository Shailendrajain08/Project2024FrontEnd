export interface IClientMockData {
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
  address: string;
  zipcode: number;
  [key: string]: string | number | boolean | null;
}

export interface IClientPaymentData {
  card_number: number;
  first_name: string;
  last_name: string;
  card_expiry_date: string;
  tax_id: string;
  [key: string]: string | number | boolean;
}

export const clientMockData: IClientMockData[] = [
  {
    first_name: 'John',
    last_name: 'Doe',
    email: 'john.doe@gmail.com',
    company_name: 'Acme Inc',
    company_website: 'https://acme.com',
    linkedin_url: 'https://www.linkedin.com/in/your_username1',
    phone: +1234567890,
    country: 'USA',
    city: 'Sample City',
    state: 'CA',
    role: 'CLIENT',
    message: 'Email sent to john.doe@gmail.com',
    is_active: true,
    date_joined: '2023-11-31T16:26:34.524015Z',
    address: '132 Maple Street',
    zipcode: 100023
  },

  {
    first_name: 'Jane',
    last_name: 'Doe',
    email: 'jane.doe@gmail.com',
    company_name: 'Acme Inc',
    company_website: 'https://acme.com',
    linkedin_url: 'https://www.linkedin.com/in/your_username2',
    phone: null,
    country: 'USA',
    city: 'Sample City',
    state: 'CA',
    role: 'CLIENT',
    message: 'Email sent to john.doe@gmail.com',
    is_active: true,
    date_joined: '2023-10-31T16:26:34.524015Z',
    address: '123 My Street',
    zipcode: 100023
  },

  {
    first_name: 'Marvin',
    last_name: 'Muller',
    email: 'marvin.muller@gmail.com',
    company_name: 'Acme Inc',
    company_website: 'https://acme.com',
    linkedin_url: 'https://www.linkedin.com/in/your_username3',
    phone: null,
    country: 'USA',
    city: 'Sample City',
    state: 'CA',
    role: 'CLIENT',
    message: 'Email sent to john.doe@gmail.com',
    is_active: false,
    date_joined: '2023-10-31T16:26:34.524015Z',
    address: '132 Maple Street',
    zipcode: 100023
  }
];

// paymnet api not developed. so taking hardcoded values.
export const clientPaymentData: IClientPaymentData = {
  card_number: 1234567890,
  first_name: 'John',
  last_name: 'Doe',
  card_expiry_date: '11/27',
  tax_id: 'PAN Card'
};
