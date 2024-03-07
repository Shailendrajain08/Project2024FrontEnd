export interface IPaySumData {
  req_amt: string;
  in_progress_amt: string;
  released_amt: string;
}

export interface IFixedPriceData {
  id: string;
  client: string;
  coder: string;
  title: string;
  due_date: string;
  amount: number;
  payment_status: 'Done' | 'Processing' | 'PAY NOW';
  stripe_transaction_id: string;
  created: string;
  updated: string;
  milestone_desc: string;
  coder_name: string;
  milestone_detail: string;
  milestone_status: 'Pending' | 'Completed';
}

export const paySumData: IPaySumData[] = [
  {
    req_amt: '0.00 USD',
    in_progress_amt: '0.00 USD',
    released_amt: '0.00 USD'
  }
];

export const fixedPriceData: IFixedPriceData[][] = [
  [
    {
      id: '9d27ce0c-1692-4b37-889d-a2c0f3a7cd34',
      client: '8f27ce0c-1692-4b37-889d-a2c0f3a7f6789',
      coder: '9f27ce0c-1692-4b37-889d-a2c0f3a7f67ff',
      title: 'test milestone',
      due_date: '2023-10-31',
      amount: 600,
      payment_status: 'Done',
      stripe_transaction_id: 'cbkwbdciuwcdwgci',
      created: '2023-10-31T16:26:34.524015Z',
      updated: '2023-10-31T16:26:34.524068Z',
      // extra fields added by msn.
      milestone_desc: 'Lorem isum dorelar ideiad isum dorelar ideiad isumelar ',
      coder_name: 'Jocelyn',
      milestone_detail: '',
      milestone_status: 'Pending'
    }
  ],
  [
    {
      id: '9d27ce0c-1692-4b37-889d-a2c0f3a7cd34',
      client: '8f27ce0c-1692-4b37-889d-a2c0f3a7f6789',
      coder: '9f27ce0c-1692-4b37-889d-a2c0f3a7f67ff',
      title: 'test milestone',
      due_date: '2023-12-31',
      amount: 600,
      payment_status: 'Processing',
      stripe_transaction_id: 'cbkwbdciuwcdwgci',
      created: '2023-10-31T16:26:34.524015Z',
      updated: '2023-10-31T16:26:34.524068Z',
      milestone_desc: 'Lorem isum dorelar ideiad isum dorelar ideiad isumelar ',
      coder_name: 'Lydia',
      milestone_detail: '',
      milestone_status: 'Pending'
    }
  ],
  [
    {
      id: '9d27ce0c-1692-4b37-889d-a2c0f3a7cd34',
      client: '8f27ce0c-1692-4b37-889d-a2c0f3a7f6789',
      coder: '9f27ce0c-1692-4b37-889d-a2c0f3a7f67ff',
      title: 'test milestone',
      due_date: '2023-12-31',
      amount: 600,
      payment_status: 'PAY NOW',
      stripe_transaction_id: 'cbkwbdciuwcdwgci',
      created: '2023-10-31T16:26:34.524015Z',
      updated: '2023-10-31T16:26:34.524068Z',
      milestone_desc: 'Lorem isum dorelar ideiad isum dorelar ideiad isumelar ',
      coder_name: 'Carter',
      milestone_detail: '',
      milestone_status: 'Completed'
    }
  ],
  [
    {
      id: '9d27ce0c-1692-4b37-889d-a2c0f3a7cd34',
      client: '8f27ce0c-1692-4b37-889d-a2c0f3a7f6789',
      coder: '9f27ce0c-1692-4b37-889d-a2c0f3a7f67ff',
      title: 'test milestone',
      due_date: '2023-12-31',
      amount: 600,
      payment_status: 'PAY NOW',
      stripe_transaction_id: 'cbkwbdciuwcdwgci',
      created: '2023-10-31T16:26:34.524015Z',
      updated: '2023-10-31T16:26:34.524068Z',
      milestone_desc: 'Lorem isum dorelar ideiad isum dorelar ideiad isumelar ',
      coder_name: 'Carter',
      milestone_detail: '',
      milestone_status: 'Completed'
    }
  ],
  [
    {
      id: '9d27ce0c-1692-4b37-889d-a2c0f3a7cd34',
      client: '8f27ce0c-1692-4b37-889d-a2c0f3a7f6789',
      coder: '9f27ce0c-1692-4b37-889d-a2c0f3a7f67ff',
      title: 'test milestone',
      due_date: '2023-12-31',
      amount: 600,
      payment_status: 'Done',
      stripe_transaction_id: 'cbkwbdciuwcdwgci',
      created: '2023-10-31T16:26:34.524015Z',
      updated: '2023-10-31T16:26:34.524068Z',
      milestone_desc: 'Lorem isum dorelar ideiad isum dorelar ideiad isumelar ',
      coder_name: 'Jocelyn',
      milestone_detail: '',
      milestone_status: 'Pending'
    }
  ]
];
