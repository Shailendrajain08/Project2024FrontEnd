import { formPageValueI } from './type';

const jobFormsData = {
  title: `Lets start with a Job title to explain your job requirement....`,
  description: `This helps your job listing stand out to the right candidate. It’s the first thing they’ll see, so make it count!.`
};

const techOptions = ['Java', 'PHP', 'JavaScript', 'DevOps', 'React', 'Angular'];
const note = 'Note: Manual time does not qualify for HireCoder Hourly Protection. ';
const learnMore = 'LearnMore';

const jobSizeLists = [
  {
    name: 'jobLargeSize',
    label: 'Large',
    helperText: 'Long term, complex jobs which you assume will take lot of time.',
    defaultChecked: true,
    value: 'Large'
  },
  {
    name: 'jobMediumSize',
    label: 'Medium',
    helperText: 'Jobs which are already planned and defined.',
    defaultChecked: false,
    value: 'Medium'
  },
  {
    name: 'jobSmallSize',
    label: 'Small',
    helperText: 'Quick and straightforward tasks.',
    defaultChecked: false,
    value: 'Small'
  }
];

const jobDurationLists = [
  {
    name: 'jobLongTerm',
    label: 'Long Term',
    helperText: 'Estimated to take more than 6 months',
    defaultChecked: true,
    value: `long term`
  },
  {
    name: 'jobMediumTerm',
    label: 'Medium Term',
    helperText: 'Estimated to take 3 to 6 months',
    defaultChecked: false,
    value: `medium term`
  },
  {
    name: 'jobTerm',
    label: 'Short Term',
    helperText: 'Estimated to take 1 to 3 months',
    defaultChecked: false,
    value: `shot term`
  }
];

const jobExpertiseLevelLists = [
  {
    name: 'jobExpertLevel',
    label: 'Expert',
    helperText: 'Has more than 5 Years of working experience',
    defaultChecked: true,
    value: 'expert'
  },
  {
    name: 'jobIntermediateLevel',
    label: 'Intermediate',
    helperText: 'Has more than 3 years of working experience',
    defaultChecked: false,
    value: 'intermediate'
  },
  {
    name: 'jobBeginnerLevel',
    label: 'Beginner',
    helperText: 'Has started less than 1 year ago',
    defaultChecked: false,
    value: 'beginner'
  }
];

const jobBudgetLists = [
  {
    name: 'fixedPrice',
    label: 'Fixed Price Job',
    helperText: 'You have set aside a fixed budget which you plan to invest.',
    value: 'fixedPrice'
  },
  {
    name: 'hourly',
    label: 'Hourly Job',
    helperText: 'You want to pay as the work is done and delivered.',
    value: 'hourly'
  }
];

const jobLocationLists = [
  {
    name: 'usa',
    label: 'USA Only',
    helperText: 'You are in US and want to communicate with the coder during your business hours.',
    value: 'USA'
  },
  {
    name: 'anywhere',
    label: 'Anywhere in the world.',
    helperText: 'You want to explore the best coder across the globe.',
    value: 'Anywhere'
  }
];

const timeZoneOption = [
  'Any where',
  '(GMT-5.00) Eastern Time Zone',
  '(GMT-6.00) Central Time Zone',
  '(GMT-7.00) Mountain Time Zone',
  '(GMT-8.00) Pacific Time Zone',
  '(GMT-9.00) Alaska Time Zone',
  '(GMT-10.00) Hawaii Time Zone'
];

const formPageValue: formPageValueI = {
  jobDetails: 1,
  jobSize: 2,
  jobBudget: 3,
  jobLocation: 4,
  jobFormPreview: 5
};

// Need to remove whe api is made
const expertise: any = {
  BEGINNER: 1,
  INTERMEDIATE: 2,
  EXPERT: 3
};

export {
  jobFormsData,
  techOptions,
  jobSizeLists,
  jobDurationLists,
  jobExpertiseLevelLists,
  jobBudgetLists,
  jobLocationLists,
  timeZoneOption,
  formPageValue,
  expertise,
  note,
  learnMore
};
