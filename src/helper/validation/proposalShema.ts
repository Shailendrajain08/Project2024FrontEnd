import * as yup from 'yup';

export const proposalHourlySchema = yup.object().shape({
  proposalDetail: yup
    .string()
    .required('Proposal data is required')
    .max(5000, 'Proposal not exceeds 5000 character'),
  proposalFiles: yup.array().of(
    yup
      .mixed()
      .test('fileSize', 'File size is too large, please upload less than 25MB', (value: any) => {
        if (!value) return true;
        const maxFileSize = 25 * 1024 * 1024;
        return value.size <= maxFileSize;
      })
  ),
  hourlyRate: yup
    .number()
    .transform((value) => (isNaN(value) ? undefined : value))
    .required('Please enter your hourly rate')
    .positive('Value must be a positive number')
    .test('isValidNumber', 'Please enter a valid hourly rate', (value) => !isNaN(value))
    .test(
      'rangeWarning',
      'Value should be between $(0 - 999)',
      (value) => value === undefined || (value >= 0 && value <= 999)
    ),

  totalWorkHours: yup
    .number()
    .transform((value) => (isNaN(value) ? undefined : value))
    .required('Please enter your hours per week')
    .positive('Value must be a positive number')
    .test('isValidNumber', 'Please enter a valid hourly rate', (value) => !isNaN(value))
    .test(
      'rangeWarning',
      'Value should be between 0 - 100',
      (value) => value === undefined || (value >= 0 && value <= 100)
    )
});

export const proposalFixedSchema = yup.object().shape({
  proposalDetail: yup
    .string()
    .required('Proposal data is required')
    .max(5000, 'Proposal not exceeds 5000 character'),
  proposalFiles: yup.array().of(
    yup
      .mixed()
      .test('fileSize', 'File size is too large, please upload less than 25MB', (value: any) => {
        if (!value) return true;
        const maxFileSize = 25 * 1024 * 1024;
        return value.size <= maxFileSize;
      })
  ),
  milestone0: yup.string().required('Milestone is required'),
  description0: yup
    .string()
    .required('Description is required')
    .max(100, 'Description not exceeds 100 character'),
  time0: yup.string().required('Time is required').matches(/^\d/, 'Invalid time'),
  fundsReleased0: yup.string().required('Fund is required').matches(/^\d/, 'Invalid Fund')
});
