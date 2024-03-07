import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Typography,
  styled
} from '@mui/material';
import { FavoriteBorderOutlined } from '@mui/icons-material';
import StarIcon from '@mui/icons-material/Star';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteIcon from '@mui/icons-material/Favorite';

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
  marginBottom: theme.spacing(2)
}));

const CoderDetailsCard = ({ coderData }: any) => {
  const renderSkillsTags = (skills: any) => {
    return skills.map((skill: any) => {
      return (
        <ListItem key={skill.id}>
          <Chip
            color={'primary'}
            sx={{
              borderRadius: '2px',
              backgroundColor: '#D8D8D8',
              color: '#625348',
              fontWeight: 'bold'
            }}
            label={skill.label}
          />
        </ListItem>
      );
    });
  };

  return (
    <React.Fragment>
      <Card>
        <Typography component={'div'} sx={{ display: 'flex', p: 0 }}>
          <Typography component={'div'} sx={{ flexDirection: 'column', p: 0 }}>
            <CardMedia sx={{ height: 'auto', float: 'left', p: 2, pr: 0 }}>
              {!coderData.isFavourite && <FavoriteBorderOutlined sx={{ fontSize: '26px' }} />}
              {coderData.isFavourite && (
                <FavoriteIcon sx={{ fontSize: '26px', color: '#E93F35' }} />
              )}
            </CardMedia>
          </Typography>
          <Typography component={'div'} sx={{ flexDirection: 'column', p: 0 }}>
            <CardContent sx={{ pb: 0 }}>
              <Typography component={'div'} sx={{ display: 'flex' }}>
                <Avatar
                  alt={coderData.name}
                  src={coderData.profilePic}
                  sx={{ width: 90, height: 90, flexDirection: 'column' }}
                />
                <Typography
                  component={'div'}
                  sx={{
                    flexDirection: 'column',
                    width: '100%',
                    textAlign: 'left'
                  }}>
                  <Typography
                    component={'div'}
                    sx={{ width: '100%', fontWeight: 'bold', p: 0, pl: 1 }}>
                    {coderData.name}
                  </Typography>
                  <Typography component={'div'} sx={{ width: '100%', p: 0, pl: 2, fontSize: 11 }}>
                    {coderData.username}
                  </Typography>
                  <Typography component={'div'} sx={{ width: '100%', pl: 1 }}>
                    {coderData.jobDescription}
                  </Typography>{' '}
                  <Typography component={'div'} sx={{ display: 'flex' }}>
                    <Typography component={'div'} sx={{ flexDirection: 'column', width: '50%' }}>
                      <CardMedia>
                        <StarIcon
                          sx={{
                            position: 'relative',
                            top: '5px',
                            color: '#244AFB'
                          }}></StarIcon>
                        <Typography component={'span'} sx={{ fontWeight: 'bold' }}>
                          {`${coderData.rating}/5`}
                        </Typography>
                      </CardMedia>
                    </Typography>
                    <Typography
                      component={'div'}
                      sx={{
                        flexDirection: 'column',
                        ml: 2,
                        width: '50%',
                        fontWeight: 'bold',
                        color: 'rgb(90,98,117)',
                        top: '4px',
                        position: 'relative'
                      }}>
                      {`Experience: ${coderData.experience} yrs`}
                    </Typography>
                  </Typography>
                </Typography>
              </Typography>

              <Typography
                component={'div'}
                sx={{ display: 'flex', mt: 2, textAlign: 'left', pl: 0.5 }}>
                <Typography component={'div'} sx={{ flexDirection: 'column', width: '33%' }}>
                  {`$${coderData.rate}/hr`}
                </Typography>
                <Typography component={'div'} sx={{ flexDirection: 'column', width: '33%' }}>
                  <Typography component={'span'} sx={{ fontWeight: 'bold' }}>
                    {' '}
                    {`$${coderData.earned} `}
                  </Typography>
                  earned
                </Typography>
                <Typography component={'div'} sx={{ flexDirection: 'column', width: '33%' }}>
                  <LocationOnIcon></LocationOnIcon>
                  <Typography
                    component={'span'}
                    sx={{
                      bottom: '5px',
                      position: 'relative',
                      fontWeight: 'bold'
                    }}>
                    {`${coderData.location}`}
                  </Typography>
                </Typography>
              </Typography>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}></Box>
              <Typography
                sx={{
                  display: 'flex',
                  textAlign: 'left',
                  flexWrap: 'wrap',
                  listStyle: 'none',
                  p: 0.5,
                  pl: 0,
                  pb: 0,
                  m: 0
                }}
                component="ul">
                {' '}
                {renderSkillsTags(coderData.skills)}{' '}
              </Typography>
            </CardContent>
            <CardActions sx={{ textAlign: 'left' }}>
              <Button
                variant="text"
                sx={{
                  color: '#03a9f4',
                  fontWeight: 'bold',
                  textTransform: 'capitalize',
                  mr: 2
                }}>
                Report Coder
              </Button>
              <Button
                variant="contained"
                sx={{ backgroundColor: '#2269A2', fontWeight: 'bold', mr: 2 }}>
                CHAT NOW
              </Button>
              <Button variant="contained" sx={{ backgroundColor: '#6BCF3B', fontWeight: 'bold' }}>
                HIRE NOW
              </Button>
            </CardActions>
          </Typography>
        </Typography>
      </Card>
    </React.Fragment>
  );
};

export default CoderDetailsCard;
