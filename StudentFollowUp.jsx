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
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useState } from 'react';
import AddFollowUpForm from './AddFollowUpForm';

export default function StudentFollowUp({ student, onBack }) {
    const [showFollowUpForm, setShowFollowUpForm] = useState(false);

    if (showFollowUpForm) {
      return <AddFollowUpForm student={student} onClose={() => setShowFollowUpForm(false)} />;
    }
  return (
    <Box sx={{ p: 3 }}>
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
    <Typography variant="subtitle1" color="textSecondary" sx={{fontWeight:'bold', color: '#7d5261'}}>
      Parent Name
    </Typography>
    <Typography variant="body1" sx={{ border: "1px solid #e0e0e0", padding: "8px", borderRadius: "4px", fontSize:'16px' }}>
      {student.parentName}
    </Typography>
  </Box>
  <Box sx={{ flex: 1, mr: 100 }}>
    <Typography variant="subtitle1" color="textSecondary"sx={{fontWeight:'bold', color: '#7d5261'}}>
      Phone Number
    </Typography>
    <Typography variant="body1" sx={{ border: "1px solid #e0e0e0", padding: "8px", borderRadius: "4px", fontSize:'16px' }}>
      {student.phoneNumber}
    </Typography>
  </Box>
</Box>


      {/* Follow Up Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" sx={{ mb: 3 , color: '#7d5261', fontWeight:'bold'}}>
          Follow Up
        </Typography>

        {/* Follow Up Items */}
        {[
          {
            date: "5 Nov, 2024, 2:00 pm",
            message:
              "Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.   ",
            followUpBy: "Emily Doe",
          },
          {
            date: "25 Nov, 2024, 12:30 pm",
            message:
              "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.",
            followUpBy: "Lorelai Gilmore",
          },
        ].map((followUp, index) => (
          <Paper
            key={index}
            elevation={1}
            sx={{
              p: 2,
              mb: 2,
              borderRadius: 2,
              backgroundColor: "#f8f9fa",
            }}
          >
            <Grid container spacing={37}>
              <Grid item xs={8}>
                <Typography sx={{ mb: 2 , fontSize:'15.7px'}}>{followUp.message}</Typography>
                <Button
                  variant="outlined"
                  onClick={() => setShowFollowUpForm(true)}
                  sx={{
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
              </Grid>
              <Grid item xs={3.8}>
                <Box sx={{ textAlign: "right" }}>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", color: "#2C4A58", fontSize:'19px' }}
                  >
                    {followUp.followUpBy}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#666", fontSize:'15px' }}>
                    {followUp.date}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}
