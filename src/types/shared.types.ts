export interface AuthUser {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  role: string;
  type: string;
}
export interface AuthUserWithToken {
  access_token: string;
  refresh_token: string;
  expirationTimeAccessToken?: number;
  expirationTimeRefreshToken?: number;
  user: AuthUser;
}

export interface CoderProfile {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  type: string;
  agency: string;
  is_favorite: boolean;
  skill_and_experience: SkillAndExperience;
  linkedin_url: string;
  github_url: string;
  country: string;
  stackoverflow_url: string;
  city: string;
  state: string;
  date_joined: string;
  educational_qualification: EducationalQualification[];
  past_employment_history: PastEmploymentHistory[];
  completed_jobs: CompletedJob[];
}

export interface SkillAndExperience {
  id: string;
  user: string;
  introduction: string;
  total_years_of_experience: number;
  identity: string;
  hourly_rate: number;
  brief_work_experience: string;
  profile_picture: string;
  skills: ICoderSkills[];
  created: string;
  updated: string;
}

export interface EducationalQualification {
  certificates: string;
  degrees: string;
  resume: string;
  portfolio: string;
}

export interface PastEmploymentHistory {
  additionalProp1: string;
  additionalProp2: string;
  additionalProp3: string;
}

export interface CompletedJob {
  title: any;
  start_date: any;
  end_date: any;
  feedback: Feedback[];
  total_amount_earned: any;
  total_hours_worked: any;
  hourly_rate: any;
}

export interface Feedback {
  rating: any;
  comment: any;
}

export interface IAddress {
  id: string;
  user: string;
  address_line_1: string;
  address_line_2: string;
  country: string;
  city: string;
  state: string;
  zip_code: string;
  created: string;
  updated: string;
}

export interface ICoderSkills {
  id: string;
  user: string;
  technology: string;
  years_of_experience: number;
  skill_type: string;
  expertise_level: string;
  created: string;
  updated: string;
}

export interface ICoderDegree {
  id: string;
  university: string;
  passing_year: number;
  degree: string;
  college: string;
  created: string;
  updated: string;
}

export interface ICoderCertification {
  id: string;
  certificate_name: string;
  year_of_completion: number;
  created: string;
  updated: string;
}

export interface Itechnology {
  id: string;
  name: string;
  user: string;
  is_approved: boolean;
  created: string;
  updated: string;
}
