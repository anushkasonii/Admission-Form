import {
  Box,
  TextField,
  MenuItem,
  Typography,
  Button,
  Checkbox,
  Divider,
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import QrCodeIcon from '@mui/icons-material/QrCode';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import FormActions from './FormActions';

export default function AdmissionForm() {
  const [additionalFields, setAdditionalFields] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleAddField = () => {
    setAdditionalFields([...additionalFields, { id: Date.now() }]);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleEdit = () => {
    setIsEditing(true);
    setIsSubmitted(false);
  };

  return (
    <Box component="form" sx={{ maxWidth: 500, mx: 'auto', ml:'10px', mt:5 }}>
    <Typography variant="h6" sx={{ mb: 3 , color:'#3f2189',}}>Required Field</Typography>
      
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <Checkbox checked={true} color="primary" />
          <TextField
            fullWidth
            label="Student Name"
            variant="outlined"
            disabled
          />
        </Box>

        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <Checkbox checked={true} color="primary" />
          <TextField
            select
            fullWidth
            label="Select Class "
            variant="outlined"
            disabled
          >
            <MenuItem value="class1">Class 1</MenuItem>
            <MenuItem value="class2">Class 2</MenuItem>
            
          </TextField>
          <Button 
            variant="outlined" 
            sx={{
              borderRadius: "18px",
              marginBottom: "15px",
              marginRight: "24px",
              marginTop: "10px",
              borderColor: "#1FB892",
              color: "#1FB892",
              fontSize: "16px",
              backgroundColor: "white",
              width:'200px',
              alignItems: "center",
              "&:hover": {
                borderColor: "#1FB892",
            backgroundColor: "#1FB892",
            color: "white",
              },
            }}
          >
            Create Class
          </Button>
        </Box>

        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <Checkbox checked={true} color="primary" />
          <TextField
            fullWidth
            label="Phone Number"
            variant="outlined"
            disabled
          />
        </Box>

        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <Checkbox checked={true} color="primary" />
          <TextField
            fullWidth
            label="Date Of Birth"
            variant="outlined"
            disabled
          />
        </Box>

        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <Checkbox checked={true} color="primary" />
          <TextField
            fullWidth
            label="Parent Name"
            variant="outlined"
            disabled
          />
        </Box>

        {/* <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, my: 2 }}>
          <Divider sx={{ flex: 1 }} />
          <Typography color="textSecondary">OR</Typography>
          <Divider sx={{ flex: 1 }} />
        </Box>

        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <Checkbox color="primary" />
          <TextField
            fullWidth
            label="Mother's Name"
            variant="outlined"
            disabled={isSubmitted && !isEditing}
          />
        </Box> */}

        {additionalFields.map((field) => (
          <Box key={field.id} sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <Checkbox color="primary" />
            <TextField
              fullWidth
              label="Add Field"
              variant="outlined"
              disabled={isSubmitted && !isEditing}
            />
          </Box>
        ))}

        {/* {!isSubmitted && (
          // <Button
          //   startIcon={<AddCircleIcon />}
          //   variant="outlined"
          //   sx={{ width: 'fit-content' }}
          //   onClick={handleAddField}
          // >
          //   Add Field
          // </Button>
        )} */}
 <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4 }}>
        {!isSubmitted ? (
          <Button
            variant="outlined"
            fullWidth
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
            onClick={handleSubmit}
          >
            Submit Details
          </Button>
          
        ) : (
          <FormActions onEdit={handleEdit} />
        )}
        </Box>
      </Box>
    </Box>
  );
}