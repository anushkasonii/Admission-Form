import { Box, Button, Typography } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import QrCodeIcon from '@mui/icons-material/QrCode';
import EditIcon from '@mui/icons-material/Edit';

export default function FormActions({ onEdit }) {
  const handleCopyLink = async () => {
    const formUrl = `${window.location.origin}/form-preview`;
    try {
      await navigator.clipboard.writeText(formUrl);
      alert('Link copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const handleDownloadQR = () => {

    console.log('Download QR clicked');
  };

  return (
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'flex-end', 
      gap: 2, 
      mt: 4,
      alignItems: 'flex-start'
    }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Button 
          variant="outlined"
          onClick={handleCopyLink}
          sx={{ minWidth: '50px', height: '50px' }}
        >
          <ContentCopyIcon />
        </Button>
        <Typography variant="caption" sx={{ mt: 1 }}>
          Copy Link
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Button 
          variant="outlined"
          onClick={handleDownloadQR}
          sx={{ minWidth: '50px', height: '50px' }}
        >
          <QrCodeIcon />
        </Button>
        <Typography variant="caption" sx={{ mt: 1 }}>
          Download QR Code
        </Typography>
      </Box>

      <Button 
        variant="outlined"
        onClick={onEdit}
        startIcon={<EditIcon />}
        sx={{ height: '50px' }}
      >
        Edit
      </Button>
    </Box>
  );
}