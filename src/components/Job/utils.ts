import { ExptertiseValueI } from './type';
import { expertise, formPageValue } from './constant';

export const getExpertiseLevel = (
  isExpert: boolean | undefined,
  isIntermediate: boolean | undefined,
  isBeginner: boolean | undefined
) => {
  const levels = [];
  if (isExpert) levels.push('expert');
  if (isIntermediate) levels.push('intermediate');
  if (isBeginner) levels.push('beginner');
  return levels.length === 0 ? 'expert | intermediate | beginner' : levels.join(' | ');
};

export const popupExpertLevel = (
  isExpert: boolean | undefined,
  isIntermediate: boolean | undefined,
  isBeginner: boolean | undefined
) => {
  let expertLevel = [];

  switch (true) {
    case isExpert && !isIntermediate && !isBeginner:
      expertLevel = ['expert'];
      break;
    case !isExpert && isIntermediate && !isBeginner:
      expertLevel = ['intermediate'];
      break;
    case !isExpert && !isIntermediate && isBeginner:
      expertLevel = ['beginner'];
      break;
    case isExpert && isIntermediate && !isBeginner:
      expertLevel = ['expert', 'intermediate'];
      break;
    case isExpert && !isIntermediate && isBeginner:
      expertLevel = ['expert', 'beginner'];
      break;
    case !isExpert && isIntermediate && isBeginner:
      expertLevel = ['intermediate', 'beginner'];
      break;
    default:
      expertLevel = ['expert', 'beginner', 'intermediate'];
  }

  return expertLevel;
};

export const handleExpertiseLevel = (
  isExpert: boolean | undefined,
  isIntermediate: boolean | undefined,
  isBeginner: boolean | undefined
) => {
  let value: ExptertiseValueI = { jobExpertLevel: 'expert' };
  if (isExpert && !isIntermediate && !isBeginner) value = { jobExpertLevel: 'expert' };
  else if (isExpert && isIntermediate && !isBeginner)
    value = { jobExpertLevel: 'expert', jobIntermediateLevel: 'intermediate' };
  else if (isExpert && isIntermediate && isBeginner)
    value = {
      jobExpertLevel: 'expert',
      jobIntermediateLevel: 'intermediate',
      jobBeginnerLevel: 'beginner'
    };
  return value;
};

export const checkJobFormValidation = (formData: any = {}) => {
  let isValid = true;
  Object.keys(formData).map((key: string) => {
    if (!formData[key] || formData[key]?.length === 0) {
      isValid = false;
    }
  });
  return isValid;
};

export const setJobForm = (
  formType: string,
  setFormType: (value: string) => void,
  setFormPageCount: (value: number) => void
) => {
  switch (formPageValue[formType]) {
    case 1:
      setFormType('jobSize');
      setFormPageCount(2);
      break;
    case 2:
      setFormType('jobBudget');
      setFormPageCount(3);
      break;
    case 3:
      setFormType('jobLocation');
      setFormPageCount(4);
      break;
    case 4:
      setFormType('jobFormPreview');
      setFormPageCount(5);
      break;
    default:
      setFormType('jobDetails');
      setFormPageCount(1);
  }
};

export const mapTechOptions = (value: any) => {
  // debugger;
  console.log('value', value);

  return value
    .slice()
    .sort((a: any, b: any) => a.name.localeCompare(b.name))
    .map((el: any) => el.name.charAt(0).toUpperCase() + el.name.slice(1));
};

const getUuidList = (value: any, response: any[], capitalize: any) => {
  return response.filter((item) => value.includes(capitalize(item.name))).map((item) => item.id);
};

export const jopPostPayload = async (data: any) => {
  const budget = data.jobBudget === 'fixedPrice' ? 'FIXED' : 'HOURLY';
  const duration = data.jobDuration.replace(/\s/g, '_').toUpperCase();
  const location = data.jobLocation === 'USA' ? 'USA_ONLY' : 'ANYWHERE';
  const attachments = data?.jobDescriptionFile || [];
  const beginner = data?.jobBeginnerLevel || false;
  const intermediate = data?.jobIntermediateLevel || false;
  const expert = data?.jobExpertLevel || false;
  const formData = new FormData();
  formData.append('title', data.jopPostHeadline);
  formData.append('description', data.jobDescription);
  data.technicalSkills.forEach((skill: any) =>
    formData.append('technologies', skill.toLowerCase())
  );
  formData.append('budget_type', budget);
  formData.append('expertise_is_beginner', beginner);
  formData.append('expertise_is_intermediate', intermediate);
  formData.append('expertise_is_expert', expert);
  formData.append('duration', duration);
  data.jobTimezone.forEach((timezone: any) =>
    formData.append('timezone', timezone.name.split(' ')[1])
  );
  attachments.forEach((attachment: any, i: number) =>
    formData.append(`attachment_${i + 1}`, attachment)
  );
  formData.append('project_size', data.jobSize.toUpperCase());
  formData.append('maximum_budget', data.fixedCurrency);
  formData.append('maximum_hourly_rate', data.hourlyMaximumPrice);
  formData.append('minimum_hourly_rate', data.hourlyMinimumPrice);
  formData.append('preferred_coder_residence', location);
  return formData;
};
