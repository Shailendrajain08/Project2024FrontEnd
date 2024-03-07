import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import { VisaCardSvg } from './PaymentDetail/Svgs/VisaCardSvg';
import { MasterCardSvg } from './PaymentDetail/Svgs/MasterCardSvg';
import { AmericanExpressSvg } from './PaymentDetail/Svgs/AmericanExpressSvg';

export const personalDetail = {
  basicInfo: {
    firstName: 'anikt',
    lastName: 'singh',
    username: '@itsme',
    company_email: 'hack4u@itsme.com',
    phone: 1234567890,
    logo: ''
  },
  companyDetail: {
    company_name: 'Tycoot Pvt Ltd.',
    company_website: 'www.tycoot.com'
  },
  address: {
    address_line1: 'T-25',
    address_line2: 'M-29',
    city: 'Los Angeles',
    state: 'CA',
    country: 'USA',
    zipcode: '1234'
  },
  digitalPresence: {
    linkedin: 'http://www.linkedin.in/me/itsme-xyz',
    github: 'http://www.github.com/me/test-xyz',
    stackoverflow: 'http://www.stackoverflow.com/me/stack-dummy'
  }
};

export const clientMenu = [
  {
    id: 1,
    icon: PersonOutlineOutlinedIcon,
    label: 'Personal Details',
    children: [
      {
        id: 1,
        icon: null,
        label: 'Basic Details'
      },
      {
        id: 2,
        icon: null,
        label: 'Company Details'
      },
      {
        id: 3,
        icon: null,
        label: 'Address'
      },
      {
        id: 4,
        icon: null,
        label: 'Social Digital Presence'
      }
    ]
  },
  { id: 5, icon: AttachMoneyOutlinedIcon, label: 'Payment Information' },
  { id: 6, icon: SecurityOutlinedIcon, label: '' }
];

export const initialEditValue = {
  basicInfo: false,
  companyDetail: false,
  address: false,
  digitalPresence: false
};

export const paymentDetail = {
  walletBalance: {
    wallet_balance: '1000.00'
  },
  billingDetail: {
    card_type: 'MasterCard',
    card_number: 'XXXX-XXXX-XXX-1234',
    expiry_date: '12/2024',
    first_name: 'Itsme',
    last_name: 'T',
    address: {
      address_line1: 'T-25',
      address_line2: '',
      city: 'Los Angeles',
      state: 'CA',
      country: 'USA',
      zipcode: '1234'
    },
    documents: {
      unique_id_name: 'Driver license',
      unique_id_file: [{ name: 'dl.png' }],
      tax_id: [
        { name: 'PAN', value: 'ABCD1234S' },
        { name: 'ITIN', value: 'ZX123456M' }
      ]
    }
  }
};

export const uniqueIdOptions = [
  {
    label: 'State identification(ID) card',
    value: 'State identification(ID) card'
  },
  {
    label: 'Driver license',
    value: 'Driver license'
  },
  {
    label: 'US passport or passport card',
    value: 'US passport or passport card'
  },
  {
    label: 'US military card(front and back)',
    value: 'US military card(front and back)'
  },
  {
    label: `Military dependent's ID card (front and back)`,
    value: `Military dependent's ID card (front and back)`
  },
  {
    label: 'Permanent Resident Card',
    value: 'Permanent Resident Card'
  },
  {
    label: 'Certficate of citezenship',
    value: 'Certficate of citezenship'
  },
  {
    label: 'Certficate of Naturalization',
    value: 'Certficate of Naturalization'
  },
  {
    label: 'Adhaar',
    value: 'Adhaar'
  }
];

export const taxIdOptions = [
  { label: 'PAN', value: 'PAN' },
  { label: 'ITIN', value: 'ITIN' },
  { label: 'EIN', value: 'EIN' }
];

// export const AddressOptionList = [
//   {
//     label: 'Adhaar',
//     value: 'Adhaar',
//   },
// ];

export const CardData = [
  { label: 'visa', value: 'visa', icon: VisaCardSvg },
  { label: 'master', value: 'master', icon: MasterCardSvg },
  {
    label: 'americanexpress',
    value: 'americanexpress',
    icon: AmericanExpressSvg
  }
];
