import {
  Box,
  Checkbox,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  TextField
} from '@mui/material';
import JobPostModal from '../../../common/JobPostModal';
import { timeZones } from '../../../timezones';
import { SearchOutlinedIconSvg } from '../../../../../../assets/svg';
import { useState } from 'react';

interface IJobPostLocation {
  name: string;
  showPopUp: any;
  handleClose: () => void;
  setValue: any;
  title: string;
  getValues: any;
  clearErrors?: any;
  errors?: any;
  value: any;
  options: any[] | undefined;
  setFormData: (name: string, value: any) => void;
  onhandleSubmit: any;
}

const JobPostLocation = ({
  name,
  showPopUp,
  handleClose,
  setValue,
  title,
  getValues,
  value,
  options,
  setFormData,
  onhandleSubmit
}: IJobPostLocation) => {
  const [searchQuery, setSearchQuery] = useState(value);
  const [checkedDataList, setCheckedDataList] = useState<any>([]);

  const handleSearch = () => {
    // You can perform the search operation or trigger any action here
    console.log('Search query:', searchQuery);
  };

  const handleInputChange = (event: any) => {
    // debugger;
    console.log('event', event.target.name, event.target.value);

    // setSearchQuery(event.target.value);
  };

  const handleKeyPress = (event: any) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
  const handleToggle = (value: any) => () => {
    const checkedVal = checkedDataList.find((el: any) => el.id === value.id);
    if (checkedVal) {
      const filterData = checkedDataList.filter((data: any) => data.id !== checkedVal.id);
      setCheckedDataList(filterData);
      // setValue(name, filterData);
      setFormData(name, filterData);
    } else {
      const updatedDataList = [...checkedDataList, value];
      setCheckedDataList(updatedDataList);
      // setValue(name, updatedDataList);
      setFormData(name, updatedDataList);
    }
  };
  return (
    <Box>
      <JobPostModal
        title={title}
        open={showPopUp}
        handleClose={handleClose}
        name={name}
        modalBodyWidth="458px"
        callBackFnc={onhandleSubmit}>
        <Box>
          <TextField
            fullWidth
            label="Search by timezone"
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            defaultValue={searchQuery}
            size="medium"
            name={name}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" sx={{ pr: 1 }}>
                  <IconButton color="primary">
                    <SearchOutlinedIconSvg />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          {searchQuery && (
            <List className="time-zone-list">
              {options &&
                options.map((value: any, id: any) => {
                  const labelId = `checkbox-list-label-${id}`;

                  return (
                    <ListItem key={id} disablePadding>
                      <ListItemButton onClick={handleToggle(value)} dense>
                        <ListItemIcon>
                          <Checkbox
                            edge="start"
                            checked={checkedDataList.some((el: any) => el.id === value.id)}
                            tabIndex={-1}
                            disableRipple
                          />
                        </ListItemIcon>
                        <ListItemText
                          className="timezone--list"
                          id={labelId}
                          primary={`${value.time + 1}`}
                        />
                      </ListItemButton>
                    </ListItem>
                  );
                })}
            </List>
          )}
        </Box>
      </JobPostModal>
    </Box>
  );
};

export default JobPostLocation;
