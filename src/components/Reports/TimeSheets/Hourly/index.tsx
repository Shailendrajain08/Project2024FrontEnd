import { useMemo, useState } from 'react';
import { Button, Grid } from '@mui/material';
import { CSVLink } from 'react-csv';
import TimeSheetTable from '../Table';
import { TimesheetHourlyColumn } from './Column';
import { timeSheetHourlyData } from '../../../../constants/reports';
import TimeSheetFilter from '../Filter';
import { getDateFilterData } from '../../utils';
import { DataI, handlePaymentStatusI, filterObjI, tableValuesI } from '../../type';

const TimeSheetHourly = () => {
  const data = useMemo(() => timeSheetHourlyData, []);
  const handlePaymentStatus = (status: string, rowPrams: DataI) => {
    // Need to udpate with api call to update the status
    const tableData = tableProps.data.map((row) => {
      if (row.id === rowPrams.id) row['status'] = status;
      return row;
    });

    setTableProps({ ...tableProps, data: tableData });
  };
  const columns = useMemo(
    () => TimesheetHourlyColumn(handlePaymentStatus as handlePaymentStatusI),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  const [tableProps, setTableProps] = useState({
    columns,
    data,
    pageSize: 5,
    pageSizeOptions: [5, 10, 25]
  });

  const filterTableData = (filterObj: filterObjI) => {
    let tableData = JSON.parse(JSON.stringify(data));
    const fromDate = new Date(filterObj.fromDate);
    const toDate = new Date(filterObj.toDate);
    tableData = tableData.filter((val: DataI) => {
      if (
        (!filterObj.coder || val.coder === filterObj.coder) &&
        (!filterObj.job || val.job === filterObj.job)
      ) {
        return true;
      }
      return false;
    });
    if (filterObj.timeDuration || (filterObj.fromDate && filterObj.toDate)) {
      tableData = getDateFilterData(tableData, filterObj.timeDuration, fromDate, toDate);
    }
    setTableProps({ ...tableProps, data: tableData });
  };

  const getDownloadData = () => {
    const tableValues: tableValuesI[] = [];
    tableProps?.data.forEach((element) =>
      tableValues.push([
        new Date(element?.date),
        element?.description,
        element?.startTime,
        element?.endTime,
        element?.totalHours,
        element?.status
      ])
    );
    return [
      ['Date', 'Description', 'Start Time', 'End Time', 'Total Hours', 'Payment (status)'],
      ...tableValues
    ];
  };
  return (
    <Grid container justifyContent={'center'} alignItems={'center'} marginBottom={3}>
      <Grid item xs={8} marginTop={5}>
        <TimeSheetFilter filterTableData={filterTableData} data={data} />
      </Grid>
      <Grid item xs={2} marginTop={5}>
        <CSVLink filename="timesheet-hourly.csv" data={getDownloadData()}>
          <Button variant="contained">Download CSV</Button>
        </CSVLink>
      </Grid>
      <Grid item xs={10}>
        <TimeSheetTable {...tableProps} />
      </Grid>
    </Grid>
  );
};

export default TimeSheetHourly;
