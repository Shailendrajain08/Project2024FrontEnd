import { useState } from 'react';
import { Button, Grid } from '@mui/material';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import FilterSelect from '../TransactionHistory/Select';
import { timeDurationList } from '../../../constants/reports';
import dayjs, { Dayjs } from 'dayjs';
import { getTimeSheetOptionList } from '../utils';

interface TimeSheetFilterProps {
  filterTableData: (filterObj: object) => void;
  data: any;
}

export default function TimeSheetFilter({ filterTableData, data }: TimeSheetFilterProps) {
  const [filterObj, setfilterObj] = useState<{ [key: string]: any }>({
    coder: '',
    job: '',
    timeDuration: '',
    fromDate: null,
    toDate: null
  });
  const [reset, setReset] = useState(false);
  const handleFilter = (val: any, id: any) => {
    setReset(false);
    setfilterObj({ ...filterObj, [id]: val });
  };

  return (
    <Grid container spacing={2} marginBottom={4}>
      <Grid item xs={4}>
        <FilterSelect
          id="coder"
          label="Coder Name"
          options={getTimeSheetOptionList(data, 'coder')}
          callbackFnc={handleFilter}
          clearvalues={reset}
        />
      </Grid>
      <Grid item xs={8}>
        <FilterSelect
          id="job"
          label="Job Title"
          options={getTimeSheetOptionList(data, 'job')}
          callbackFnc={handleFilter}
          clearvalues={reset}
        />
      </Grid>
      <Grid item xs={4}>
        <FilterSelect
          id="timeDuration"
          label="Time Duration"
          options={timeDurationList}
          callbackFnc={handleFilter}
          clearvalues={reset}
        />
      </Grid>
      <Grid item xs={3}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="From"
            value={filterObj?.fromDate}
            onChange={(dateVal) => {
              setfilterObj({
                ...filterObj,
                fromDate: dayjs(dateVal).format('MM/DD/YYYY')
              });
            }}
          />
        </LocalizationProvider>
      </Grid>
      <Grid item xs={3}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="To"
            value={filterObj?.toDate}
            onChange={(dateVal) => {
              setfilterObj({
                ...filterObj,
                toDate: dayjs(dateVal).format('MM/DD/YYYY')
              });
            }}
          />
        </LocalizationProvider>
      </Grid>
      <Grid item xs={2} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
        <Button
          variant="outlined"
          type="button"
          onClick={() => {
            setfilterObj({
              coder: '',
              job: '',
              timeDuration: '',
              fromDate: null,
              toDate: null
            });
            filterTableData({});
            setReset(true);
          }}>
          Reset
        </Button>
        <Button variant="contained" type="button" onClick={() => filterTableData(filterObj)}>
          Filter
        </Button>
      </Grid>
    </Grid>
  );
}
