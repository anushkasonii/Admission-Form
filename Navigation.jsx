import { Tabs, Tab, Box } from '@mui/material';
import { useState } from 'react';

export default function Navigation({ onTabChange }) {
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
    onTabChange(newValue);
  };

  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        sx={{
          '& .MuiTab-root': {
            textTransform: 'none', 
            fontSize:'22px'
          },
          '& .Mui-selected': {
            color: 'black', 
          },
          '& .MuiTab-root:not(.Mui-selected)': {
            color: 'grey', 
          },
        }}
        TabIndicatorProps={{
          style: { display: 'none' }, 
        }}
      >
        <Tab label="Admission Form" />
        <Tab label="Admission Details" />
      </Tabs>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          width: '1000vw',
          marginLeft:'-230px',
          mb: 2,
        }}
      />
    </Box>
  );
}