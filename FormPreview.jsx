import { Box, Typography, TextField, Button, Checkbox, FormControlLabel, Paper } from '@mui/material';

export default function FormPreview() {
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* Left Side - Logo and School Info */}
      <Box
        sx={{
          width: '50%',
          bgcolor: '#f5f5f5',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          p: 4
        }}
      >
        <Box
          component="img"
          src="/placeholder-logo.png"
          alt="School Logo"
          sx={{
            width: 200,
            height: 200,
            mb: 2
          }}
        />
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
          School Logo
        </Typography>
        <Typography variant="h6">
          Gurgaon, Haryana
        </Typography>
      </Box>

      {/* Right Side - Form */}
      <Box sx={{ width: '50%', p: 4 }}>
        <Typography variant="h5" sx={{ mb: 4, fontWeight: 'bold' }}>
          Admission Form
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <TextField
            fullWidth
            label="Student Name"
            variant="outlined"
          />

          <TextField
            fullWidth
            select
            label="Select Class - Admission"
            variant="outlined"
          />

          <TextField
            fullWidth
            label="Phone Number"
            variant="outlined"
          />

          <TextField
            fullWidth
            label="Father Name"
            variant="outlined"
          />

          <Typography align="center" sx={{ my: 2 }}>
            OR
          </Typography>

          <TextField
            fullWidth
            label="Mother Name"
            variant="outlined"
          />

          <FormControlLabel
            control={<Checkbox />}
            label="I authorize School Name to contact me with updates via email / SMS / Whatsapp/ Call"
          />

          <Button
            variant="outlined"
            fullWidth
            sx={{
              borderRadius: "18px",
              borderColor: "#1FB892",
              color: "#1FB892",
              fontSize: "16px",
              py: 1.5,
              "&:hover": {
                borderColor: "#1FB892",
                backgroundColor: "#1FB892",
                color: "white",
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