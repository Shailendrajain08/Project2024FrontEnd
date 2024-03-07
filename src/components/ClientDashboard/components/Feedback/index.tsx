import React, { useState } from 'react';
import { Box, Rating, TextField, Typography, Button } from '@mui/material';
import './index.css';

const SubmitFeedback: React.FC<any> = ({
  handleClose,
  profile,
  first_name,
  last_name,
  identity
}) => {
  const [ratingValue, setRatingValue] = useState(null);
  const [message, setMessage] = useState('');

  const handleRatingChange = (event: React.SyntheticEvent, newValue: any) => {
    setRatingValue(newValue);
  };

  const handleCommentChange = (e: any) => {
    setMessage(e.target.value);
  };

  const handleSubmit = () => {
    const payload = {
      rating: ratingValue,
      message: message
    };
  };

  return (
    <Box mt={3}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={5}>
        <Box className="feedback--user-box">
          <Box>
            <img src={profile} alt="profile-pic" />
          </Box>
          <Box>
            <Typography variant="body2">{`${first_name} ${last_name}`}</Typography>
            <Typography variant="caption">{identity}</Typography>
          </Box>
        </Box>
        <Box className="feedback--rating-box">
          <Rating name="rating" value={ratingValue} onChange={handleRatingChange} precision={0.5} />
        </Box>
      </Box>
      <Box mb={4}>
        <TextField
          id="feedback-message"
          label="Message"
          multiline
          fullWidth
          rows={2}
          value={message}
          onChange={handleCommentChange}
        />
      </Box>
      <Box display="flex" columnGap={2}>
        <Button variant="contained" className="feedback--submit-btn" onClick={handleSubmit}>
          Submit
        </Button>
        <Button variant="outlined" className="feedback--cancel-btn" onClick={handleClose}>
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

export default SubmitFeedback;
