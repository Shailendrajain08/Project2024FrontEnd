import { useState, useMemo, useRef } from 'react';
import { CSVLink } from 'react-csv';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { Button, Grid } from '@mui/material';
import TransactionHistoryTable from './Table';
import { TransactionColumn } from './Column';
import { transactionData } from '../../../constants/reports';
import './index.css';
import TransactionFilter from './Filter';
import { Modal } from '../../Common';
import { getfilterData } from '../utils';

pdfMake.vfs = pdfFonts.pdfMake.vfs;
const TransactionHistory = () => {
  const data = useMemo(() => transactionData, []);
  const [filterValue, setFilterValue] = useState(data);
  const jobFilterData: any = useRef([]);
  const codeFilterData: any = useRef([]);
  const timeFilterData: any = useRef([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [isShowCustomDate, setIsShowCustomDate] = useState(false);

  const handleViewClick = (value: any) => {
    setIsModalOpen(true);

    // Need to update for invoice
    const JsonData: any = JSON.stringify(value);
    setModalData(JsonData);
  };

  const handleTypeFilter = (value: any) => {
    const jobValue: any = data.filter((row: any) => {
      return row['type'] === value;
    });
    setFilterValue(jobValue);
  };

  const handleDownloadInvoice = (value: any) => {
    // Update your invoice content here
    const { date, job, coder, description, type, amount, transactionId } = value;
    const documentDefinition: any = {
      content: [
        { text: 'Invoice', style: 'header' },
        { text: 'Invoice Number: INV-001', style: 'subheader' },
        { text: `Date: ${date}`, style: 'subheader' },
        { text: `Job Title: ${job}`, style: 'subheader' },
        { text: `Coder name: ${coder}`, style: 'subheader' },
        { text: `Description: ${description}`, style: 'subheader' },
        { text: `Type: ${type}`, style: 'subheader' },
        { text: `Amount: ${amount}`, style: 'subheader' },
        { text: `Transaction ID: ${transactionId}`, style: 'subheader' }
      ],
      styles: {
        header: { fontSize: 22, bold: true },
        subheader: { fontSize: 18, bold: true, margin: [0, 10, 0, 10] }
      }
    };

    const pdfDocGenerator = pdfMake.createPdf(documentDefinition);
    pdfDocGenerator.download('transaction-history-invoice.pdf');
  };
  const columns = useMemo(
    () => TransactionColumn(handleViewClick, handleDownloadInvoice, handleTypeFilter),
    []
  );

  // Function to handle filter changes
  const handleJobFilter = (value: string, type: string) => {
    const jobfilter: any = getfilterData(data, type, value);
    setFilterValue(jobfilter);
    jobFilterData.current = jobfilter;
  };

  const handleCoderFilter = (value: string, type: string) => {
    const tempData = jobFilterData.current.length > 0 ? jobFilterData.current : data;
    const coderValue: any = getfilterData(tempData, type, value);
    setFilterValue(coderValue);
    codeFilterData.current = coderValue;
  };

  const handleDateFilter = (value: any): any => {
    const tempData =
      jobFilterData.current.length > 0
        ? codeFilterData.current.length > 0
          ? codeFilterData.current
          : jobFilterData.current
        : codeFilterData.current.length > 0
          ? codeFilterData.current
          : data;
    let timeDurationValue: any = [];
    if (value === 'All') {
      setIsShowCustomDate(false);
      timeDurationValue = tempData;
    } else if (value === 'customDate') {
      setIsShowCustomDate(true);
      timeDurationValue = tempData;
    } else {
      const currentDate = new Date();
      const agoDate = new Date();
      agoDate.setDate(currentDate.getDate() - Number(value));
      timeDurationValue = tempData.filter((row: any) => {
        const itemDate = new Date(row.date);
        return itemDate >= agoDate && itemDate <= currentDate;
      });
      setIsShowCustomDate(false);
    }
    setFilterValue(timeDurationValue);
    timeFilterData.current = timeDurationValue;
  };

  const handleCustomDateFilter = (fromDate: any, toDate: any) => {
    if (fromDate && toDate) {
      const filtered = timeFilterData.current.filter((item: any) => {
        const itemDate = new Date(item.date);
        return itemDate >= fromDate && itemDate <= toDate;
      });
      setFilterValue(filtered);
      timeFilterData.current = filtered;
    }
  };

  const csvData = [
    ['Date', 'Job', 'Coder', 'Description', 'Type', 'Amount', 'Transaction Id', 'Invoice'],
    ...filterValue.map(({ date, job, coder, description, type, amount, transactionId }) => [
      new Date(date),
      job,
      coder,
      description,
      type,
      amount,
      transactionId
    ])
  ];

  const tableProps = {
    columns,
    data: filterValue,
    pageSize: 5,
    pageSizeOptions: [5, 10, 25]
  };

  return (
    <Grid container justifyContent={'center'} alignItems={'center'} marginBottom={3}>
      <Grid item xs={8} marginTop={5}>
        <TransactionFilter
          handleJobFilter={handleJobFilter}
          handleCoderFilter={handleCoderFilter}
          handleDateFilter={handleDateFilter}
          handleCustomDateFilter={handleCustomDateFilter}
          data={data}
          isShowCustomDate={isShowCustomDate}
        />
      </Grid>
      <Grid item xs={2} marginTop={5}>
        <CSVLink filename="trnasaction-history.csv" data={csvData}>
          <Button variant="contained">Download CSV</Button>
        </CSVLink>
      </Grid>
      <Grid item xs={10}>
        <TransactionHistoryTable {...tableProps} />
      </Grid>
      <Modal
        open={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
        title={'Invoic Detial'}>
        {modalData}
      </Modal>
    </Grid>
  );
};

export default TransactionHistory;
