import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VerifiedIcon from '@mui/icons-material/Verified';
import data from '../data.json';
import { Button } from '@mui/material';

export default function RecipeReviewCard() {
  const { aboutCoder } = data;

  return (
    <Card elevation={0} sx={{ textAlign: 'left' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500], height: 80, width: 80 }} aria-label="recipe">
            D
          </Avatar>
        }
        action={
          <>
            <IconButton sx={{ border: '1px solid #D6E1D6' }} aria-label="settings">
              <MoreHorizIcon sx={{ color: '#1E910F' }} />
            </IconButton>
            <Button variant="outlined" sx={{ borderRadius: '18px', mx: 1 }} color="error">
              Hire
            </Button>
            <Button
              variant="contained"
              disableElevation
              sx={{ borderRadius: '18px', backgroundColor: '#108A00' }}>
              Invite
            </Button>
            <IconButton sx={{ border: '1px solid #D6E1D6', mx: 1 }} aria-label="settings">
              <FavoriteBorderIcon sx={{ color: '#1E910F' }} />
            </IconButton>
          </>
        }
        title={
          <>
            <Typography variant="h6" component="span" fontWeight={600}>
              {aboutCoder.name}
            </Typography>
            {aboutCoder.verified && (
              <VerifiedIcon sx={{ color: '#1F57C3', fontSize: '16px', ml: 0.5 }} />
            )}
          </>
        }
        subheader={`${aboutCoder.location} - ${aboutCoder.localeTime}`}
      />
    </Card>
  );
}
