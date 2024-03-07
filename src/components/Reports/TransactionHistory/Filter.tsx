import { useRef } from 'react';
import { Button, Grid } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { timeDurationList } from '../../../constants/reports';
import FilterSelect from './Select';
import { getOptionList } from '../utils';
import { ITransactionFilter } from '../type';

const TransactionFilter = ({
  handleJobFilter,
  handleCoderFilter,
  handleDateFilter,
  handleCustomDateFilter,
  data,
  isShowCustomDate
}: ITransactionFilter) => {
  const fromDateRef: any = useRef(null);
  const toDateRef: any = useRef(null);

  return (
    <Grid container spacing={2} marginBottom={4}>
      <Grid item xs={7}>
        <FilterSelect
          id="job"
          label="Job Title"
          options={getOptionList(data, 'job')}
          callbackFnc={handleJobFilter}
        />
      </Grid>
      <Grid item xs={4}>
        <FilterSelect
          id="coder"
          label="Coder Name"
          options={getOptionList(data, 'coder')}
          callbackFnc={handleCoderFilter}
        />
      </Grid>
      <Grid item xs={4}>
        <FilterSelect
          id="timeDuration"
          label="Time Duration"
          callbackFnc={handleDateFilter}
          options={timeDurationList}
        />
      </Grid>
      {isShowCustomDate && (
        <Grid item xs={8} className="transaction-date--container">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label="From" onChange={(date) => (fromDateRef.current = date)} />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label="To" onChange={(date) => (toDateRef.current = date)} />
          </LocalizationProvider>
          <Button onClick={() => handleCustomDateFilter(fromDateRef.current, toDateRef.current)}>
            Filter
          </Button>
        </Grid>
      )}
    </Grid>
  );
};

export default TransactionFilter;
