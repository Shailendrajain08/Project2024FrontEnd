import * as yup from 'yup';

const clientBasicForm = yup.object().shape({
  first_name: yup
    .string()
    .required('First Name is required')
    .matches(/^[a-zA-Z]+$/, 'First Name must be alphabetic character only')
    .min(3, 'First Name must be at least 3 characters')
    .max(25, 'First Name must not more than 25 characters'),
  last_name: yup
    .string()
    .required('Last Name is required')
    .matches(/^[a-zA-Z]+$/, 'Last Name must be alphabetic character only')
    .min(3, 'Last Name must be at least 3 characters')
    .max(25, 'Last Name must not more than 25 characters'),
  email: yup
    .string()
    .required('Email is required')
    .email('Invalid Email address')
    .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Invalid Email address'),
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
    .required('Confirm Password is required')
    .oneOf([yup.ref('password'), ''], 'Passwords must match'),
  phone: yup
    .string()
    .required('Phone number is required')
    .matches(/^[0-9+]+$/, 'Phone number must numeric only')
    .min(10, 'Phone number must be at least 10 characters')
    .max(15, 'Phone number must not more than 15 characters'),
  tc: yup.boolean().test('tc', 'Required', (val) => {
    return val;
  })
});

const clientCompanyDetailsForm = yup.object().shape({
  company_name: yup
    .mixed()
    .test('company_name', 'Company name must not  more than 255 characterss', (value: any) => {
      if (!value || value?.length === 0) {
        return true;
      }
      return value.length <= 255;
    }),
  company_website: yup
    .string()
    .test('company_website', 'Invalid Company website URL', (value: any) => {
      const urlRegex =
        /^(?:http|ftp)s?:\/\/(?:(?:[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?\.)+(?:[A-Z]{2,6}\.?|[A-Z0-9-]{2,}\.?)|localhost|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})(?::\d+)?(?:\/?|[/?]\S+)$/i;
      if (!value) {
        return true;
      }
      return urlRegex.test(value);
    })
    .max(200, 'URL must be at most 200 characters long'),
  linkedin_url: yup
    .string()
    .test('linkedin_url', 'Invalid LinkedIn URL', (value: any) => {
      const urlRegex =
        /^(https?:\/\/)([a-z]{2,3}\.)?linkedin\.com\/(?:in|pub|profile)?\/[\w-]+\/?$/i;
      if (!value) {
        return true;
      }
      return urlRegex.test(value);
    })
    .max(200, 'URL must be at most 200 characters long'),
  logo: yup.mixed().test('fileSize', 'Logo size must be less than 100 KB', (value: any) => {
    if (value?.length === 0) {
      return true;
    }
    return value && value?.size <= 100 * 1024;
  })
});
const clientaddressForm = yup.object().shape({
  city: yup.mixed().test('city', 'City must not more than 100 characters', (value: any) => {
    if (!value || value?.length === 0) {
      return true;
    }
    return value?.length <= 100;
  }),
  state: yup.mixed().test('state', 'state must not more than 100 characters', (value: any) => {
    if (!value || value?.length === 0) {
      return true;
    }
    return value?.length <= 100;
  }),
  country: yup
    .mixed()
    .test('country', 'country must not more than 100 characters', (value: any) => {
      if (!value || value?.length === 0) {
        return true;
      }
      return value?.length <= 100;
    }),
  address_line_1: yup
    .mixed()
    .test('address_line_1', 'address line 1  must not more than 200 characters', (value: any) => {
      if (value?.length === 0) {
        return true;
      }
      return value?.length <= 200;
    }),
  address_line_2: yup
    .mixed()
    .test('address_line_2', 'address line 2  must not more than 200 characters', (value: any) => {
      if (value?.length === 0) {
        return true;
      }
      return value?.length <= 200;
    }),
  zip_code: yup.mixed().test('zip_code', 'Invalid Zip Code', (value: any) => {
    const urlRegex = /^[a-zA-Z0-9\- ]{1,10}$/;
    if (!value) {
      return true;
    }
    return urlRegex.test(value);
  })
});
const verification = yup.object().shape({
  verifyEmail: yup.string().required('Verfication code is required')
});

const clientDigitalPresence = yup.object().shape({
  glassdoor_url: yup
    .string()
    .test('glassdoor_url', 'Invalid Glassdoor URL', (value: any) => {
      const glassdoorUrlRegex =
        /^(https?:\/\/)(www\.)?glassdoor\.com\/(Overview\/Company\/)?[a-zA-Z0-9_-]+(\d+)/;
      if (!value) {
        return true;
      }
      return glassdoorUrlRegex.test(value);
    })
    .max(100, 'URL must be at most 100 characters long'),
  career_bliss_url: yup
    .string()
    .test('career_bliss_url', 'Invalid Careerbiss URL', (value: any) => {
      const careerBizzUrlRegex = /^https:\/\/(www\.)?careerbliss\.com\//;
      if (!value) {
        return true;
      }
      return careerBizzUrlRegex.test(value);
    })
    .max(100, 'URL must be at most 100 characters long'),
  youtube_url: yup
    .string()
    .test('youtube_url', 'Invalid Youtube URL', (value: any) => {
      const youtubeUrlRegex =
        /^(https?:\/\/)(www\.)?(youtube\.com\/(embed\/|v\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
      const youtubeChannelUrlRegex =
        /^(https?:\/\/)(www\.)?youtube\.com\/(c\/|channel\/|user\/)?([a-zA-Z0-9_-]{1,})|@/;
      if (!value) {
        return true;
      }
      return youtubeUrlRegex.test(value) || youtubeChannelUrlRegex.test(value);
    })
    .max(200, 'URL must be at most 200 characters long'),
  other_social_url: yup
    .string()
    .test('other_social_url', 'Invalid URL', (value: any) => {
      const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
      if (!value) {
        return true;
      }
      return urlRegex.test(value);
    })
    .max(200, 'URL must be at most 200 characters long')
});
const coder = {
  basicForm: yup.object().shape({
    first_name: yup
      .string()
      .required('First Name is required')
      .matches(/^[a-zA-Z]+$/, 'First Name must be alphabetic character only')
      .min(3, 'First Name must be at least 3 characters')
      .max(25, 'First Name must not more than 25 characters'),
    last_name: yup
      .string()
      .required('Last Name is required')
      .matches(/^[a-zA-Z]+$/, 'Last Name must be alphabetic character only')
      .min(3, 'Last Name must be at least 3 characters')
      .max(25, 'Last Name must not more than 25 characters'),
    email: yup
      .string()
      .required('Email is required')
      .email('Invalid Email address')
      .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Invalid Email address'),
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
      .required('Confirm Password is required')
      .oneOf([yup.ref('password'), ''], 'Passwords must match'),
    type: yup.string().required('Type is required'),
    phone: yup
      .string()
      .required('Phone number is required')
      .matches(/^[0-9+]+$/, 'Phone number must numeric only')
      .min(10, 'Phone number must be at least 10 characters')
      .max(15, 'Phone number must not more than 15 characters'),
    tc: yup.boolean().test('tc', 'Required', (val) => {
      return val;
    })
  }),
  skillsForm: yup.object().shape({
    self_details: yup.string().max(50, 'Introduction must not more than 50 characters'),
    primaryTechnology: yup.string().required('Required'),
    primaryYearOfExperience: yup.string().required('Required'),
    primaryExpertiseLevel: yup.string().required('Required'),
    total_years_of_experience: yup
      .number()
      .nullable()
      .transform((value, originalValue) => (String(originalValue).trim() === '' ? null : value))
      .required('Required')
      .test('minLength', 'Minimum Experience should be 0', (value) => value >= 0)
      .max(50, 'Hourly price should be less than or equal to 50'),
    hourlyPrice: yup
      .number()
      .nullable()
      .transform((value, originalValue) => (String(originalValue).trim() === '' ? null : value))
      .required('Required')
      .test('minLength', 'hourly Price should be greater than 5', (value) => value >= 5)
      .max(999, 'Hourly price should be less than or equal to 999'),
    work_experience: yup
      .string()
      .required('Required')
      .max(100, 'Work Experience must not more than 100 characters'),
    roles: yup.string().required('Required').max(50, 'Data must not more than 50 characters'),
    otherSkills: yup.array().of(
      yup.object().shape({
        technology: yup.string(),
        tech_experience: yup.string(),
        expertise: yup.string()
      })
    )
  }),
  educationCertificationForm: yup.object().shape({
    education: yup.array().of(
      yup.object().shape({
        university: yup.string().required('Required'),
        college: yup.string().required('Required'),
        passing_year: yup.string().required('Required'),
        degree: yup.string().required('Required')
      })
    ),
    certificate: yup.array().of(
      yup.object().shape({
        certificate_name: yup.string().required('Required'),
        year_of_completion: yup.number().required('Required')
      })
    )
  }),
  addressForm: yup.object().shape({
    city: yup
      .string()
      .required('City is Required')
      .max(100, 'City must not more than 100 characters'),
    state: yup
      .string()
      .required('State is Required')
      .max(100, 'State  must not more than 100 characters'),
    country: yup
      .string()
      .required('Country is Required')
      .max(100, 'Country must not more than 100 characters'),
    address_line_1: yup
      .string()
      .required('Address line 1 required')
      .max(200, 'Address 1 must not more than 200 characters'),
    address_line_2: yup
      .mixed()
      .test('address_line_2', 'address line 2  must not more than 200 characters', (value: any) => {
        if (value?.length === 0) {
          return true;
        }
        return value?.length <= 200;
      }),
    zip_code: yup
      .string()
      .required('Zipcode is required')
      .matches(/^[a-zA-Z0-9\- ]{1,10}$/, 'Invalid Zip Code')
      .max(10, 'zip code must not be more then 10 character')
  }),
  digitalForm: yup.object().shape({
    linkedin_url: yup
      .string()
      .required('LinkedIn Profile URL is required')
      .matches(
        /^(https?:\/\/)([a-z]{2,3}\.)?linkedin\.com\/(?:in|pub|profile)?\/[\w-]+\/?$/i,
        'Invalid Profile LinkedIn URL'
      )
      .max(200, 'URL must be at most 200 characters long'),
    github_url: yup
      .string()
      .required('Github Profile URL is required')
      .matches(
        /^(https?:\/\/)(www\.)?github\.com\/[a-zA-Z0-9_-]+\/?$/,
        'Invalid Github Profile URL'
      )
      .max(200, 'URL must be at most 200 characters long'),
    stackoverflow_url: yup
      .string()
      .required('Stackoverflow Profile URL is required')
      .matches(
        /^(https?:\/\/)(www\.)?(meta\.)?stackoverflow\.com\/users\/\d+\/[\w-]+$/,
        'Invalid Stackoverflow Profile URL'
      )
      .max(200, 'URL must be at most 200 characters long')
  })
};

export {
  clientBasicForm,
  verification,
  coder,
  clientCompanyDetailsForm,
  clientDigitalPresence,
  clientaddressForm
};
