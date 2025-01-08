import { Tabs, Tab, Box, Button } from '@mui/material';
import { useLocation, Link, useNavigate } from 'react-router-dom';

export default function Navigation() {
  const location = useLocation();
  const navigate = useNavigate(); // React Router's hook to programmatically navigate
  const showCreateEnquiry = location.pathname === "/"; // Show button only on Admission Details

  // List of paths where headers should be hidden
  const hideTabsPaths = ["/form-preview", "/qr-code"];
  const showTabs = !hideTabsPaths.includes(location.pathname);

  return (
    <Box sx={{ position: "relative" }}>
      {showTabs && (
        <Tabs
          value={location.pathname}
          sx={{
            '& .MuiTab-root': { textTransform: 'none', fontSize: '22px' },
            '& .Mui-selected': { color: 'black' },
            '& .MuiTab-root:not(.Mui-selected)': { color: 'grey' },
          }}
          TabIndicatorProps={{
            style: { display: 'none' },
          }}
        >
          <Tab
            label="Admission Form"
            value="/admission-form"
            component={Link}
            to="/admission-form"
          />
          <Tab
            label="Admission Details"
            value="/"
            component={Link}
            to="/"
          />
        </Tabs>
      )}
      {showCreateEnquiry && showTabs && (
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
            onClick={() => window.open('/form-preview', '_blank')} // Open FormPreview in a new tab
          >
            Create Enquiry
          </Button>
        </Box>
      )}
      {showTabs && (
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
      )}
    </Box>
  );
}
