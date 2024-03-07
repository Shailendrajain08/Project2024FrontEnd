import {
  UseFormRegister,
  UseFormSetValue,
  UseFormGetValues,
  UseFormWatch,
  UseFormClearErrors,
  FieldErrors,
  Control
} from 'react-hook-form';

export interface IJobFormProps {
  register: UseFormRegister;
  errors?: FieldErrors;
  formType?: string;
  setFormType: (value: string) => void;
  getValues?: UseFormGetValues;
  watch?: UseFormWatch;
  setValue?: UseFormSetValue;
  JobPostFormData?: JobPostFormDataI;
  control?: Control;
  clearErrors?: UseFormClearErrors;
  isShowButton?: boolean;
  setFormPageCount: (value: number) => void;
  jobPostSelector: any;
  isRequired?: boolean;
}

export interface JobPostFormDataI {
  jopPostHeadline?: string;
  technicalSkills?: string[];
  jobDescription?: string;
  jobDescriptionFile?: any[];
  jobSize?: string;
  jobDuration?: string;
  jobExpertLevel?: boolean | undefined;
  jobIntermediateLevel?: boolean | undefined;
  jobBeginnerLevel?: boolean | undefined;
  jobBudget?: string;
  fixedCurrency?: number;
  hourlyMinimumPrice?: number;
  hourlyMaximumPrice?: number;
  jobLocation?: string;
  jobTimezone?: string[];
}

interface ExptertiseValueI {
  [key: string]: string;
}

interface formPageValueI {
  [key: string]: number;
}
