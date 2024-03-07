import React, { useEffect } from 'react';
import {
  CODERS_LIST,
  EXPERTISE_LEVEL_FILTERS,
  FILTER_HOURLY_RATE,
  FILTER_LOCATIONS
} from './Mockups';
import {
  Box,
  Divider,
  Grid,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
  Drawer,
  FormControl,
  FormGroup,
  FormLabel,
  FormControlLabel,
  Checkbox
} from '@mui/material';
import CoderDetailsCard from './CoderDetailsCard';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import styled from '@emotion/styled';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 280;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }: any) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  })
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'open'
})<AppBarProps>(({ theme, open }: any) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: drawerWidth
  })
}));

const DrawerHeader = styled('div')(({ theme }: any) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end'
}));

const CoderList = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [expertiseLevel, setExpertiseLevel] = React.useState('');
  const [location, setLoaction] = React.useState('');
  const [hourlyRateFilter, setHourlyRateFilter] = React.useState('');
  const [starRatingFilter, setStarRatingFilter] = React.useState('');
  const [savedCoders, setSavedCoders] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleExpertiseLevelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setExpertiseLevel(event.target.name);
  };

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoaction(event.target.name);
  };

  const handleHourlyrateFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHourlyRateFilter(event.target.name);
  };

  const handleStarratingFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStarRatingFilter(event.target.name);
  };

  const renderCodersCard = () => {
    return CODERS_LIST.map((coder) => {
      return (
        <>
          <Grid item xs={12} md={6} lg={6} key={coder.name}>
            <CoderDetailsCard coderData={coder}></CoderDetailsCard>
          </Grid>
        </>
      );
    });
  };

  const renderExpertiseCheckboxList = () => {
    return EXPERTISE_LEVEL_FILTERS.map((filter) => {
      return (
        <FormControlLabel
          control={
            <Checkbox
              checked={filter.id === expertiseLevel}
              onChange={handleExpertiseLevelChange}
              name={filter.id}
            />
          }
          key={filter.id}
          label={filter.label}
        />
      );
    });
  };

  const renderLocationList = () => {
    return FILTER_LOCATIONS.map((filter) => {
      return (
        <FormControlLabel
          control={
            <Checkbox
              checked={filter.id === location}
              onChange={handleLocationChange}
              name={filter.id}
            />
          }
          key={filter.id}
          label={filter.label}
        />
      );
    });
  };

  const renderHourlyRateList = () => {
    return FILTER_HOURLY_RATE.map((filter) => {
      return (
        <FormControlLabel
          control={
            <Checkbox
              checked={filter.id === hourlyRateFilter}
              onChange={handleHourlyrateFilterChange}
              name={filter.id}
            />
          }
          key={filter.id}
          label={filter.label}
        />
      );
    });
  };

  const renderStarratingList = () => {
    return FILTER_HOURLY_RATE.map((filter) => {
      return (
        <FormControlLabel
          control={
            <Checkbox
              checked={filter.id === starRatingFilter}
              onChange={handleStarratingFilterChange}
              name={filter.id}
            />
          }
          key={filter.id}
          label={filter.label}
        />
      );
    });
  };

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex' }}>
        <AppBar position="absolute" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              sx={{ ...(open && { display: 'none' }) }}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Grid container>
          <Grid item xs="auto" lg="auto" md="auto" sx={{ flexGrow: open ? '1' : '0' }}>
            <Drawer
              sx={{
                height: '100%',
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                  width: open ? drawerWidth : '0px',
                  top: 'auto',
                  position: 'relative'
                }
              }}
              variant="persistent"
              anchor="left"
              open={open}>
              <DrawerHeader>
                <Typography component={'div'} sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                  Filter By
                </Typography>
                <IconButton onClick={handleDrawerClose}>
                  {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
              </DrawerHeader>
              <Divider />
              <FormControl sx={{ m: 3, textAlign: 'left' }} component="fieldset" variant="standard">
                <FormLabel component="legend">Expertise Level</FormLabel>
                <FormGroup>{renderExpertiseCheckboxList()}</FormGroup>
              </FormControl>
              <FormControl sx={{ m: 3, textAlign: 'left' }} component="fieldset" variant="standard">
                <FormLabel component="legend">Location</FormLabel>
                <FormGroup>{renderLocationList()}</FormGroup>
              </FormControl>
              <FormControl sx={{ m: 3, textAlign: 'left' }} component="fieldset" variant="standard">
                <FormLabel component="legend">Hourly Rate</FormLabel>
                <FormGroup>{renderHourlyRateList()}</FormGroup>
              </FormControl>
              <FormControl sx={{ m: 3, textAlign: 'left' }} component="fieldset" variant="standard">
                <FormLabel component="legend">Star Ratings</FormLabel>
                <FormGroup>{renderStarratingList()}</FormGroup>
              </FormControl>
              <Typography component={'div'} sx={{ textAlign: 'left', ml: 3, mb: 3 }}>
                <FormControlLabel
                  control={<Checkbox checked={savedCoders} />}
                  label="Saved Coders"
                />
              </Typography>
            </Drawer>
          </Grid>
          <Grid item lg xs md>
            <Main open={open}>
              <Grid container spacing={2} sx={{ p: 4 }}>
                {renderCodersCard()}
              </Grid>
            </Main>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default CoderList;
