import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Select,
  MenuItem,
  Paper,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useState } from 'react';
import AddFollowUpForm from './AddFollowUpForm';

export default function StudentFollowUp({ student, onBack }) {
  const [showFollowUpForm, setShowFollowUpForm] = useState(false);

  const followUpData = [
    {
      message: "Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      followUpBy: "Emily Doe",
      nextFollowUpDate: "10 Nov, 2024, 2:00 pm"
    },
    {
      message: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
      followUpBy: "Lorelai Gilmore",
      nextFollowUpDate: "30 Nov, 2024, 12:30 pm"
    },
  ];

  if (showFollowUpForm) {
    return <AddFollowUpForm student={student} onClose={() => setShowFollowUpForm(false)} />;
  }
  const cellStyle = {
    borderRight: '1px solid #e0e0e0',
    '&:last-child': {
      borderRight: 'none'
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      {/* Previous code remains the same until the end of the follow-up section */}
      {/* ... */}
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, color: "#5F5874" }}>
          <IconButton onClick={onBack} sx={{ color: "#79757f" }}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" sx={{ fontWeight: "bold", fontSize:'22px', color:'#64558f' }}>
            {student.studentName}, {student.class}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: "bold", fontSize: "17.4px" ,marginLeft: 6}}
          >
            Enquiry Date:{" "}
            <span style={{ fontWeight: "normal", fontSize: "16.9px",  }}>
              {student.dateTime}
            </span>
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: "bold", fontSize: "17.4px", marginLeft: 1 }}
          >
            Last Follow Up:{" "}
            <span style={{ fontWeight: "normal", fontSize: "16.9px" }}>
              {student.followUp}
            </span>
            </Typography>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: "bold", fontSize: "17.4px", marginLeft: 1 }}
          >
            Created by:{" "}
            <span style={{ fontWeight: "normal", fontSize: "16.9px" }}>
            {student.createdBy}
            </span>
          </Typography>
        
          <Select
            value={student.status}
            size="small"
            sx={{
              width: "150px",
              "& .MuiSelect-select": { py: 1 },
            }}
          >
            <MenuItem value="Follow up">Follow up</MenuItem>
            <MenuItem value="Joined">Joined</MenuItem>
            <MenuItem value="School Toured">School Toured</MenuItem>
          </Select>
        
        </Box>
      </Box>

      {/* Student Info */}
      <Box sx={{ display: "flex", gap: 10, mb: 4 }}>
  <Box sx={{ flex: 1 }}>
    <Typography variant="subtitle1" color="textSecondary" sx={{fontWeight:'bold', color: '#7d5261', fontSize: "17.4px"}}>
      Parent Name:{" "}
      <span style={{ fontWeight: "normal", fontSize: "16.9px" , color:'black'}}>
              {student.parentName}
            </span>
    </Typography>
    

    
  </Box>
  <Box sx={{ flex: 1, mr: 100 }}>
    <Typography variant="subtitle1" color="textSecondary"sx={{fontWeight:'bold', color: '#7d5261', fontSize: "17.4px"}}>
      Phone Number:{" "}
      <span style={{ fontWeight: "normal", fontSize: "16.9px" , color:'black'}}>
              {student.phoneNumber}
            </span>
    </Typography>
  </Box>
</Box>

 {/* Follow Up Section */}
 <Box sx={{ mb: 4 }}>
        <Typography variant="h6" sx={{ mb: 3 , color: '#7d5261', fontWeight:'bold'}}>
          Follow Up
        </Typography>


      {/* New Table Section */}
      <TableContainer component={Paper} sx={{ mt: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
            <TableCell sx={{ ...cellStyle, fontWeight: 'bold', fontSize: '17px', color: '#7d5261',textAlign:'center' }}>Message</TableCell>
              <TableCell sx={{...cellStyle, fontWeight: 'bold', fontSize: '17px', color: '#7d5261',textAlign:'center'  }}>By</TableCell>
              <TableCell sx={{ ...cellStyle,fontWeight: 'bold', fontSize: '17px', color: '#7d5261',textAlign:'center'  }}>Next Follow Up Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {followUpData.map((row, index) => (
              <TableRow key={index}>
                <TableCell sx={{ ...cellStyle,fontSize: '15px', maxWidth: '500px', whiteSpace: 'normal' ,textAlign:'center' }}>
                  {row.message}
                  <br/>
                  <Button
                  variant="outlined"
                  onClick={() => setShowFollowUpForm(true)}
                  sx={{
                    mt:2,
                    borderRadius: "20px",
                    borderColor: "#1FB892",
                    color: "#1FB892",
                    fontSize: "14px",
                    "&:hover": {
                      borderColor: "#1FB892",
                      backgroundColor: "#1FB892",
                      color: "white",
                    },
                  }}
                >
                  Next Follow Up
                </Button>
                </TableCell>
                <TableCell sx={{...cellStyle, fontSize: '15px',textAlign:'center'  }}>{row.followUpBy}</TableCell>
                <TableCell sx={{ ...cellStyle,fontSize: '15px',textAlign:'center'  }}>{row.nextFollowUpDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
    </Box>
  );
}