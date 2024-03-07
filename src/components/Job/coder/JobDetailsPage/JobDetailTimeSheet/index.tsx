import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  TextField,
  Typography,
  Select
} from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import './index.css';
import { Controller, useForm } from 'react-hook-form';

import { jobData } from '../../../../../constants/jopProposal';
import FilesUploaded from '../FilesUploaded';
import Skills from '../../../../Common/Skills';
import Tabel from './Tabel';
import { Fixed_timeSheet, Hourly_timesheet } from '../../../../../constants/timesheet';
import TimesheetHourlyColumns from './Column';
import FixedTable from './FixedTimeSheet/Tabel';
import { fixedColumns } from './FixedTimeSheet/Column';
import JobSpecTimesheet from './JobSpecTimesheet';
import { Modal, MultilineTextField, SpinnerLoader } from '../../../../Common';
import { CloseOutlined } from '@mui/icons-material';
import { learnMore, note } from '../../../constant';
import { useSelector } from 'react-redux';
import { getJobById } from '../../../../../store/actions/jobs';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

interface JobData {
  id: string;
  user: string;
  title: string;
  description: string;
  technologies: string[];
  contracts: string[];
  project_size: string;
  budget_type: string;
  maximum_budget: any;
  maximum_hourly_rate?: any;
  minimum_hourly_rate?: any;
  expertise: string[];
  duration: string;
  timezone: string[];
  attachments: string[];
  preferred_coder_residence: string;
  status: string;
  created: string;
  updated: string;
}

const JobDetailTimeSheet: React.FC = () => {
  const [jobDataState, setJobDataState] = useState<JobData>(jobData);
  const [jopSpecProps, setJopSpecProps] = useState<any>({});
  const jobsSelector = useSelector((state: any) => state);
  const dispatch = useDispatch();
  const params = useParams();
  const { id = '' } = params;
  const { loading, job = {} } = jobsSelector;

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors }
  } = useForm({
    defaultValues: {
      selectedDate: '',
      selectedTimeZone: '',
      selectedStartTime: '',
      selectedEndTime: '',
      memo: ''
    }
  });

  useEffect(() => {
    dispatch(getJobById(id));
  }, []);

  useEffect(() => {
    if (Object.keys(job).length > 0) {
      setJobDataState(job.job);
      setJopSpecProps({
        title: job?.job?.title,
        project_size: job?.job?.project_size,
        description: job?.job?.description,
        duration: job?.job?.duration,
        expertise: [], //job?.job?.expertise.map(capitalilFirstLetter).join(', '),
        isUsaProject: job?.job?.preferred_coder_residence,
        timezone: job?.job?.timezone?.map(mapTimeZoneToAbbreviation).join(', '),
        fixedMaxPrice: job?.job?.maximum_budget,
        hourlyMaxPrice: job?.job?.maximum_hourly_rate,
        hourlyMinPrice: job?.job?.minimum_hourly_rate,
        attachmentArr: [job?.job?.attachment_1, job?.job?.attachment_2, job?.job?.attachment_3]
      });
    }
  }, [job]);

  const capitalilFirstLetter = (str: string): string => {
    return str?.charAt(0).toUpperCase() + str?.slice(1).toLowerCase();
  };
  const mapTimeZoneToAbbreviation = (timeZone: string): string => {
    const timeZoneMap: { [key: string]: string } = {
      'GMT-8:00 Pacific Time Zone': 'PST',
      'GMT-7:00 Mountain TimeZone': 'MTS'
      // Add more mappings as needed
    };

    return timeZoneMap[timeZone] || timeZone;
  };

  const columns = TimesheetHourlyColumns;
  const Columns = fixedColumns;
  const dataHourly = useMemo(() => Hourly_timesheet, []);
  const dataFixed = useMemo(() => Fixed_timeSheet, []);
  const tablePropsHourly = {
    columns,
    data: dataHourly
  };
  const tablePropsFixed = {
    Columns,
    data: dataFixed
  };
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const timeZones = [
    'GMT-8:00 Pacific Time Zone',
    'GMT-7:00 Mountain Time Zone',
    'GMT-6:00 Central Time Zone',
    'GMT-5:00 Eastern Time Zone'
    // Add more time zones as needed
  ];

  const [selectedDate, setSelectedDate] = useState('');

  // Function to generate a list of dates (for example, the next 7 days)
  const generateDateList = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() + i);
      dates.push(date.toLocaleDateString());
    }

    return dates;
  };
  const dateList = generateDateList();

  const times = Array.from({ length: 48 }, (_, index) => {
    const hour = Math.floor(index / 2);
    const minute = index % 2 === 0 ? '00' : '30';
    return `${hour.toString().padStart(2, '0')}:${minute}`;
  });

  const handleDateChange = (event: any) => {
    setSelectedDate(event.target.value);
  };
  const onSubmit = (data: any) => {
    console.log(data);
    // Handle your form submission logic here
  };
  const memoValue = watch('memo');

  return (
    <>
      {loading ? (
        <SpinnerLoader />
      ) : (
        <>
          <Box className="hourly-main--box">
            <Container>
              <Paper className="hourlymain-container">
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  pl={'24.5px'}
                  pt={'20px'}
                  pr={'23.5px'}
                  pb={'24px'}>
                  <Box display={'flex'} justifyContent={'space-between'}>
                    <Typography variant="h2">Job Details</Typography>
                    <Box className="timesheet--btn-grp" display={'flex'} columnGap={'16px'}>
                      <Button className="message--btn" variant="outlined">
                        MESSAGE
                      </Button>
                      <Button className="view-job-posting--btn" variant="contained">
                        {' '}
                        view job Posting
                      </Button>
                    </Box>
                  </Box>
                  <Box textAlign={'start'}>
                    {Object.keys(jopSpecProps).length > 0 && <JobSpecTimesheet {...jopSpecProps} />}
                  </Box>
                  <Box textAlign={'start'} mt={'16px'}>
                    <Typography className="hourly-job-desc" variant="caption" paragraph>
                      {jobDataState?.description}
                    </Typography>
                  </Box>
                  <Box>
                    {jopSpecProps?.attachmentArr && (
                      <Box textAlign={'start'} mt={'20px'}>
                        <FilesUploaded files={jopSpecProps?.attachmentArr} />
                      </Box>
                    )}
                  </Box>
                </Box>
                <Divider />
                <Box textAlign={'start'} pl={'24.5px'} pt={'20px'} pr={'23.5px'}>
                  <Skills
                    titlComponent={'Skills and expertise'}
                    skills={jobDataState?.technologies}
                  />
                </Box>
                {jobData.budget_type === 'HOURLY'
                  ? dataHourly && (
                      <Box>
                        <Typography
                          ml={'24.5px'}
                          mt={'24px'}
                          textAlign={'start'}
                          variant="subtitle1">
                          Timesheet details
                        </Typography>
                        <Tabel {...tablePropsHourly} />
                      </Box>
                    )
                  : dataFixed && (
                      <Box>
                        <Box ml={'24px'} mt={'24px'} mr={'24px'} textAlign={'start'}>
                          <Box display={'flex'} justifyContent={'space-between'} mb={'6px'}>
                            <Typography variant="subtitle1">Your Propose terms</Typography>
                            <Typography variant="subtitle1">
                              Client Budget : $2000{jobDataState?.maximum_budget}
                            </Typography>
                          </Box>
                          <Typography className="fixed-by-milestone">By Milestone</Typography>
                        </Box>
                        <FixedTable {...tablePropsFixed} />
                        <Box p={'24px'} textAlign={'start'}>
                          <Typography className="fixed-bottom-desc">
                            Total price of project{' '}
                            <Typography component={'span'} variant="body1">
                              (This include all milestone and is the amount your client will see) :
                              <Typography component={'span'} variant="subtitle1">
                                {' '}
                                $4,500.00
                              </Typography>
                            </Typography>
                          </Typography>
                        </Box>
                      </Box>
                    )}
              </Paper>
              <Box mt={'16px'} display={'flex'} justifyContent={'flex-end'} width={'100%'}>
                {jobData.budget_type === 'HOURLY' && (
                  <Box className="add-hour-btn-container">
                    <Button
                      className="add-hours-btn"
                      variant="outlined"
                      color="primary"
                      onClick={handleOpen}>
                      ADD HOURS
                    </Button>
                  </Box>
                )}
              </Box>
            </Container>
          </Box>
          {open && (
            <Modal id="#modal-container" open={open} onClose={handleClose} modalBodyWidth="721px">
              <Box p={'8px'}>
                <Box className="top-header-fixed-pop-up">
                  <Typography variant="h2">Add Manual Time</Typography>
                  <CloseOutlined onClick={handleClose} />
                </Box>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Box display={'flex'} flexDirection={'column'} mt={'24px'}>
                    <Box display={'flex'} flexDirection={'column'} rowGap={'20px'}>
                      <FormControl fullWidth>
                        <InputLabel id="date-select-label">Date</InputLabel>
                        <Select
                          labelId="date-select-label"
                          id="date-select"
                          {...register('selectedDate')}
                          label="Date"
                          MenuProps={{
                            PaperProps: {
                              className: 'custom-dropdown-menu'
                            }
                          }}>
                          {dateList.map((date, index) => (
                            <MenuItem key={index} value={date}>
                              {date}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      <FormControl fullWidth>
                        <InputLabel id="timezone-select-label">Time Zone</InputLabel>
                        <Controller
                          name="selectedTimeZone"
                          control={control}
                          render={({ field }) => (
                            <Select
                              labelId="timezone-select-label"
                              id="timezone-select"
                              label="Time Zone"
                              {...field}
                              MenuProps={{
                                PaperProps: {
                                  className: 'custom-dropdown-menu'
                                }
                              }}>
                              {timeZones.map((timeZone, index) => (
                                <MenuItem key={index} value={timeZone}>
                                  {timeZone}
                                </MenuItem>
                              ))}
                            </Select>
                          )}
                        />
                      </FormControl>
                      <Box display={'flex'} flexDirection={'row'} columnGap={'16px'}>
                        <FormControl fullWidth>
                          <InputLabel id="start-time-select-label">Start Time</InputLabel>
                          <Controller
                            name="selectedStartTime"
                            control={control}
                            render={({ field }) => (
                              <Select
                                labelId="start-time-select-label"
                                id="start-time-select"
                                label="Start Time"
                                {...field}
                                MenuProps={{
                                  PaperProps: {
                                    className: 'custom-dropdown-menu'
                                  }
                                }}>
                                {times.map((time, index) => (
                                  <MenuItem key={`start-time-${index}`} value={time}>
                                    {time}
                                  </MenuItem>
                                ))}
                              </Select>
                            )}
                          />
                        </FormControl>
                        <FormControl fullWidth>
                          <InputLabel id="end-time-select-label">End Time</InputLabel>
                          <Controller
                            name="selectedEndTime"
                            control={control}
                            render={({ field }) => (
                              <Select
                                labelId="end-time-select-label"
                                id="end-time-select"
                                label="End Time"
                                {...field}
                                MenuProps={{
                                  PaperProps: {
                                    className: 'custom-dropdown-menu'
                                  }
                                }}>
                                {times.map((time, index) => (
                                  <MenuItem key={`end-time-${index}`} value={time}>
                                    {time}
                                  </MenuItem>
                                ))}
                              </Select>
                            )}
                          />
                        </FormControl>
                      </Box>
                      <Box className="add---memo-text-box">
                        <TextField
                          id="memo"
                          label="Memo"
                          multiline
                          className="memo-text--field"
                          rows={4}
                          variant="outlined"
                          fullWidth
                          {...register('memo', {
                            maxLength: {
                              value: 150,
                              message: 'Memo cannot exceed 150 characters'
                            }
                          })}
                          error={!!errors.memo}
                          helperText={
                            errors.memo
                              ? errors.memo.message
                              : ` Max. ${memoValue?.length || 0}/150  Character`
                          }
                        />
                      </Box>
                    </Box>

                    <Typography mt={'16px'} variant="body2">
                      {note}
                      <Typography component={'span'} color={'#14A800'} variant="subtitle2">
                        {learnMore}
                      </Typography>{' '}
                    </Typography>
                  </Box>
                  <Box className="fixed-pop-up-btn-group">
                    <Button size="large" type="submit" variant="contained">
                      Save
                    </Button>
                    <Button size="large" variant="outlined" onClick={handleClose}>
                      Cancel
                    </Button>
                  </Box>
                </form>
              </Box>
            </Modal>
          )}
        </>
      )}
    </>
  );
};

export default JobDetailTimeSheet;
