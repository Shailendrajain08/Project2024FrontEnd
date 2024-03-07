import React from 'react';
import { Typography, Card, CardContent, Rating, Box, Grid, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

const ReviewCard = ({ review }: any) => {
  const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#108A00'
    }
  });
  return (
    <Card elevation={0}>
      <CardContent sx={{ textAlign: 'left' }}>
        <Typography variant="body1" fontWeight={600} color={'#1C900D'} component="div">
          {review.jobName}
        </Typography>
        <Box mt={2} mb={1}>
          <StyledRating
            name="read-only"
            precision={0.5}
            size="small"
            value={review.rating}
            readOnly
          />
          <Typography
            sx={{ fontWeight: 700, ml: 1 }}
            component="span"
            variant="body2"
            color="text.secondary">
            {review.rating}
          </Typography>
          <Typography
            sx={{ mb: 1.5, ml: 1.5, fontWeight: 600 }}
            component="span"
            variant="caption"
            color="text.secondary">
            {`${review.startDate} - ${review.endDate}`}
          </Typography>
        </Box>
        <Typography
          mb={1}
          variant="body2"
          sx={{ fontStyle: 'italic' }}>{`"${review.reviewComment}"`}</Typography>
        {review.pricing?.type === 'hourly' ? (
          <Grid container justifyContent="space-between">
            <Grid item xs={4}>
              <Typography sx={{ fontWeight: 700, color: '#112D11' }} variant="body2">
                {`$${(review.pricing?.paidHours * review.pricing?.rate).toLocaleString()}`}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography sx={{ fontWeight: 700, color: '#112D11' }} variant="body2">
                {`$${review.pricing.rate}/hr`}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography sx={{ fontWeight: 700, color: '#112D11' }} variant="body2">
                {`${review.pricing.paidHours} hours`}
              </Typography>
            </Grid>
          </Grid>
        ) : (
          <Grid container justifyContent="left">
            <Grid item xs={4}>
              <Typography sx={{ fontWeight: 700, color: '#112D11' }} variant="body2">
                {`$${review.pricing?.rate}`}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography sx={{ fontWeight: 700, color: '#112D11' }} variant="body2">
                Fixed Price
              </Typography>
            </Grid>
          </Grid>
        )}
      </CardContent>
      <Divider />
    </Card>
  );
};

export default ReviewCard;
