import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from '../../../../../store/reducers';
import {
  EXPERTISE_LEVEL_FILTERS,
  FILTER_HOURLY_RATE,
  FILTER_LOCATIONS
} from '../../../../CoderList/Mockups';
import { getAllTechnology } from '../../../../../store/actions/jobPost';
import { FilterListFilled } from '../../../../../assets/svg/FilterListFilled';

interface jobPostState {
  technologies: any;
  error: any;
}

const FilterComponent: React.FC = ({}) => {
  const dispatch = useDispatch();
  const jobPostSelector = useSelector((state: RootState) => state?.jobPost);
  const { technologies } = jobPostSelector as jobPostState;

  const [showAllTechnologies, setShowAllTechnologies] = useState(false);

  const limitedTechnologies = technologies.slice(0, showAllTechnologies ? technologies.length : 3);

  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  useEffect(() => {
    if (technologies.length === 0) dispatch(getAllTechnology());
  });

  const handleCheckboxChange = (filter: string) => {
    const updatedFilters = selectedFilters.includes(filter)
      ? selectedFilters.filter((item) => item !== filter)
      : [...selectedFilters, filter];
    setSelectedFilters(updatedFilters);
  };

  return (
    <Box
      display={'flex'}
      marginTop={'100px'}
      flexDirection={'column'}
      justifyContent={'flex-start'}
      marginLeft={'150px'}
      height={'1622px'}>
      <Box display="flex" justifyContent={'space-between'}>
        <Box>
          <Typography variant="h3" className="main-filter-header">
            Filter By
          </Typography>
        </Box>
        <Box mr={'55px'}>
          <FilterListFilled />
        </Box>
      </Box>

      <Box display={'flex'} flexDirection={'column'} marginTop={'11px'}>
        <Box display={'flex'} flexDirection={'column'} marginTop={'17px'} marginBottom={'17px'}>
          <Typography className="sub-header">Expertise Level</Typography>
          {EXPERTISE_LEVEL_FILTERS.map((item) => (
            <FormControlLabel
              key={item.id}
              control={
                <Checkbox
                  checked={selectedFilters.includes(item.label)}
                  onChange={() => handleCheckboxChange(item.label)}
                />
              }
              label={item.label}
            />
          ))}
        </Box>
        <Box display={'flex'} flexDirection={'column'} marginTop={'17px'} marginBottom={'17px'}>
          <Typography className="sub-header">Location</Typography>
          {FILTER_LOCATIONS.map((item) => (
            <FormControlLabel
              key={item.id}
              control={
                <Checkbox
                  checked={selectedFilters.includes(item.label)}
                  onChange={() => handleCheckboxChange(item.label)}
                />
              }
              label={item.label}
            />
          ))}
        </Box>
        <Box display={'flex'} flexDirection={'column'} marginTop={'17px'}>
          <Typography className="sub-header">Technology</Typography>
          <Box className={showAllTechnologies ? 'tech-box-filteroverflow' : 'tech-box-filter'}>
            {limitedTechnologies.map((item: any) => (
              <FormControlLabel
                key={item.id}
                control={
                  <Checkbox
                    checked={selectedFilters.includes(item.name)}
                    onChange={() => handleCheckboxChange(item.name)}
                  />
                }
                label={item.name}
              />
            ))}
          </Box>

          <Box display={'flex'} justifyContent={'flex-start'}>
            {!showAllTechnologies && (
              <Typography
                className="see-more-link"
                color="primary"
                onClick={() => setShowAllTechnologies(true)}>
                {`+ ${technologies.length - 3} more`}
              </Typography>
            )}
          </Box>
        </Box>
        <Box display={'flex'} flexDirection={'column'} marginTop={'26px'} marginBottom={'17px'}>
          <Typography className="sub-header">Hourly Rate</Typography>
          {FILTER_HOURLY_RATE.map((item) => (
            <FormControlLabel
              key={item.id}
              control={
                <Checkbox
                  checked={selectedFilters.includes(item.label)}
                  onChange={() => handleCheckboxChange(item.label)}
                />
              }
              label={item.label}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default FilterComponent;
