import { Alert, Box, Button, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { CODERS_LIST } from '../../../CoderList/Mockups';
import './index.css';
import { useSelector } from 'react-redux';
import FilterComponent from '../FilterCoder/FilteredOptionsSideBar';
import SearchBar from '../FilterCoder/SearchCoder';
import FilteredChips from '../FilterCoder/FilteredChipSelection';
import CoderSuggestionCard from './CoderSuggestionCard';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { ArrowForwardIosOutlined } from '@mui/icons-material';
import Invite10Coder from './InvitePopup';
import { useLocation } from 'react-router-dom';
import { Pagination } from '../../../Common';

const InviteCoder: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const tech = useSelector((state: any) => state.technology);
  const [chipTech, setChipTech] = useState<any>(tech.name);
  const handlePageChange = (event: any, value: any) => {
    setCurrentPage(value);
  };
  const [invite, setinvite] = useState(false);
  const itemsPerPage = 6;
  const availableCoder = CODERS_LIST.map((coder) => coder);
  const pageCount = Math.ceil(availableCoder.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCoders =
    availableCoder.length > 0 ? availableCoder.slice(indexOfFirstItem, indexOfLastItem) : [];
  const [selectedUsernames, setSelectedUsernames] = useState<string[]>([]);
  const [invite10Coder, setInvite10Coder] = useState(false);
  const [title, setTitle] = useState('');
  const location = useLocation();
  const flag = location.state?.flag;
  const [alert, setAlert] = useState(flag);
  const pageOption = [
    { label: 5, value: 5 },
    { label: 10, value: 10 },
    { label: 15, value: 15 }
  ];
  const handleDelete = (chipToDelete: string) => {
    setChipTech(chipTech.filter((skill: any) => skill !== chipToDelete));
  };
  const paginationProps = {
    defaultOption: pageOption[0],
    options: pageOption,
    pageCount,
    currentPage,
    handlePageChange
  };

  const handelSelectMultipleClick = () => {
    setinvite(true);
  };

  const handleCheckboxChange = (username: string, isChecked: boolean) => {
    if (isChecked) {
      setSelectedUsernames((prevUsernames) => [...prevUsernames, username]);
    } else {
      setSelectedUsernames((prevUsernames) => prevUsernames.filter((user) => user !== username));
    }
  };

  const handelpopClick = () => {
    if (invite10Coder == false) {
      setInvite10Coder(true);
      setTitle('Invited Top 10 Coders');
    } else {
      setInvite10Coder(false);
      setTitle('');
    }
  };
  const handelInvite = () => {
    if (invite10Coder == false) {
      setInvite10Coder(true);
      setTitle('Invited Selected Coders');
    } else {
      setInvite10Coder(false);
      setTitle('');
    }
  };
  const handleCloseModal = () => {
    setInvite10Coder(false);
  };

  return (
    <>
      <Grid container>
        <Grid item xs={3}>
          <FilterComponent />
        </Grid>
        <Grid className="filter-coder-screen" item xs={9}>
          {' '}
          {alert && (
            <Alert
              className="invite-coder-alert"
              onClose={() => {
                setAlert(!flag);
              }}>
              <Typography variant="subtitle1" color={'#1E4620'}>
                Your have successfully posted job!! Hire coder now
              </Typography>
            </Alert>
          )}
          <Paper elevation={0} className="filterd-coder">
            <Box className="invite-multiple-coder">
              <Typography variant="subtitle1">
                Invite and Hire amongst top 10 Coders
                <Typography color="primary" ml={'4px'} component="span">
                  NOW
                </Typography>
              </Typography>

              <Typography variant="subtitle1">
                Auto send invitation to top 10 Coders?
                <Typography onClick={handelpopClick} color="primary" ml={'4px'} component="span">
                  OK{' '}
                  <Invite10Coder title={title} isOpen={invite10Coder} onClose={handleCloseModal} />
                </Typography>
              </Typography>
            </Box>
            <Box display={'flex'} flexDirection={'column'}>
              <Box mt={'20px'} ml={'20px'} mr={'20px'}>
                <SearchBar />
              </Box>
              <Box className="filtered_selected_chips">
                <FilteredChips skills={chipTech} onDelete={handleDelete} />
              </Box>
              <Box className="invite-multiplecoder-container">
                <Box>
                  <Typography className="invite-multiplecoder-text" variant="h3">
                    Select multiple coders and send invitation in one go
                  </Typography>
                </Box>
                <Box className="invite-coder-btns">
                  {selectedUsernames.length > 0 ? (
                    <Button
                      className="invite-now-btn"
                      variant="contained"
                      size="medium"
                      onClick={handelInvite}>
                      <Box display={'flex'} padding={'16px 8px'} columnGap={'8px'}>
                        <Typography>Invite Now</Typography>
                        <ArrowForwardIosOutlined />
                      </Box>

                      <Invite10Coder
                        title={title}
                        isOpen={invite10Coder}
                        onClose={handleCloseModal}
                      />
                    </Button>
                  ) : (
                    <Button
                      variant="outlined"
                      className="multiple-invite-now-btn"
                      color="inherit"
                      size="medium"
                      onClick={handelSelectMultipleClick}>
                      <AddOutlinedIcon fontSize="small" />
                      <Typography fontSize={'14px'} fontWeight={500}>
                        Select Multiple
                      </Typography>
                    </Button>
                  )}
                </Box>
              </Box>

              {currentCoders.map((coder) => (
                <CoderSuggestionCard
                  key={coder.username}
                  coder={coder}
                  invite={invite}
                  onCheckboxChange={handleCheckboxChange}
                  selecteduser={selectedUsernames}
                />
              ))}
            </Box>
          </Paper>
          <Box className="pagination_box">
            <Pagination {...paginationProps} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default InviteCoder;
