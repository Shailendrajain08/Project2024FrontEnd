// here we need to update
type FromDataI = {
  name: string;
  companyEmail: string;
  username: string;
  password: string;
  phone: string;
  companyName: string;
  companyWebsite: string;
  linkedin: string;
  logo: any;
  country: string;
  addressLine1: string;
  addressLine2: string;
  state: string;
  zipcode: string;
  city: string;
  glassdoor?: string;
  careerBliss?: string;
  youtubeChannel?: string;
  anyOther?: string;
  verifyEmail?: string;
};

type DigitalDataI = {
  glassdoor: string;
  careerBliss: string;
  youtubeChannel: string;
  anyOther: string;
};

type UserDataI = {
  statusCode: number;
  data: any;
  isEmailVerified: boolean;
};

type FromPropsI = {
  formType: string;
  setFormType: (value: string) => void;
  formData: any;
  // setformdata any to void
  setFormData: (data: any, value: string) => void;
  userData: UserDataI;
  handleFormType: any;
  value?: string;
  role?: string;
};

type CoderFromDataI = {
  first_name: string;
  middle_name?: any;
  last_name: string;
  email: string;
  username: string;
  password: string;
  phone: string;
  type: string;
  self_details?: any;
  skills?: any;
  total_years_of_experience?: any;
  roles?: any;
  work_experience?: any;
  education?: any;
  certificate?: any;
  country?: any;
  addressLine1?: any;
  addressLine2?: any;
  state?: any;
  zipcode?: any;
  city?: any;
  verifyEmail?: any;
  otherSkills?: any;
  primaryExpertiseLevel?: any;
  primaryYearOfExperience?: any;
  primaryTechnology?: any;
};

type CoderDigitalDataI = {
  linkedIn?: any;
  github?: any;
  stackoverflow?: any;
  profile_doc?: any;
  profile_pic?: any;
};

export { FromDataI, DigitalDataI, UserDataI, FromPropsI, CoderFromDataI, CoderDigitalDataI };
