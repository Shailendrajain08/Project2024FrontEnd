type TCoderProposalCard = {
  proposal: any;
  isLastCard: boolean;
  jobId: string | undefined;
  technologies: any;
};

type TFilterFacet = {
  facetData: any;
  onFilterChange: (value: any) => void;
};

type TManageProposalTab = {
  jobProposal: any;
  jobId: string | undefined;
  handleSearch: (value: string) => void;
  handleSorting: (value: string) => void;
  technologies: any;
  setCurrentPage: any;
  isLoading: boolean;
};

type TSearchBar = {
  onSearch: (value: string) => void;
};

type TSortByList = {
  handleSorting: (value: string) => void;
};

type TUser = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  type: string;
  agency: string | null;
  is_favorite: boolean;
  skill_and_experience: TSkillAndExperience;
  linkedin_url: string;
  github_url: string;
  country: string;
  stackoverflow_url: string;
  city: string;
  state: string;
  date_joined: string;
  educational_qualification: TEducationalQualification[];
  past_employment_history: any[] | null;
  completed_jobs: TCompletedJob[];
};

type TSkillAndExperience = {
  id: string;
  user: string;
  introduction: string;
  total_years_of_experience: number;
  identity: string;
  hourly_rate: number;
  brief_work_experience: string;
  profile_picture: string | null;
  skills: TCoderSkill[];
  created: string;
  updated: string;
};

type TSkill = {
  technology: { [key: string]: string };
  years_of_experience: number;
  skill_type: string;
  expertise_level: string;
};

type TCoderSkill = {
  id: string;
  user: string;
  technology: string;
  years_of_experience: number;
  skill_type: string;
  expertise_level: string;
  created: string;
  updated: string;
};

type TCertificate = {
  certificate_name: string;
  year_of_completion: number;
};
type TDegree = {
  university: string;
  passing_year: number;
  degree: string;
  college: string;
};

type TFeedback = {
  rating: number | null;
  comment: string | null;
};

type TCompletedJob = {
  title: string | null;
  start_date: string | null;
  end_date: string | null;
  feedback: TFeedback[];
  total_amount_earned: number | null;
  total_hours_worked: number | null;
  hourly_rate: number | null;
};

type TEducationalQualification = {
  certificates: TCertificate[];
  degrees: TDegree[];
  resume: string;
  portfolio: string;
};

type TJob = {
  id: string;
  user: string;
  title: string;
  description: string;
  skills: string[];
  contracts: any[];
  project_size: string;
  budget_type: string;
  maximum_budget?: number;
  maximum_hourly_rate?: number;
  minimum_hourly_rate?: number;
  expertise: string[];
  duration: string;
  timezone: string[];
  attachments: string[];
  preferred_coder_residence: string;
  status: string;
  created: string;
  updated: string;
};

type TMilestones = {
  milestones: TMileStone[];
};

type TMileStone = {
  milestone: string;
  time: number;
  amount: number;
};

type TProposal = {
  id: string;
  user: TUser;
  job_post: TJob;
  description: string;
  proposal_type: string;
  hourly_rate: number;
  availability_per_week: number;
  attachments: string[];
  milestones: string[];
  coder_fee: number;
  hirecoder_fee: number;
  total_project_cost: number;
  created: string;
  updated: string;
};

type TAddCoderProposal = {
  onYes: () => void;
  onClose: () => void;
  onNo: () => void;
};

type TTermAndConditions = {
  control: any;
  Controller: any;
  onClose: () => void;
  onYes: () => void;
};
