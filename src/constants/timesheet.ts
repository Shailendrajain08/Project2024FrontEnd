interface Hourly_timesheet {
  id: string;
  user: string;
  description: string;
  job_contract: string;
  start_time: string;
  end_time: string;
  total_hours: number;
  amount: number;
  payment_status: string;
  timesheet_status: string;
  created: string;
  updated: string;
}

interface Fixed_timeSheet {
  id: string;
  user: string;
  title: string;
  due_date: string;
  amount: number;
  payment_status: string;
  stripe_transaction_id: string;
  created: string;
  updated: string;
}

export const Hourly_timesheet: Hourly_timesheet[] = [
  {
    id: '9d27ce0c-1692-4b37-889d-a2c0f3a7cd341',
    user: '8f27ce0c-1692-4b37-889d-a2c0f3a7f6789',
    description: 'Lorem isum dorelar ideiad isum dorelar ideiad isumelar heloo ',
    job_contract: '7f27ce0c-1692-4b37-889d-a2c0f3a7f6745',
    start_time: '09:00',
    end_time: '17:00',
    total_hours: 8,
    amount: 640,
    payment_status: 'PAID',
    timesheet_status: 'APPROVED',
    created: '2023-10-31T16:26:34.524015Z',
    updated: '2023-10-31T16:26:34.524068Z'
  },
  {
    id: '9d27ce0c-1692-4b37-889d-a2c0f3a7cd342',
    user: '8f27ce0c-1692-4b37-889d-a2c0f3a7f6789',
    description: 'Lorem isum dorelar ideiad isum dorelar ideiad isumelar heloo ',
    job_contract: '7f27ce0c-1692-4b37-889d-a2c0f3a7f6745',
    start_time: '09:00',
    end_time: '17:00',
    total_hours: 8,
    amount: 640,
    payment_status: 'PAID',
    timesheet_status: 'APPROVED',
    created: '2023-10-31T16:26:34.524015Z',
    updated: '2023-10-31T16:26:34.524068Z'
  },
  {
    id: '9d27ce0c-1692-4b37-889d-a2c0f3a7cd3411',
    user: '8f27ce0c-1692-4b37-889d-a2c0f3a7f6789',
    description: 'Lorem isum dorelar ideiad isum dorelar ideiad isumelar ',
    job_contract: '7f27ce0c-1692-4b37-889d-a2c0f3a7f6745',
    start_time: '09:00',
    end_time: '17:00',
    total_hours: 8,
    amount: 640,
    payment_status: 'REJECTED',
    timesheet_status: 'RESUBMIT',
    created: '2023-10-31T16:26:34.524015Z',
    updated: '2023-10-31T16:26:34.524068Z'
  },
  {
    id: '9d27ce0c-1692-4b37-889d-a2c0f3a7cd3412',
    user: '8f27ce0c-1692-4b37-889d-a2c0f3a7f6789',
    description: 'Lorem isum dorelar ideiad isum dorelar ideiad isumelar heloo ',
    job_contract: '7f27ce0c-1692-4b37-889d-a2c0f3a7f6745',
    start_time: '09:00',
    end_time: '17:00',
    total_hours: 8,
    amount: 640,
    payment_status: 'REJECTED',
    timesheet_status: 'RESUBMIT',
    created: '2023-10-31T16:26:34.524015Z',
    updated: '2023-10-31T16:26:34.524068Z'
  },
  {
    id: '9d27ce0c-1692-4b37-889d-a2c0f3a7cd3431',
    user: '8f27ce0c-1692-4b37-889d-a2c0f3a7f6789',
    description: 'Lorem isum dorelar ideiad isum dorelar ideiad isumelar heloo',
    job_contract: '7f27ce0c-1692-4b37-889d-a2c0f3a7f6745',
    start_time: '09:00',
    end_time: '17:00',
    total_hours: 8,
    amount: 640,
    payment_status: 'PROCESSING',
    timesheet_status: 'SUBMIT HOURS',
    created: '2023-10-31T16:26:34.524015Z',
    updated: '2023-10-31T16:26:34.524068Z'
  }
];

export const Fixed_timeSheet: Fixed_timeSheet[] = [
  {
    id: '9d27ce0c-1692-4b37-889d-a2c0f3a7cd341',
    user: '8f27ce0c-1692-4b37-889d-a2c0f3a7f6789',
    title: 'Design Approved',
    due_date: '2023-12-31',
    amount: 640,
    payment_status: 'PAID',
    stripe_transaction_id: 'cbkwbdciuwcdwgci',
    created: '2023-10-31T16:26:34.524015Z',
    updated: '2023-10-31T16:26:34.524068Z'
  },
  {
    id: '9d27ce0c-1692-4b37-889d-a2c0f3a7cd3411',
    user: '8f27ce0c-1692-4b37-889d-a2c0f3a7f6789',
    title: 'Upfront',
    due_date: '2023-12-31',
    amount: 640,
    payment_status: 'REQUESTED',
    stripe_transaction_id: 'cbkwbdciuwcdwgci',
    created: '2023-10-31T16:26:34.524015Z',
    updated: '2023-10-31T16:26:34.524068Z'
  },
  {
    id: '9d27ce0c-1692-4b37-889d-a2c0f3a7cd3412',
    user: '8f27ce0c-1692-4b37-889d-a2c0f3a7f6789',
    title: 'POC',
    due_date: '2023-12-31',
    amount: 640,
    payment_status: 'REQUESTED',
    stripe_transaction_id: 'cbkwbdciuwcdwgci',
    created: '2023-10-31T16:26:34.524015Z',
    updated: '2023-10-31T16:26:34.524068Z'
  },
  {
    id: '9d27ce0c-1692-4b37-889d-a2c0f3a7cd3421',
    user: '8f27ce0c-1692-4b37-889d-a2c0f3a7f6789',
    title: 'Beta Version',
    due_date: '2023-12-31',
    amount: 640,
    payment_status: 'REQUESTED',
    stripe_transaction_id: 'cbkwbdciuwcdwgci',
    created: '2023-10-31T16:26:34.524015Z',
    updated: '2023-10-31T16:26:34.524068Z'
  },
  {
    id: '9d27ce0c-1692-4b37-889d-a2c0f3a7cd3432',
    user: '8f27ce0c-1692-4b37-889d-a2c0f3a7f6789',
    title: 'Final Approved',
    due_date: '2023-12-31',
    amount: 640,
    payment_status: 'REQUESTED',
    stripe_transaction_id: 'cbkwbdciuwcdwgci',
    created: '2023-10-31T16:26:34.524015Z',
    updated: '2023-10-31T16:26:34.524068Z'
  }
];
