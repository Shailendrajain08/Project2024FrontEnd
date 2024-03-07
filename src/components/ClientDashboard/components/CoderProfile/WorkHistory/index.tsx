import React from 'react';
import './index.css';
import { completedJobs } from '../../../constant';
import { Box, Typography } from '@mui/material';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';

const WorkHistory: React.FC = () => {
  return (
    <>
      {completedJobs.map((item: any, i: number) => {
        return (
          <Box className="jobs-section" key={i}>
            <Box className="jobs">
              <Typography variant="body1">{item.title}</Typography>
              <Typography variant="body2" color={'rgba(0, 0, 0, 0.38)'}>
                {item.feedback}
              </Typography>
              <Box className="skills">
                {item.skills.map((s: any, i: number) => {
                  return (
                    <Box component={'span'} key={i} className="chip">
                      {s}
                    </Box>
                  );
                })}
              </Box>
              <Box className="rating-bar">
                <Box component={'span'} className="rating">
                  <StarOutlinedIcon className="icon-star" />
                  <Typography variant="subtitle2">{item.rating} </Typography>
                </Box>
                <Typography variant="subtitle2" className="rating-bar-text">
                  {item.start_date} - {item.end_date}
                </Typography>
              </Box>
              <Box className="price-bar">
                <Typography variant="body2">${item.earnings}</Typography>
                <Typography variant="body2">${item.rate}</Typography>
                <Typography variant="body2">{item.time}</Typography>
              </Box>
            </Box>
          </Box>
        );
      })}
    </>
  );
};

export default WorkHistory;
