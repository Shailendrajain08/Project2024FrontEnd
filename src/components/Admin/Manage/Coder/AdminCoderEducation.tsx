import { Box, Divider, Typography, Button } from '@mui/material';
import '../../../../components/Profile/Coder/index.css';

import FileOpenOutlinedIcon from '@mui/icons-material/FileOpenOutlined';
import { useEffect, useState } from 'react';

import AdminCoderAddressDetail from './AdminCoderAdress';
import { GitHubSvg, LinkedInSvg, StackOverFlowSvg } from '../../../../assets/svg';
import { ICoderData } from '../../type';

interface EducationDetailsProps {
  selectedRow: ICoderData;
}

const AdminCoderEducationDetails = ({ selectedRow }: EducationDetailsProps) => {
  const [data, setData] = useState<ICoderData>();
  useEffect(() => {
    setData(selectedRow);
  }, [selectedRow]);
  if (!data) return null;
  return (
    <Box className="admin-coder-profile--education-container">
      <Divider className="admin-seprater" />
      <Box pb={'24px'} p={'0px 24px'}>
        {' '}
        <Box className="coder-profile--degree">
          <Typography variant="subtitle1" color={'rgba(0, 0, 0, 0.87)'} fontWeight={'500'}>
            Degree
          </Typography>
          {data.educationDetails &&
            data.educationDetails.degree.map((item, id) => {
              return (
                <Box key={id} className="degree-wrapper">
                  <Box className="degree-section">
                    <Typography
                      variant="subtitle2"
                      color={
                        'rgba(0, 0, 0, 0.87)'
                      }>{`${item.degree} - ${item.passing_year}`}</Typography>
                    <Typography
                      variant="body2"
                      color={
                        'rgba(0, 0, 0, 0.60)'
                      }>{`${item.university}, ${item.location}`}</Typography>
                  </Box>
                </Box>
              );
            })}
        </Box>
        <Box pb={'24px'} className="coder-profile--certification">
          <Typography variant="subtitle1" fontWeight={'500'} color={'rgba(0, 0, 0, 0.87)'}>
            Certifications
          </Typography>
          {data?.educationDetails &&
            data?.educationDetails?.certification.map((item, id) => {
              return (
                <Box key={id} className="certification-wrapper">
                  <Box className="certification-section">
                    <Typography
                      variant="subtitle2"
                      color={'rgba(0, 0, 0, 0.87)'}>{`${item.certification}`}</Typography>
                    <Typography
                      variant="body2"
                      color={'rgba(0, 0, 0, 0.60)'}>{`${item.passing_year}`}</Typography>
                  </Box>
                </Box>
              );
            })}
        </Box>
      </Box>

      <Divider className="admin-seprater" />
      <Box p={'0px 24px'}>
        <AdminCoderAddressDetail data={data} />
      </Box>
      <Divider className="admin-seprater" />
      <Box className="coder-admin-social-digital-presence">
        <Typography variant="subtitle1">Social Digital Presence</Typography>
        <Box
          className="social-button-grp-container"
          display={'flex'}
          columnGap={'24px'}
          marginTop={'16px'}>
          <Button
            variant="outlined"
            className="social-buttons"
            size="medium"
            onClick={() => console.log('clicked')}
            startIcon={<LinkedInSvg />}>
            <Typography variant="subtitle1" color={'#2563EB'}>
              LinkedIn
            </Typography>
          </Button>

          <Button
            className="social-buttons"
            variant="outlined"
            size="medium"
            onClick={() => console.log('clicked')}
            startIcon={<GitHubSvg />}>
            <Typography variant="subtitle1" color={'rgba(0, 0, 0, 0.87)'}>
              Github
            </Typography>
          </Button>

          <Button
            className="social-buttons"
            variant="outlined"
            size="large"
            onClick={() => console.log('clicked')}
            startIcon={<StackOverFlowSvg />}>
            <Typography variant="subtitle1" color={'#F7790B'}>
              StackOverflow
            </Typography>
          </Button>
        </Box>
      </Box>
      <Divider className="admin-seprater" />
      <Box p={'0px 24px'} className="coder-profile--certification">
        <Typography variant="subtitle1" fontWeight={'500'} color={'rgba(0, 0, 0, 0.87)'}>
          Employment
        </Typography>
        <Box className="certification-wrapper">
          <Box className="certification-section">
            <Typography variant="subtitle2" color={'rgba(0, 0, 0, 0.87)'}>
              {'HireCoder (Senior Software Engineer)'}
            </Typography>
            <Typography variant="body2" color={'rgba(0, 0, 0, 0.60)'}>
              {'May 04, 2023-May 11, 2025'}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Divider className="admin-seprater-end" />

      <Box className="admin-coder-profile--file-wrapper">
        <Box className="file--section">
          <Typography variant="subtitle1" fontWeight={'500'}>
            Files
          </Typography>
          <Box className="file--open-icon">
            <Box className="file--icon">
              <FileOpenOutlinedIcon />
            </Box>
            <Typography variant="subtitle2">Resume</Typography>
          </Box>
        </Box>
        <Box className="coder--portfolio-section">
          <Typography variant="subtitle1" fontWeight={'500'}>
            Portfolio
          </Typography>
          {data?.educationDetails &&
            data?.educationDetails?.portfolioone.map((item, id) => {
              return (
                <Box key={id} className="portfolio--wrapper">
                  <img src={item.image} alt="image" />
                  <Box className="portfolio--label-section">
                    <Typography variant="body1">{item.host_url}</Typography>
                    <Typography variant="body2" className="portfolio--desc">
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
        </Box>
        <Box className="coder--portfolio-section">
          <Typography variant="subtitle1" fontWeight={'500'}>
            Portfolio
          </Typography>
          {data?.educationDetails &&
            data?.educationDetails?.portfoliotwo.map((item, id) => {
              return (
                <Box key={id} className="portfolio--wrapper">
                  <img src={item.image} alt="image" />
                  <Box className="portfolio--label-section">
                    <Typography variant="body1">{item.host_url}</Typography>
                    <Typography variant="body2" className="portfolio--desc">
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
        </Box>
      </Box>
      <Divider />
    </Box>
  );
};

export default AdminCoderEducationDetails;
