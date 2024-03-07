import { useState } from 'react';
import { Grid, Rating, TextField, Typography, CardMedia } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

interface IFeedbackCard {
  profilePic: string;
  name: string;
  callBackFnc: (id: number, value: any, type: string) => void;
  rating: number;
  feedbackComment: string;
  id: number;
}

const FeedbackCard = ({
  profilePic = '',
  name,
  callBackFnc,
  rating,
  feedbackComment,
  id
}: IFeedbackCard) => {
  const [ratingValue, setRatingValue] = useState(rating);
  const [comment, setComment] = useState('');

  const handleRatingChange = (event: React.SyntheticEvent, newValue: any) => {
    setRatingValue(newValue);
    if (callBackFnc) callBackFnc(id, newValue, 'rating');
  };
  const handleCommentChange = (e: any) => {
    setComment(e.target.value);
    if (callBackFnc) callBackFnc(id, e.target.value, 'feedbackComment');
  };
  return (
    <Grid
      container
      alignItems={'center'}
      justifyContent={'center'}
      paddingBottom={1}
      paddingTop={1}
      sx={{ borderBottom: '1px solid #ccc' }}>
      <Grid item xs={10} md={2} textAlign={'center'}>
        {profilePic ? (
          <CardMedia component="img" height="194" image={profilePic} alt="profile pic" />
        ) : (
          <AccountCircleIcon sx={{ width: 100, height: 100, textAlign: 'center' }} />
        )}
        <Typography textAlign={'center'}>{name}</Typography>
      </Grid>
      <Grid item xs={10} md={5} textAlign={'center'}>
        <Rating
          name="rating"
          value={ratingValue}
          onChange={handleRatingChange}
          precision={0.5}
          readOnly={rating ? true : false}
        />
      </Grid>
      <Grid item xs={10} md={5}>
        {feedbackComment ? (
          <Typography>{feedbackComment}</Typography>
        ) : (
          <TextField
            id="feedback-comment"
            label="comment"
            multiline
            fullWidth
            rows={2}
            value={comment}
            onChange={handleCommentChange}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default FeedbackCard;
