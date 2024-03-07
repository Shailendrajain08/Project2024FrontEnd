interface ITechnology {
  id: string;
  name: string;
}

interface ISkill {
  technology: ITechnology;
  years_of_experience: number;
  skill_type: string;
  expertise_level: string;
}

interface IAddress {
  address_line_1: string;
  address_line_2: string;
  country: string;
  city: string;
  state: string;
  zip_code: string;
}

interface IDegree {
  id: number;
  degree: string;
  passing_year: string;
  university: string;
  location: string;
}

interface ICertification {
  id: number;
  certification: string;
  passing_year: string;
}

interface IPortfolioItem {
  id: number;
  image: string;
  host_url: string;
  description: string;
}
interface IPastEmployment {
  company: string;
  position: string;
  start_date: string;
  end_date: string;
  created: string;
  updated: string;
}

interface IEducationDetails {
  degree: IDegree[];
  certification: ICertification[];
  file: string;
  portfolioone: IPortfolioItem[];
  portfoliotwo: IPortfolioItem[];
}
interface IPaymentDetails {
  account_no: string;
  bank_name: string;
  swift_code: string;
  ifsc_code: string;
  tax_id: string;
}

export interface ICoderData {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  job_posts: any[]; // Specify a more detailed type if available
  skill: ISkill[];
  total_years_of_experience: number;
  identity: string;
  company_website: string;
  linkedin_url: string;
  phone: string | null;
  country: string;
  city: string;
  state: string;
  role: string;
  message: string;
  is_active: boolean;
  date_joined: string; // or Date if you're using Date objects
  address: IAddress;
  educationDetails: IEducationDetails;
  past_employment: IPastEmployment[];
  payment_details: IPaymentDetails;
}
