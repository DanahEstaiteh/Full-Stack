import TextField from '@material-ui/core/TextField/TextField';
import React from 'react';
import { Errors } from '../../Types';

interface InputProps {
  id: string;
  name: string;
  label: string;
  value: string | number;
  error: string | undefined;
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = (props) => {
  const { name, label, value, error = null, onChange, type, ...others } = props;
  return (
    <TextField
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      {...others}
      {...(error && { error: true, helperText: error })}
    />
  );
};

export default Input;
