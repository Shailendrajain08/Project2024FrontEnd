import * as yup from 'yup';

const newPasswordConfirm = yup.object().shape({
  password: yup
    .string()
    .required('Password is required')
    .matches(
      /^(?=.*[a-zA-Z0-9])(?=.*[!@#$%^&*_-])[a-zA-Z0-9!@#$%^&*_-]+$/,
      'The password must be alphanumeric and special characters'
    )
    .min(8, 'Password must be at least 8 characters')
    .max(25, 'Password must not more than 25 characters'),
  confirm_password: yup
    .string()
    .required('Password is required')
    .matches(
      /^(?=.*[a-zA-Z0-9])(?=.*[!@#$%^&*_-])[a-zA-Z0-9!@#$%^&*_-]+$/,
      'The password must be alphanumeric and special characters'
    )
    .min(8, 'Password must be at least 8 characters')
    .max(25, 'Password must not more than 25 characters')
});

export { newPasswordConfirm };
