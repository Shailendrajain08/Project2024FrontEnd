const codersDropdown = [
  { name: 'Find a coder', path: '/findCoder' },
  { name: 'Save coder', path: '/saveCoder' },
  { name: 'My coder', path: '/myCoder' }
];

const reportDropdown = [
  { name: 'Transaction history', path: '/reports/transaction-history' },
  {
    name: 'Timesheets',
    isShowChild: true,
    data: [
      { name: 'Fixed price', path: '/reports/timesheets/fixedPrice' },
      { name: 'Hourly rate', path: '/reports/timesheets/hourly' }
    ]
  }
];

const profileDropdown: any = {
  CLIENT: [
    { name: 'Profile Management Page', path: '/client/profile' },
    { name: 'My Dashboard', path: '/clientDashboard' },
    { name: 'Logout', callbackFnc: 'logout' }
  ],
  CODER: [
    { name: 'Personal Details', path: '/coders/profile' },
    { name: 'My Dashboard', path: '/coder/dashboard' },
    { name: 'Profile Completion' },
    { name: 'Logout', callbackFnc: 'logout' }
  ]
};

const searchOptionList = [
  { label: 'Coder', value: 'Coder' },
  { label: 'Job', value: 'Job' }
];

export { codersDropdown, reportDropdown, profileDropdown, searchOptionList };
