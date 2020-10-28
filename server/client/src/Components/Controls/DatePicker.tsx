import React, { useState } from 'react';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';

interface DatePickerProps {
  onChange: (date: Date) => void;
  name: string;
  minDate: Date;
}

const DatePicker: React.FC<DatePickerProps> = (props) => {
  const [selectedDate, handleDateChange] = useState(new Date());
  const { onChange, name, minDate } = props;

  const onChangeFirst = (date: Date) => {
    handleDateChange(date);
    onChange(selectedDate);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        clearable
        name={name}
        value={selectedDate}
        
        onChange={(date) => onChangeFirst(date as Date)}
        minDate={minDate}
        format="dd/MM/yyyy"
      />
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
