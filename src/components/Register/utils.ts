import { FromDataI, DigitalDataI, CoderFromDataI, CoderDigitalDataI } from './type';

const coderPayload = (
  formData: CoderFromDataI,
  formType: string,
  digitalData: CoderDigitalDataI,
  payload: FormData
) => {
  payload.append('first_name', formData.first_name);
  payload.append('middle_name', 'Test');
  payload.append('last_name', formData.last_name);
  payload.append('email', formData.email);
  payload.append('username', formData.username);
  payload.append('password1', formData.password);
  payload.append('password2', formData.password);
  payload.append('phone', formData.phone);
  payload.append('type', formData.type);
  payload.append('role', formType);

  payload.append('introduction', formData.self_details);

  payload.append(`skill[0]technology`, formData?.primaryTechnology);
  payload.append(`skill[0]tech_experience`, formData?.primaryYearOfExperience);
  payload.append(`skill[0]expertise`, formData?.primaryExpertiseLevel);
  const skillData = [];
  skillData.push({
    technology: formData?.primaryTechnology,
    tech_experience: formData?.primaryYearOfExperience,
    expertise: formData?.primaryExpertiseLevel
  });
  payload.append('total_experience_year', formData.total_years_of_experience);
  payload.append('job_role', formData.roles);
  payload.append('brief_experience', formData.work_experience);

  formData?.education.forEach(function (element: any, index: number) {
    payload.append(`education[${index}]university`, element.university);
    payload.append(`education[${index}]passing_year`, element.passing_year);
    payload.append(`education[${index}]degree`, element.degree);
  });
  formData?.certificate.forEach(function (element: any, index: number) {
    payload.append(`certificate[${index}]certificate_name`, element.certificate_name);
    payload.append(`certificate[${index}]certificate_url`, element.certificate_url);
    payload.append(`certificate[${index}]year_of_completion`, element.year_of_completion);
  });

  payload.append('address_line_1', formData.addressLine1);
  payload.append('address_line_2', formData.addressLine1);
  payload.append('country', formData.country);
  payload.append('city', formData.city);
  payload.append('state', formData.state);
  payload.append('zip_code', formData.zipcode);

  payload.append('linkedin_url', digitalData.linkedIn);
  payload.append('github_url', digitalData.github);
  payload.append('stackoverflow_url', digitalData.stackoverflow);
  payload.append('profile_doc', digitalData.profile_doc[0]);
  payload.append('profile_pic', digitalData.profile_pic[0]);
  return payload;
};

const clientPayload = (data: any, role: string) => {
  const payload = {
    first_name: data.first_name,
    last_name: data.last_name,
    email: data.email,
    phone: data.phone,
    password: data.password,
    confirm_password: data.confirm_password,
    role: role,
    tc: data.termsandconditions,
    agency: null
  };
  return payload;
};

const clientCompanyPayload = (data: any) => {
  const payload = {
    company_name: data.company_name,
    company_website: data.company_website,
    linkedin_url: data.linkedin_url,
    logo: null
  };
  return payload;
};

export { clientPayload, coderPayload, clientCompanyPayload };
