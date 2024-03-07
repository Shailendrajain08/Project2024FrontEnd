export interface EditI {
  isEdit?: boolean;
}

export interface IBasicInfo {
  firstName: string;
  lastName: string;
  username: string;
  work_status: string;
  edit: EditI;
  handleEdit: (name: string) => void;
  selectedMenu?: number;
  setEdit: (edit: EditI) => void;
}
export interface IDigitalPresence {
  linkedin: string;
  github: string;
  stackoverflow: string;
  edit: EditI;
  handleEdit: (name: string) => void;
}

export interface IEducationDetails {
  degree: any;
  certification: any;
  file: any;
  edit: EditI;
  handleEdit: (name: string) => void;
}

export interface EditI {
  isEdit?: boolean;
}

export interface IBasicInfo {
  firstName: string;
  lastName: string;
  username: string;
  work_status: string;
  edit: EditI;
  handleEdit: (name: string) => void;
}

export interface ITechnology {
  id: string;
  name: string;
}

export interface ISkill {
  technology: ITechnology;
  years_of_experience: number;
  skill_type: string;
  expertise_level: string;
}

export interface UserSkills {
  id: string;
  user: string;
  introduction: string;
  skill: ISkill[];
  total_years_of_experience: number;
  identity: string;
  brief_work_experience: string;
  created: string;
  updated: string;
}
export interface AddressProps {
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
