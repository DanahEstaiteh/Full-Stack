import DatePicker from 'react-datepicker';
import React, { useState } from 'react';
import { FilterProductStyles } from './style';
import Controls from '../Controls';
import { Product } from '../../Types';
import { format } from 'date-fns';

interface filterPropsType {
  onFilter: (newData:Product []) => void;
  Data: Product[];
}

const FilterProductList: React.FC<filterPropsType> = (props) => {
  const classes = FilterProductStyles();
  const [fromDate, setFromDate] = useState<Date>(new Date());
  const [toDate, setToDate] = useState<Date>(new Date());
  const { onFilter , Data} = props;
  const handleFilter = () => {
    console.log({ fromDate, toDate });
    let newData =  Data.filter(
      (x) => format(new Date(x.expirationDate), 'dd/MM/yyyy') >= format(new Date(fromDate), 'dd/MM/yyyy') && format(new Date(x.expirationDate), 'dd/MM/yyyy') <= format(new Date(toDate), 'dd/mm/yyyy')
    );
    onFilter(newData);
    console.log({newData});
    const from = format(new Date(fromDate),'dd/MM/yyyy');
    const to = format(new Date(toDate),'dd/MM/yyyy');
    console.log({from , to});
  };
  return (
    <div className={classes.filterContainer}>
      <p>Expiration Date</p>

      <p>From</p>
      <Controls.DatePicker
              name="fromDate"
              onChange={(date) => setFromDate(date as Date)}
              value={fromDate}
            />
      <p>To</p>
      <Controls.DatePicker
              name="toDate"
              onChange={(date) => setToDate(date as Date)}
             value={toDate}
            />

      <Controls.MyButton
        text="Apply Filter"
        variant="outlined"
        onClick={() => handleFilter()}
        size="medium"
        color="default"
        type="button"
      />
    </div>
  );
};

export default FilterProductList;
