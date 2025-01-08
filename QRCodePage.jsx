import { Box, Typography, Paper, Button } from '@mui/material';
import { QRCodeCanvas } from 'qrcode.react';

export default function QRCodePage() {
  const formUrl = window.location.origin + '/form-preview';

  return (
    <Box
      sx={{
        maxWidth: 600,
        mx: 'auto',
        mt: 5,
        p: 4,
        border: '1px solid #ccc',
        borderRadius: '8px',
        bgcolor: '#f9f9f9',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          mb: 3,
          color: '#3f2189',
          fontWeight: 'bold',
        }}
      >
        QR Code
      </Typography>

      <Paper
        sx={{
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          bgcolor: '#ffffff',
          border: '1px solid #ddd',
          borderRadius: '8px',
        }}
      >
        <Typography variant="h5" sx={{ color: '#3f2189', fontWeight: 'bold' }}>
          School
        </Typography>

        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            mb: 3,
            color: '#666666',
          }}
        >
          Village Baghru Kalan, Tehsil Safidon, District Jind
        </Typography>

        <Typography
          variant="h6"
          sx={{
            textAlign: 'center',
            mb: 3,
            fontWeight: 'bold',
            color: '#3f2189',
          }}
        >
          Hello, Visitors! Please Scan this QR Code
        </Typography>

        <Box
          sx={{
            p: 2,
            borderRadius: 2,
            bgcolor: '#ffffff',
            border: '1px solid #ddd',
            mb: 3,
          }}
        >
          <QRCodeCanvas value={formUrl} size={200} />
        </Box>

        <Paper
          sx={{
            p: 3,
            bgcolor: '#f5f5f5',
            width: '100%',
            mb: 4,
            borderRadius: '8px',
            border: '1px solid #ddd',
          }}
        >
          <Box component="ol" sx={{ m: 0, pl: 3 }}>
            <Typography component="li" sx={{ mb: 1, color: '#333' }}>
              Scan the QR code with your smartphone's camera.
            </Typography>
            <Typography component="li" sx={{ mb: 1, color: '#333' }}>
              Enter your details.
            </Typography>
            <Typography component="li" sx={{ color: '#333' }}>
              Show the confirmation message to our staff.
            </Typography>
          </Box>
        </Paper>

        <Typography
          sx={{
            mb: 2,
            color: '#666',
            textAlign: 'center',
          }}
        >
          Thank you for your cooperation.
        </Typography>

        <Paper
          sx={{
            p: 2,
            width: '100%',
            textAlign: 'center',
            border: '1px solid #ddd',
            borderRadius: '8px',
          }}
        >
          <Typography sx={{ mb: 1, color: '#666' }}>School Helpline</Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              color: '#1FB892',
            }}
          >
            8708931755
          </Typography>
        </Paper>
      </Paper>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 4,
        }}
      >
        <Button
          variant="outlined"
          sx={{
            borderRadius: '18px',
            borderColor: '#1FB892',
            color: '#1FB892',
            fontSize: '16px',
            backgroundColor: 'white',
            px: 4,
            py: 1,
            '&:hover': {
              borderColor: '#1FB892',
              backgroundColor: '#1FB892',
              color: 'white',
            },
          }}
        >
          Share QR Code
        </Button>
      </Box>
    </Box>
  );
}
