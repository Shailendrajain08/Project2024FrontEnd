export interface IReportTransaction {
  id: string;
  client: string;
  coder: string;
  job_contract: string;
  description: string;
  amount: number;
  transaction_status: string;
  type: string;
  invoice: string | null;
  stripe_transaction_id: string;
  created: string | number;
  updated: string;
  timesheet_status: string;
}
