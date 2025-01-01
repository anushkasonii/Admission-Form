import { Tabs, Tab, Box, Button } from '@mui/material';
import { useState } from 'react';

export default function Navigation({ onTabChange }) {
  const [value, setValue] = useState(0);
  const [showCreateEnquiry, setShowCreateEnquiry] = useState(false);

  const handleChange = (e, newValue) => {
    setValue(newValue);
    onTabChange(newValue);
    setShowCreateEnquiry(newValue === 1); // Show button only on Admission Details
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        sx={{
          '& .MuiTab-root': { textTransform: 'none', fontSize: '22px' },
          '& .Mui-selected': { color: 'black' },
          '& .MuiTab-root:not(.Mui-selected)': { color: 'grey' },
        }}
        TabIndicatorProps={{
          style: { display: 'none' },
        }}
      >
        <Tab label="Admission Form" />
        <Tab label="Admission Details" />
      </Tabs>
      {showCreateEnquiry && (
        <Box
          sx={{
            position: "absolute",
            right: 20,
            top: 0,
          }}
        >
          <Button
            variant="outlined"
            sx={{
              borderRadius: "20px",
              borderColor: "#1FB892",
              color: "#1FB892",
              fontSize: "17px",
              backgroundColor: "white",
              "&:hover": {
                borderColor: "#1FB892",
                backgroundColor: "#1FB892",
                color: "white",
              },
            }}
          >
            Create Enquiry
          </Button>
        </Box>
      )}
      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          width: '100%',
        }}
      />
    </Box>
  );
}
