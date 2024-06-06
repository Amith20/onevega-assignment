import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import Graph from './Graph';


const PromptCard = ({ title, date }:any) => {
  return (
    <Card style={{borderRadius:'15px'}}>
      <CardContent>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          {date}
        </Typography>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Box display="flex" justifyContent="center" mt={2}>
          <Graph/>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PromptCard;
