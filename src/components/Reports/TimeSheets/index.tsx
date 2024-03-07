import { useMemo, useState } from 'react';
import { Button, Grid } from '@mui/material';
import { CSVLink } from 'react-csv';
import TimeSheetTable from './Table';
import { TimesheetColumn } from './Column';
import { timeSheetData } from '../../../constants/reports';
import '../TransactionHistory/index.css';
import TimeSheetFilter from './Filter';

const TimeSheet = () => {
  const columns = useMemo(() => TimesheetColumn, []);
  const data = useMemo(() => timeSheetData, []);
  const [tableProps, setTableProps] = useState({
    columns,
    data,
    isSearchFilter: true,
    isPagination: true,
    pageSize: 5,
    placeholder: 'Search...',
    cN: null
  });

  const filterTableData = (filterObj: any) => {
    let tableData = JSON.parse(JSON.stringify(data));
    if (
      filterObj?.coder ||
      filterObj?.job ||
      filterObj?.timeDuration ||
      filterObj?.fromDate ||
      filterObj?.toDate
    ) {
      tableData = tableData.filter(
        (val: any) =>
          val.coder === filterObj?.coder &&
          val.job === filterObj?.job &&
          val.timeDuration === filterObj?.timeDuration &&
          val.fromDate === filterObj?.fromDate &&
          val.toDate === filterObj?.toDate
      );
    }
    setTableProps({ ...tableProps, data: tableData });
  };

  const getDownloadData = () => {
    const tableValues: any[] = [];
    tableProps?.data.forEach((element) =>
      tableValues.push([
        element?.mileStone,
        element?.dueDate,
        element?.amount,
        element?.status,
        element?.transactionId
      ])
    );
    return [['MileStone', 'Due Date', 'Amount', 'Status', 'Transaction Id'], ...tableValues];
  };
  return (
    <Grid container justifyContent={'center'} alignItems={'center'} marginBottom={3}>
      <Grid item xs={8} marginTop={5}>
        <TimeSheetFilter filterTableData={filterTableData} data={data} />
      </Grid>
      <Grid item xs={2} marginTop={5}>
        <CSVLink filename="timesheet.csv" data={getDownloadData()}>
          <Button variant="contained">Download CSV</Button>
        </CSVLink>
      </Grid>
      <Grid item xs={10}>
        <TimeSheetTable {...tableProps} />
      </Grid>
    </Grid>
  );
};

export default TimeSheet;
