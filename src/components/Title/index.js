import React from 'react';
import { Typography } from '@material-ui/core';

const Title = ({ title }) => {
  return (
    <Typography variant="h6" gutterBottom style={{ marginBottom: 16 }}>
      {title}
    </Typography>
  );
};

export default Title;
