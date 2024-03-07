import { DataI } from './type';

export const getOptionList = (data: DataI[], key: string) => {
  const tempOptionList: DataI[] = [{ label: 'All', value: 'All' }];
  const optionList = data.map((item: DataI) => ({
    label: item[key],
    value: item[key]
  }));
  const uniqueOptionList = [...new Set(optionList.map((item: DataI) => item.value))];
  const mapData = uniqueOptionList.map((value: string | number) => ({
    label: value,
    value: value
  }));

  return [...tempOptionList, ...mapData];
};

export const getDataRange = (value: string) => {
  const currentDate = new Date();
  const agoDate = new Date();
  agoDate.setDate(currentDate.getDate() - Number(value));
  return { currentDate, agoDate };
};

export const getfilterData = (data: DataI[], key: string, value: string) => {
  return data.filter((row: DataI) => {
    if (value === 'All') return data;
    return row[key] === value;
  });
};

export const getTimeSheetOptionList = (data: DataI[], key: string) => {
  const tempOptionList: DataI[] = [{ label: 'Select', value: '' }];
  const optionList = data.map((item: DataI) => ({
    label: item[key],
    value: item[key]
  }));
  const uniqueOptionList = [...new Set(optionList.map((item: DataI) => item.value))];
  const mapData = uniqueOptionList.map((value: string | number) => ({
    label: value,
    value: value
  }));

  return [...tempOptionList, ...mapData];
};

export const getDateFilterData = (filterData: any, value: any, fromDate: any, toDate: any) => {
  let timeDurationValue = [];
  if (value === 'All') {
    timeDurationValue = filterData;
  } else if (value === 'customDate') {
    timeDurationValue = getCustomDateFilterData(filterData, fromDate, toDate);
  } else {
    const currentDate = new Date();
    const agoDate = new Date();
    agoDate.setDate(currentDate.getDate() - Number(value));
    timeDurationValue = filterData.filter((row: any) => {
      const itemDate = new Date(row.date);
      return itemDate >= agoDate && itemDate <= currentDate;
    });
  }
  return timeDurationValue;
};

export const getCustomDateFilterData = (timeFilterData: any, fromDate: any, toDate: any) => {
  return timeFilterData.filter((item: any) => {
    const itemDate = new Date(item.date);
    return itemDate >= fromDate && itemDate <= toDate;
  });
};

export const handlePaymentClick = (
  e: any,
  status: string,
  callbackFnc: (status: string, value: DataI) => void,
  value: any
) => {
  e.stopPropagation();
  if (callbackFnc) callbackFnc(status, value);
};
