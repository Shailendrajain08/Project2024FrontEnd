export interface ITransactionTable {
  columns: any[];
  data: any;
  pageSize: number;
  pageSizeOptions: number[];
}

export interface ITransactionFilter {
  handleJobFilter: (value: string, type: string) => void;
  handleCoderFilter: (value: string, type: string) => void;
  handleDateFilter: (fromDate: any, toDate: any) => void;
  handleCustomDateFilter: (value: string, type: string) => void;
  data: DataI[];
  isShowCustomDate?: boolean;
}

export interface IFilterSelect {
  id: string;
  label: string;
  defaultValue?: string;
  options: any[];
  callbackFnc?: (value: string, id: string) => void;
  clearvalues?: boolean;
}

export interface DataI {
  [key: string]: string | number;
}

export type handlePaymentStatusI = (status: string, rowPrams: DataI) => void;
export interface filterObjI {
  [key: string]: any;
}

export type tableValuesI = string | any;
