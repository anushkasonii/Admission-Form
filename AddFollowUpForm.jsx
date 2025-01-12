import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";





export default function AddFollowUpForm({ student, onClose, onSave }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [nextFollowUpDate, setNextFollowUpDate] = useState("");

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }).format(date);
  };
  
  const handleSave = () => {
    if (!name || !message || !nextFollowUpDate) {
      alert("Please fill in all fields.");
      return;
    }
  
    const newFollowUp = {
      message,
      followUpBy: name,
      previousFollowUpDate: student.followUp, // Auto-fetched from parent data
      nextFollowUpDate: formatDate(nextFollowUpDate), // Format the date
    };
  
    onSave(newFollowUp); // Pass data to parent
  };
  


  
  return (
    <Paper sx={{ p: 4, maxWidth: 800, mx: "auto", mt: 4 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}>
      <IconButton onClick={onClose} sx={{ color: "#79757f", ml: -4 }}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#64558f" }}>
          Add Follow Up - {student.studentName}
        </Typography>
      </Box>

      {/* Your Name */}
      <TextField
        fullWidth
        label="Your Name"
        value={name}
        variant="outlined"
        onChange={(e) => setName(e.target.value)}
        sx={{
          mb: 4,
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "1px solid #e7def8", // Default border color
            },
            "&:hover fieldset": {
              border: "1px solid #615b71", // Border color on hover
            },
            "&.Mui-focused fieldset": {
              border: "1px solid #615b71", // Border color on focus (click)
            },
          },
        }}
      />

      {/* Message */}
      <TextField
        multiline
        rows={8}
        fullWidth
        label="Message"
        variant="outlined"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        sx={{
          mb: 4,
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "1px solid #e7def8", // Default border color
            },
            "&:hover fieldset": {
              border: "1px solid #615b71", // Border color on hover
            },
            "&.Mui-focused fieldset": {
              border: "1px solid #615b71", // Border color on focus (click)
            },
          },
        }}
      />

<Typography
        variant="h6"
        sx={{ mb: 2, fontWeight: "bold", color: "#64558f" }}
      >
        Next Follow up Date & Time
      </Typography>

      <TextField
        fullWidth
        type="datetime-local"
        value={nextFollowUpDate}
        onChange={(e) => setNextFollowUpDate(e.target.value)}
        sx={{
          mb: 4,
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "1px solid #e7def8", // Default border color
            },
            "&:hover fieldset": {
              border: "1px solid #615b71", // Border color on hover
            },
            "&.Mui-focused fieldset": {
              border: "1px solid #615b71", // Border color on focus (click)
            },
          },
        }}
      />

      {/* Save Button */}
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="outlined"
          onClick={handleSave}
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
          Save
        </Button>
      </Box>
    </Paper>
  );
}
