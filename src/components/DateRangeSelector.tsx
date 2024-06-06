import React from 'react';
import { Box, Button } from '@mui/material';

const DateRangeSelector = () => {
  return (
    <Box mb={2} display="flex" justifyContent="center" color="white">
      <Button variant="contained" style={{ marginRight: '8px' }}>
        Today
      </Button>
      <Button variant="contained" style={{ marginRight: '8px' }}>
        Week
      </Button>
      <Button variant="contained">
        Month
      </Button>
    </Box>
  );
};

export default DateRangeSelector;
