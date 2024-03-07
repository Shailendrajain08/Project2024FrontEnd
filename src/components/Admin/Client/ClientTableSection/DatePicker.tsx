import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

interface DatePickerValueProps {
  onDateChange: (selectedDate: Dayjs | null) => void;
}

const DatePickerValue: React.FC<DatePickerValueProps> = ({ onDateChange }) => {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17'));

  const handleDateChange = (newValue: Dayjs | null) => {
    setValue(newValue);
    onDateChange(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker', 'DatePicker']}>
        <DatePicker value={value} onChange={handleDateChange} />
      </DemoContainer>
    </LocalizationProvider>
  );
};
export default DatePickerValue;
