import {
    Box,
    TextField,
    MenuItem,
    Typography,
    Button,
    Checkbox,
    FormControlLabel,
    Divider,
  } from '@mui/material';
  import AddCircleIcon from '@mui/icons-material/AddCircle';
  import { useState } from 'react';

  export default function AdmissionForm() {
    const [additionalFields, setAdditionalFields] = useState([]);
  
    const handleAddField = () => {
      setAdditionalFields([...additionalFields, { id: Date.now() }]);
    };


    return (
      <Box component="form" sx={{ maxWidth: 500, mx: 'auto', ml:'10px' }}>
        <Typography variant="h6" sx={{ mb: 2 , color:'#3f2189',}}>Required Field</Typography>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.7 }}>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <Checkbox checked={true} color="primary" />
            <TextField
              fullWidth
              label="Student Name"
              variant="outlined"
            />
          </Box>
  
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <Checkbox  checked={true} color="primary" />
            <TextField
              select
              fullWidth
              label="Select Class"
              variant="outlined"
            >
              <MenuItem value="class1">Class 1</MenuItem>
              <MenuItem value="class2">Class 2</MenuItem>
            </TextField>
            
          </Box>
  
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <Checkbox checked={true} color="primary" />
            <TextField
              fullWidth
              label="Phone Number"
              variant="outlined"
            />
          </Box>
  
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <Checkbox checked={true} color="primary" />
            <TextField
              fullWidth
              label="Father Name"
              variant="outlined"
            />
          </Box>
  
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, my: 2 }}>
            <Divider sx={{ flex: 1 }} />
            <Typography color="textSecondary">OR</Typography>
            <Divider sx={{ flex: 1 }} />
          </Box>
  
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <Checkbox color="primary" />
            <TextField
              fullWidth
              label="Mother Name"
              variant="outlined"
            />
          </Box>
  
          {additionalFields.map((field) => (
          <Box key={field.id} sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <Checkbox color="primary" />
            <TextField
              fullWidth
              label="Add Field"
              variant="outlined"
            />
          </Box>
        ))}

        <Button
          startIcon={<AddCircleIcon />}
          variant="outlined"
          sx={{ width: 'fit-content' }}
          onClick={handleAddField}
        >
          Add Field
        </Button>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4 }}>
        <Button

              variant="outlined"
              sx={{
                borderRadius: "18px",
                marginBottom: "15px",
                marginRight: "24px",
                marginTop: "10px",
                borderColor: "#1FB892",
                color: "#1FB892",
                fontSize: "18px",
                backgroundColor: "white",
                width:'230px',
                alignItems: "center",
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
        
  
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 4 }}>
          <Button
          variant="outlined"
          sx={{
            borderColor: "#1FB892",
            color: "#1FB892",
            fontSize: "17px",
            backgroundColor: "white",
            alignItems: "center",
            borderRadius: "20px",
            paddingX: 2.5,
            "&:hover": {
              borderColor: "#1FB892",
              backgroundColor: "#1FB892",
              color: "white",
            },
          }}
        
        >
          Copy Link
        </Button>
        <Button
          variant="outlined"
          sx={{
            borderColor: "#1FB892",
            color: "#1FB892",
            fontSize: "17px",
            backgroundColor: "white",
            alignItems: "center",
            borderRadius: "20px",
            paddingX: 2.5,
            "&:hover": {
              borderColor: "#1FB892",
              backgroundColor: "#1FB892",
              color: "white",
            },
          }}
        
        >
          Download QR Code
        </Button>
            
          </Box>
        </Box>
        
      </Box>
      
    );
    
  }
  