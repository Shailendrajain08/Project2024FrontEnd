type TData = {
  id?: number;
  title: string;
  description: string;
  skills: TSkills[];
  hourlyMinPrice?: number | null | undefined;
  hourlyMaxPrice?: number | null | undefined;
  fixedMaxPrice: number | null;
  location?: string;
  jobPostAge: string;
  jobDuration: string;
  project_size: string;
  expertise: string;
  is_usa_project: string;
  timezone: string;
};

type TSkills = {
  [key: string]: string | number;
};

interface ICoderProposalProps {
  // jobData: TData;
  coderData: any;
  maxLength: number;
  isHourly: boolean;
  hireCoderFeePercentage: number;
  formProps: any;
}

type TInputValue = {
  hourlyRate: number | null;
  totalWorkHours: number | null;
};

export { TData, TSkills, ICoderProposalProps, TInputValue };
