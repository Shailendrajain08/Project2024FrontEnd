import * as yup from 'yup';

const numberRegex = /^[+-]?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/;

const priceRegex = /^[1-9]\d*(\.\d+)?$/;

export const jobSchema = yup.object().shape({
  jopPostHeadline: yup.string().required('Job post headline is required'),
  technicalSkills: yup
    .array()
    .min(1, 'At least one skill is required')
    .required('At least one skill is required'),
  jobDescription: yup.string().max(5000, '**Maximum Character limit is 5000.')
});
export const jobPostBudgetSchema = yup.object().shape({
  jobBudget: yup.string().required(),
  fixedCurrency: yup.mixed().test('jobBudget', function (value: any) {
    const status = this.parent.jobBudget;
    if (status === 'fixedPrice') {
      return priceRegex.test(value)
        ? true
        : this.createError({ message: 'Enter your work budget per hour' });
    }
    return true;
  }),
  hourlyMinimumPrice: yup.mixed().test('jobBudget', function (value: any) {
    const status = this.parent.jobBudget.toLowerCase();
    if (status === 'hourly') {
      return priceRegex.test(value)
        ? true // Valid condition
        : this.createError({
            message: 'Enter your minimum work budget per hour'
          });
    }

    return true;
  }),
  hourlyMaximumPrice: yup.mixed().test('jobBudget', function (value: any) {
    const status = this.parent.jobBudget.toLowerCase();
    if (status === 'hourly') {
      return priceRegex.test(value)
        ? true // Valid condition
        : this.createError({
            message: 'Enter your maximum work budget per hour'
          });
    }
    return true;
  })
});
export const jobPostLocationSchema = yup.object().shape({
  jobLocation: yup.string().required(),
  jobTimezone: yup
    .array()
    .min(1, 'At least one Timezone is required')
    .required('At least one Timezone is required')
});
