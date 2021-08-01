import React from 'react';
import { Button as MaterialButton } from '@material-ui/core';

const Button = ({ text, color, variant, onClick }) => {
  return (
    <MaterialButton variant={variant} color={color} onClick={onClick}>
      {text}
    </MaterialButton>
  );
};

Button.defaultProps = {
  variant: 'contained',
};

export default Button;
