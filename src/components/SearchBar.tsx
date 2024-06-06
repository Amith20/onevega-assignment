import React from 'react';
import { TextField, Box, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  return (
    <Box mb={2} display="flex" justifyContent="center">
      <TextField
        variant="outlined"
        placeholder="Search prompts"
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          style: { backgroundColor: 'white', borderRadius: '25px' },
        }}
      />
    </Box>
  );
};

export default SearchBar;
