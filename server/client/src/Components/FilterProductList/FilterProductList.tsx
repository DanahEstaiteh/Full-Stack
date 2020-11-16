import DatePicker from 'react-datepicker';
import React, { useState } from 'react';
import { FilterProductStyles } from './style';
import Controls from '../Controls';

interface filterPropsType {
    onFilter: (fromDate: Date, toDate: Date) => void;
}

const FilterProductList: React.FC<filterPropsType> = (props) => {
    const classes = FilterProductStyles();
    const [fromDate, setFromDate] = useState<Date>(new Date());
    const [toDate, setToDate] = useState<Date>(new Date());
    const { onFilter } = props;

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
                onClick={() => onFilter(fromDate, toDate)}
                size="medium"
                color="default"
                type="button"
            />
        </div>
    );
};

export default FilterProductList;
