import * as yup from 'yup';

const phoneSchema = yup
  .string()
  .matches(/^(?:\+?[0-9]{1,4}\s?)?(?:\([0-9]{1,}\)\s?)?[0-9-]+\d$/, 'Invalid phone number');

// Example usage:
const phoneNumber = '+1 (123) 456-7890';

phoneSchema
  .validate(phoneNumber)
  .then((valid) => console.log('Valid phone number:', valid))
  .catch((error) => console.error('Validation error:', error.message));
