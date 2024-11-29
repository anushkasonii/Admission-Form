import { Tabs, Tab, Box } from '@mui/material';
import { useState } from 'react';

export default function Navigation() {
  const [value, setValue] = useState(0);

  return (
    <Box>
    
      <Tabs
        value={value}
        onChange={(e, newValue) => setValue(newValue)}
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
        <Tab label="Dashboard" />
        <Tab label="Admission Form" />
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
