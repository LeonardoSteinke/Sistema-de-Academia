import React from 'react';
import { TextField as MaterialTextField } from '@material-ui/core';

const TextField = ({
  disabled,
  name,
  label,
  value,
  setValue,
}) => {
  return (
    <MaterialTextField
      variant="outlined"
      disabled={disabled}
      name={name}
      label={label}
      value={value}
      fullWidth
      onChange={e => setValue(e.target.value)}
    />
  );
};

export default TextField;