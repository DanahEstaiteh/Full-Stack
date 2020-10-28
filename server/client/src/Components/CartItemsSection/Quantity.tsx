import React, { useState } from 'react';
import AddBoxIcon from '@material-ui/icons/AddBox';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import { TextField } from '@material-ui/core';
import { cartItemStyles } from './Style';
import { useEffect } from 'react';

interface QuantityPropsType {
  onChangeQuantity: (count: number) => void;
}

const Quantity: React.FC<QuantityPropsType> = (props) => {
  const classes = cartItemStyles();
  const [count, setCount] = useState<number>(1);
  const { onChangeQuantity } = props;
  const handleIncrease = () => {
    let newCount = count + 1;
    setCount(newCount);
  };
  const handleDecrease = () => {
    let newCount = count - 1;
    newCount > 0 ? setCount(newCount) : setCount(1);
  };
  const handleCountChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    let newCount = e.target.value ? parseInt(e.target.value, 10) : 1;
    setCount(newCount);
  };

  useEffect(() => {
    onChangeQuantity(count);
  }, [count]);
  return (
    <div className={classes.quantity}>
      <AddBoxIcon className={classes.quantityIcon} onClick={handleIncrease} />
      <TextField
        variant="outlined"
        className={classes.quantityText}
        value={count}
        onChange={(
          e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        ) => handleCountChange(e)}
      />
      <IndeterminateCheckBoxIcon
        className={classes.quantityIcon}
        onClick={handleDecrease}
      />
    </div>
  );
};
export default Quantity;
