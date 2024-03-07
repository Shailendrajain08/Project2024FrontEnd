export const reportList = [
  { name: 'Transaction History', path: '/reports/transaction-history' },
  {
    name: 'Timesheets',
    submenu: [
      { name: 'Fixed Price', path: '/reports/timesheets/fixedPrice' },
      { name: 'Hourly', path: '/reports/timesheets/hourly' }
    ]
  }
];

export const transactionData = [
  {
    date: '07/09/2023',
    job: 'Need Java developer',
    coder: 'Itsme',
    description: 'Java skill',
    type: 'Debit',
    amount: '$ 2000',
    transactionId: '1',
    invoice: '',
    id: 1
  },
  {
    date: '05/05/2023',
    job: 'Need fullstack developer',
    coder: 'Itsme',
    description: 'Java skill',
    type: 'Debit',
    amount: '$ 2000',
    transactionId: '2',
    invoice: '',
    id: 2
  },
  {
    date: '06/06/2023',
    job: 'Need Java developer',
    coder: 'hack4u',
    description: 'Java skill',
    type: 'Failed',
    amount: '$ 2000',
    transactionId: '3',
    invoice: '',
    id: 3
  },
  {
    date: '08/25/2023',
    job: 'Need Python developer',
    coder: 'hack4u',
    description: 'Java skill',
    type: 'Credit',
    amount: '$ 1000',
    transactionId: '4',
    invoice: '',
    id: 4
  },
  {
    date: '08/04/2023',
    job: 'Need backend developer',
    coder: 'lofi',
    description: 'Java skill',
    type: 'Credit',
    amount: '$ 5000',
    transactionId: '5',
    invoice: '',
    id: 5
  },
  {
    date: '02/07/2023',
    job: 'Need Html designer developer',
    coder: 'zoro',
    description: 'Java skill',
    type: 'Credit',
    amount: '$ 1000',
    transactionId: '6',
    invoice: '',
    id: 6
  }
];

export const jobList = [
  { value: '', label: 'Select' },
  { value: 'Need Java developer', label: 'Need Java developer' },
  { value: 'Need fullstack developer', label: 'Need fullstack developer' },
  { value: 'Need React developer', label: 'Need React developer' },
  { value: 'Need Python developer', label: 'Need Python developer' },
  { value: 'Need backend developer', label: 'Need backend developer' },
  {
    value: 'Need Html designer developer',
    label: 'Need Html designer developer'
  }
];

export const coderList = [
  { value: '', label: 'Select' },
  { value: 'Itsme', label: 'Itsme' },
  { value: 'hack4u', label: 'hack4u' },
  { value: 'Lofi', label: 'Lofi' },
  { value: 'Zoro', label: 'Zoro' }
];

export const timeDurationList = [
  { value: '', label: 'Select' },
  { value: 'customDate', label: 'Custom Dates' },
  { value: '1', label: 'Today' },
  { value: '7', label: 'One Week' },
  { value: '30', label: 'Last Month' },
  { value: '180', label: 'Last 6 months' },
  { value: 'All', label: 'All' }
];

export const timeSheetData = [
  {
    mileStone: 'Design Approval',
    dueDate: '01/01/2023',
    amount: '1000',
    status: 'paid',
    transactionId: '11234567',
    coder: 'Itsme',
    job: '',
    timeDuration: '',
    fromDate: null,
    toDate: null,
    id: 1
  },
  {
    mileStone: 'Beta Release',
    dueDate: '02/02/2023',
    amount: '1000',
    status: 'processing',
    transactionId: '11234568',
    coder: '',
    job: 'Need Python developer',
    timeDuration: '',
    fromDate: null,
    toDate: null,
    id: 2
  },
  {
    mileStone: 'Final Release',
    dueDate: '03/03/2023',
    amount: '1000',
    status: '',
    transactionId: '11234569',
    coder: 'Itsme',
    job: 'Need Python developer',
    timeDuration: '',
    fromDate: null,
    toDate: null,
    id: 3
  },
  {
    mileStone: 'Design Approval',
    dueDate: '04/04/2023',
    amount: '1000',
    status: '',
    transactionId: '11234570',
    coder: '',
    job: '',
    timeDuration: 'last6Months',
    fromDate: null,
    toDate: null,
    id: 4
  },
  {
    mileStone: 'Bonus',
    dueDate: '05/04/2023',
    amount: '1000',
    status: '',
    transactionId: '11234571',
    coder: '',
    job: '',
    timeDuration: '',
    fromDate: null,
    toDate: null,
    id: 5
  },
  {
    mileStone: 'Final Release',
    dueDate: '06/04/2023',
    amount: '1000',
    status: '',
    transactionId: '11234572',
    coder: 'Itsme',
    job: '',
    timeDuration: '',
    fromDate: null,
    toDate: null,
    id: 6
  }
];

export const timeSheetHourlyData = [
  {
    date: '08/03/2023',
    status: 'approved',
    transactionId: '11234567',
    coder: 'Itsme',
    job: 'Need Python developer',
    description: 'Java skill Java skill Java skill Java skill Java skill Java skill Java skill',
    startTime: '12:00 PM',
    endTime: '05:00 PM',
    totalHours: '5:00 Hours',
    fromDate: null,
    toDate: null,
    id: 1
  },
  {
    date: '07/01/2023',
    status: '',
    transactionId: '11234568',
    coder: 'Lofi',
    job: 'Need Python developer',
    description: 'Java skill Java skill Java skill Java skill Java skill Java skill Java skill',
    startTime: '12:00 PM',
    endTime: '05:00 PM',
    totalHours: '5:00 Hours',
    fromDate: null,
    toDate: null,
    id: 2
  },
  {
    date: '01/01/2023',
    status: 'rejected',
    transactionId: '11234569',
    coder: 'Itsme',
    job: 'Need Python developer',
    description: 'Java skill Java skill Java skill Java skill Java skill Java skill Java skill',
    startTime: '12:00 PM',
    endTime: '06:00 PM',
    totalHours: '6:00 Hours',
    fromDate: null,
    toDate: null,
    id: 3
  },
  {
    date: '09/01/2023',
    status: '',
    transactionId: '11234570',
    coder: 'Naruto',
    job: 'Need fullstack developer',
    description: 'Java skill Java skill Java skill Java skill Java skill Java skill Java skill',
    startTime: '12:00 PM',
    endTime: '03:00 PM',
    totalHours: '3:00 Hours',
    fromDate: null,
    toDate: null,
    id: 4
  },
  {
    date: '05/01/2023',
    status: '',
    transactionId: '11234571',
    coder: 'Lufi',
    job: 'Need fullstack developer',
    description: 'Java skill Java skill Java skill Java skill Java skill Java skill Java skill',
    startTime: '12:00 PM',
    endTime: '03:00 PM',
    totalHours: '3:00 Hours',
    fromDate: null,
    toDate: null,
    id: 5
  },
  {
    date: '01/01/2023',
    status: '',
    transactionId: '11234572',
    coder: 'Itsme',
    job: 'Need backend developer',
    description: 'Java skill Java skill Java skill Java skill Java skill Java skill Java skill',
    startTime: '12:00 PM',
    endTime: '04:00 PM',
    totalHours: '4:00 Hours',
    fromDate: null,
    toDate: null,
    id: 6
  }
];
