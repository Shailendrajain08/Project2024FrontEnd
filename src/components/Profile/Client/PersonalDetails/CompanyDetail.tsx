import { useForm } from 'react-hook-form';
import { Typography, Box, TextField, Button } from '@mui/material';
import { ICompanyDetail } from '../type';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { companyDetailAction } from '../../../../store/actions/companyDetail';
import { useSelector } from 'react-redux';

const CompanyDetail = ({ company_name, company_website, edit, handleEdit }: ICompanyDetail) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const companyDetailReducer = useSelector((state: any) => state.companydetailsReducers);
  const [companyDetailData, setCompanyDetailData] = useState<any>({});

  // useEffect(()=>{
  //   if(companyDetailReducer?.companydetails && companyDetailReducer?.companydetails?.results && companyDetailReducer?.companydetails?.results.length>0){
  //     setCompanyDetailData(companyDetailReducer?.companydetails?.results[0])
  //   }
  // },[companyDetailReducer])

  // useEffect(()=>{
  //   dispatch(companyDetailAction())
  // },[])

  const handleCompanyDetail = (data: any) => {
    handleEdit('companyDetail');
  };
  return (
    <Box className="Company-detail--basic-form">
      <Box className="Company-detail--basic-form-heading">
        <Typography variant="h3" className="company-detail-title">
          Company details
        </Typography>
      </Box>
      <Box className="Company-detail--basicInfo">
        {edit.isEdit ? (
          <Box className="Company-detail--basicInfo-form">
            <form onSubmit={handleSubmit(handleCompanyDetail)}>
              <Box className="Company--basicInfo-other-field">
                <TextField
                  type="email"
                  id="companyEmail"
                  label="Company Name"
                  defaultValue={company_name}
                  {...register('companyEmail')}
                />
                <TextField
                  type="text"
                  id="companyWebsite"
                  label="Company Website"
                  defaultValue={company_website}
                  {...register('companyWebsite')}
                />
              </Box>
              <Box className="company-detail-btn-wrapper">
                <Button variant="outlined" className="profile-btn" size="large">
                  Cancel
                </Button>

                <Button variant="contained" className="profile-btn" size="large">
                  Update
                </Button>
              </Box>
            </form>
          </Box>
        ) : (
          <Box className="Company-detail--basicInfo-form">
            <Box className="Company--basicInfo-other-field">
              <TextField
                type="email"
                id="companyEmail"
                label="Company Name"
                defaultValue={company_name}
                value={company_name}
                {...register('companyEmail')}
                disabled
              />
              <TextField
                type="companyWebsite"
                id="companyWebsite"
                label="Company Website"
                defaultValue={company_website}
                value={company_website}
                {...register('companyWebsite')}
                disabled
              />
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default CompanyDetail;
