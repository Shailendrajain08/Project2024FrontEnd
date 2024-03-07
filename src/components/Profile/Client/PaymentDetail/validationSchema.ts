import * as yup from 'yup';
// Define your validation schema using yup
const CardValidation = yup.object().shape({
  cardNumber: yup.string().required('Card number is required')
  // Add other validations as needed
});

export { CardValidation };
