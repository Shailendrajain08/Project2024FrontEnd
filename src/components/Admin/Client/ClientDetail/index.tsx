import React from 'react';
import { Box, Typography, Button, Avatar, Link, Badge } from '@mui/material';
import { clientPaymentData } from '../ClientTableSection/types';
import { IClientMockData } from '../ClientTableSection/types';
import { clientMockData } from '../ClientTableSection/types';
import { CareerBlissSvg } from '../../../../assets/svg';
import { GlassdoorLogo } from '../../../../assets/svg/GlassdoorLogo';
import { YoutubeLogo } from '../../../../assets/svg/YoutubeLogo';
import { PdfLogo } from '../../../../assets/svg/PdfLogo';
import './index.css';
import ClientTab from '../ClientTab';
import constant from '../../../../constants/constant.json';

interface ClientDetailsProps {
  client: IClientMockData;
}
const paymentDetailObj = [
  { key: 'card_number', label: 'Card Number' },
  { key: 'first_name', label: 'First Name' },
  { key: 'last_name', label: 'Last Name' },
  { key: 'card_expiry_date', label: 'Expires On' }
];

const addressDetailObj = [
  { key: 'country', label: 'Country' },
  { key: 'state', label: 'State' },
  { key: 'city', label: 'City' },
  { key: 'zipcode', label: 'Zip Code' }
];

const IndividualClientDetail: React.FC<ClientDetailsProps> = ({ client }) => {
  const handleButtonClick = (url: any) => {
    window.open(url, '_blank');
  };
  const username = client?.email?.split('@')[0];
  const newUserName = `@${username}`;
  return (
    <>
      <Box className="admin--ind-client-box" width={'100%'}>
        <Box className="indClient-details-sub-containers">
          <Box className="indClient-details-client-initials">
            <Box display={'flex'} alignItems={'center'}>
              <Box display={'flex'} alignItems={'center'} columnGap={'16px'} marginRight={'6px'}>
                <Badge
                  className="client-avatar--badge"
                  color="primary"
                  overlap="circular"
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right'
                  }}
                  variant="dot">
                  <Avatar className="indClient--avatar-pic" src="" />
                </Badge>

                <Typography variant="h2">
                  {client.first_name} {client.last_name}
                </Typography>
              </Box>

              <Typography variant="body1" className="indClient-desc--text">
                {newUserName}
              </Typography>
            </Box>
            <Box>
              <Button className="client--edit-profile-button" size="large" variant="outlined">
                {constant.buttonTexts.editProfile}
              </Button>
            </Box>
          </Box>
          <Box display={'flex'} justifyContent={'space-between'} width={'100%'}>
            <Box className="indClient-details-heading-content">
              <Box display={'flex'}>
                <Typography variant="subtitle1">Email Address </Typography>
                <Typography className="indClient--verified-text" variant="subtitle1">
                  &nbsp;(Verified)*
                </Typography>
              </Box>

              <Typography variant="body1" className="indClient-desc--text">
                {client.email}
              </Typography>
            </Box>
            <Box className="indClient-details-heading-content">
              <Typography variant="subtitle1">Phone Number (With Country Code)</Typography>
              <Typography variant="body1" className="indClient-desc--text">
                {client.phone}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box className="indClient-details-sub-containers">
          <Typography variant="subtitle1">Company Details</Typography>
          <Box className="indClient-details-company--details">
            <Typography variant="subtitle2">{client.company_name}</Typography>
            <Typography className="indClient-desc--text" variant="body2">
              {client.company_website}
            </Typography>
          </Box>
        </Box>

        <Box className="indClient-details-sub-containers">
          <Typography variant="subtitle1">{constant.addressDetails.address}</Typography>
          <Box display={'flex'} marginTop={'16px'} columnGap={'148px'}>
            <Box className="indClient-details-heading-content">
              <Typography variant="subtitle2">{constant.addressDetails.addressLine1}</Typography>
              <Typography className="indClient-desc--text" variant="body2">
                {client.first_name} {client.last_name}
              </Typography>
            </Box>
            <Box className="indClient-details-heading-content">
              <Typography variant="subtitle2">{constant.addressDetails.addressLine2}</Typography>
              <Typography className="indClient-desc--text" variant="body2">
                {client.address}
              </Typography>
            </Box>
          </Box>

          <Box className="indClient-details--address-details">
            {addressDetailObj.map((detail: any, index: number) => (
              <Box key={Math.random()}>
                <Box className="indClient-details-heading-content">
                  <Typography variant="subtitle2">{detail.label}</Typography>
                  <Typography className="indClient-desc--text" variant="body2">
                    {clientMockData[0][detail.key]}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        <Box className="indClient-details-sub-containers">
          <Typography variant="subtitle1">Social Digital Presence</Typography>
          <Box display={'flex'} columnGap={'24px'} marginTop={'16px'}>
            <Button
              className="indClient-details--social-buttons glassdoor-icon--button"
              variant="outlined"
              size="medium"
              onClick={() => handleButtonClick('https://www.glassdoor.com')}
              startIcon={<GlassdoorLogo />}>
              {constant.socialMedias.glassdoor}
            </Button>

            <Button
              className="indClient-details--social-buttons careerbliss-icon--button"
              variant="outlined"
              size="medium"
              onClick={() => handleButtonClick('https://www.careerbliss.com')}
              startIcon={<CareerBlissSvg />}>
              {constant.socialMedias.careerBliss}
            </Button>

            <Button
              className="indClient-details--social-buttons youtube-icon--button"
              variant="outlined"
              size="large"
              onClick={() => handleButtonClick('https://www.youtube.com')}
              startIcon={<YoutubeLogo />}>
              {constant.socialMedias.youTube}
            </Button>
          </Box>
        </Box>

        <Box className="indClient-details-sub-containers">
          <Typography variant="subtitle1">{constant.paymentDetails.payment}</Typography>

          <Box display={'flex'} width={'100%'} flexDirection={'column'}>
            <Box
              display={'flex'}
              flexDirection={'row'}
              justifyContent={'space-between'}
              marginTop={'16px'}>
              {paymentDetailObj.map((detail: any, index: number) => (
                <Box key={Math.random()}>
                  <Box className="indClient-details-heading-content">
                    <Typography variant="subtitle2">{detail.label}</Typography>
                    <Typography className="indClient-desc--text" variant="body2">
                      {clientPaymentData[detail.key]}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>

            <Box display={'flex'} columnGap={'94px'} marginTop={'16px'}>
              <Box className="indClient-details-heading-content">
                <Typography variant="subtitle2">{constant.paymentDetails.uniqueId}</Typography>
                <Box className="indClient-details-doc-container">
                  <Box marginTop={'6px'}>
                    <PdfLogo />
                  </Box>

                  <Box display={'flex'} flexDirection={'column'} alignItems={'flex-start'}>
                    <Typography variant="body2">{constant.paymentDetails.aadhar}</Typography>
                    <Typography className="indClient-desc--text" variant="caption">
                      {constant.paymentDetails.fileSize}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box className="indClient-details-heading-content">
                <Typography variant="subtitle2">{constant.paymentDetails.taxId}</Typography>
                <Typography className="indClient-desc--text" variant="body2">
                  {clientPaymentData.tax_id}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <ClientTab />
    </>
  );
};

export default IndividualClientDetail;
