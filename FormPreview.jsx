import { Box, Typography, TextField, Button, Checkbox, FormControlLabel, Paper } from '@mui/material';

export default function FormPreview() {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        bgcolor: '#f9f9f9',
      }}
    >
      {/* Left Side - Logo and School Info */}
      <Box
        sx={{
          width: '50%',
          bgcolor: '#eaf4fc',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          p: 4,
          borderRight: '1px solid #ccc',
        }}
      >
      
        <Typography variant="h5" sx={{  mb: 1 }}>
          School Logo
        </Typography>
        
      </Box>

      {/* Right Side - Form */}
      <Box
        sx={{
          width: '50%',
          p: 5,
          bgcolor: 'white',
          boxShadow: 2,
        }}
      >
        <Typography
          variant="h5"
          sx={{ mb: 2,mt:2, fontWeight: 'bold', color: '#3f2189', textAlign: 'center' , fontSize:'25px'}}
        >
          Admission Form Preview
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 , p:3}}>
          {/* Student Name */}
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            {/* <Checkbox  color="primary" /> */}
            <TextField fullWidth label="Student Name" variant="outlined" />
          </Box>

          {/* Class */}
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            {/* <Checkbox  color="primary" /> */}
            <TextField fullWidth select label="Select Class - Admission" variant="outlined" />
          </Box>

          {/* Phone Number */}
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            {/* <Checkbox  color="primary" /> */}
            <TextField fullWidth label="Phone Number" variant="outlined" />
          </Box>

          {/* Father Name */}
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            {/* <Checkbox  color="primary" /> */}
            <TextField fullWidth label="Father Name" variant="outlined" />
          </Box>

          {/* Mother Name */}
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            {/* <Checkbox  color="primary" /> */}
            <TextField fullWidth label="Mother Name" variant="outlined" />
          </Box>

          {/* Consent Checkbox */}
          <FormControlLabel
            control={<Checkbox  color="primary" sx={{ml:0}} />}
            label="I authorize School Name to contact me with updates via email / SMS / WhatsApp / Call"
            sx={{ color: '#4c4c4c', fontSize: '14px' }}
          />

          {/* Submit Button */}
          <Button
            variant="outlined"
            fullWidth
            sx={{
              borderRadius: '20px',
              borderColor: '#1FB892',
              color: '#1FB892',
              fontSize: '16px',
              py: 1.5,
              mt: 2,
              '&:hover': {
                borderColor: '#1FB892',
                backgroundColor: '#1FB892',
                color: 'white',
              },
            }}
          >
            Submit Details
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
