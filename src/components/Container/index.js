import React from 'react';
import { useStyles } from './styles';

const Container = ({ children }) => {
  const classes = useStyles();
  return <main className={classes.layout}>{children}</main>;
};

export default Container;
