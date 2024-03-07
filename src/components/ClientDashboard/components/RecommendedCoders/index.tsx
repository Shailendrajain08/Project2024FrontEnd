import React, { Fragment } from 'react';
import { Box, Button } from '@mui/material';
import CoderCard from '../../shared/CoderCard';
import './index.css';
import { ArrowForwardSvg } from '../../../../assets/svg';

const RecommendedCoders: React.FC<any> = ({ recommendedCoder = [] }) => {
  return (
    <Fragment>
      <Box className="recommended-coder-box">
        {recommendedCoder.map((coder: any) => {
          return (
            <Box key={coder.id}>
              {' '}
              <CoderCard {...coder} />{' '}
            </Box>
          );
        })}
      </Box>
      <Box textAlign="end" className="view-all-btn-box">
        <Button variant="text" size="small" color="primary">
          View All
          <ArrowForwardSvg />
        </Button>
      </Box>
    </Fragment>
  );
};

export default RecommendedCoders;
