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
      (x) => x.expirationDate >= fromDate && x.expirationDate <= toDate
    );
    onFilter(newData);
    console.log({newData});
  };
  return (
    <div className={classes.filterContainer}>
      <p>Expiration Date</p>

      <p>From</p>
      <DatePicker selected={fromDate} onChange={date => setFromDate(date as Date)} />
      <p>To</p>
      <DatePicker selected={toDate} onChange={date => setToDate(date as Date)} />

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
