import { useForm, Controller } from 'react-hook-form';
import { Button, Box, Typography } from '@mui/material';
import { Input } from '../../../../Common';
import { yupResolver } from '@hookform/resolvers/yup';
import { clientCompanyDetailsForm } from '../../../validationSchema';
import { FromPropsI } from '../../../type';
import './index.css';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { companyDetails, updateCompanyDetails } from '../../../../../store/actions/register';
import SnackBarComponent from '../../../../Common/SnackBar';
import FileUpload from '../../../../Common/Input/FileUpload';

const CompantDetailsForm = ({ setFormType }: FromPropsI) => {
  const dispatch = useDispatch();
  const companyDetailsData = useSelector((state: any) => state?.companydetailsReducers);
  const Logo = companyDetailsData?.companydetails?.logo;

  const {
    register,
    handleSubmit,
    control,
    getValues,
    setValue,
    clearErrors,
    formState: { errors, dirtyFields }
  } = useForm({
    resolver: yupResolver(clientCompanyDetailsForm),
    defaultValues: {
      company_name: companyDetailsData?.companydetails?.company_name
        ? companyDetailsData?.companydetails?.company_name
        : '',
      company_website: companyDetailsData?.companydetails?.company_website
        ? companyDetailsData?.companydetails?.company_website
        : '',
      linkedin_url: companyDetailsData?.companydetails?.linkedin_url
        ? companyDetailsData?.companydetails?.linkedin_url
        : '',
      logo: Logo ? Logo : []
    }
  });
  const [logoSelect, setLogoSelect] = useState(false);
  const [showMessages, setShowMessages] = useState({
    showSnackBar: false,
    snackBarMessage: '',
    messageType: ''
  });
  const userId = companyDetailsData?.companydetails?.id;
  useEffect(() => {
    if (companyDetailsData?.companydetailsStatus) {
      setFormType('address');
    } else {
      if (companyDetailsData?.error) {
        setShowMessages((prev) => ({
          ...prev,
          showSnackBar: true,
          snackBarMessage: companyDetailsData?.error,
          messageType: 'error'
        }));
      }
    }
  }, [companyDetailsData, setFormType]);

  const handleCompanyForm = (data: any, e: any) => {
    e && e.preventDefault();
    if (showMessages.showSnackBar) {
      setShowMessages((prev) => ({
        ...prev,
        showSnackBar: false,
        snackBarMessage: '',
        messageType: ''
      }));
    }
    const formData = new FormData();
    formData.append('company_name', data.company_name);
    formData.append('company_website', data.company_website);
    formData.append('linkedin_url', data.linkedin_url);
    formData.append('logo', data?.logo ? data?.logo : []);
    if (companyDetailsData?.companydetails?.company_name?.length > 0) {
      if (
        dirtyFields.company_name ||
        dirtyFields.company_website ||
        dirtyFields.linkedin_url ||
        logoSelect
      ) {
        dispatch(updateCompanyDetails(formData, userId));
      } else {
        setFormType('address');
      }
    } else {
      dispatch(companyDetails(formData));
    }
  };

  return (
    <Box>
      <form className="client-company--form-container" onSubmit={handleSubmit(handleCompanyForm)}>
        <Box className="company-details-form--wrapper">
          <Box className="company-details-form-heading">
            <Typography variant="h1" align="left">
              Company details
            </Typography>
          </Box>
          <Box className="form-field-wrapper">
            <Input
              type="text"
              id="company_name"
              name="company_name"
              label="Company Name"
              register={register}
              error={errors}
            />

            <Box>
              <Input
                type="text"
                id="company_website"
                name="company_website"
                label="Company Website"
                register={register}
                error={errors}
              />
            </Box>
            <Box>
              <Input
                type="text"
                id="linkedin_url"
                name="linkedin_url"
                label="linkedIn URL"
                register={register}
                error={errors}
              />
            </Box>
            <Box className="logo-select-wrapper">
              <FileUpload
                register={register}
                name="logo"
                label="Logo"
                setValue={setValue}
                Controller={Controller}
                accept="image/*"
                control={control}
                imageUrls={Logo}
                error={errors}
                isMultipleFile={false}
                clearErrors={clearErrors}
                setLogoSelect={setLogoSelect}
                getValues={getValues}>
                <Box className="attach-btn-wrapper">
                  <Button component="span" className="attach-file-btn">
                    Choose file
                  </Button>
                </Box>
              </FileUpload>
            </Box>
          </Box>
          <Box className="company-btn-wrapper">
            <Box>
              <Button
                type="submit"
                size="medium"
                className="skip-btn"
                onClick={() => {
                  setFormType('address');
                }}>
                Skip
              </Button>
            </Box>
            <Box className="handle-btn">
              {/* <Button
                size="large"
                variant="outlined"
                onClick={() => {
                  setFormType('basicForm');
                }}>
                Back
              </Button> */}

              <Button type="submit" size="large" variant="contained">
                Next
              </Button>
            </Box>
          </Box>
        </Box>
      </form>

      <Box>
        {showMessages.showSnackBar && (
          <SnackBarComponent
            isOpen={showMessages.showSnackBar}
            isClose={(prev: any) => ({
              ...prev,
              showSnackBar: false
            })}
            message={showMessages.snackBarMessage}
            messageType={showMessages.messageType}
          />
        )}
      </Box>
    </Box>
  );
};

export default CompantDetailsForm;
