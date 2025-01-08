import React, { useState } from "react"; // Add useState here
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const getCurrentDateTime = () => {
  const now = new Date();
  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }).format(now);
};

export default function AddFollowUpForm({ student, onClose, onSave }) {
  const [name, setName] = useState(""); // No error now
  const [message, setMessage] = useState(""); // No error now
  const [nextFollowUpDate, setNextFollowUpDate] = useState(""); // No error now

  const handleSave = () => {
    if (onSave) {
      const newFollowUp = {
        message,
        followUpBy: name,
        previousFollowUpDate: student.followUp,
        nextFollowUpDate,
      };
      onSave(newFollowUp);
    }
  };
  

  return (
    <Paper sx={{ p: 4, maxWidth: 800, mx: "auto", mt: 4 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}>
        <IconButton onClick={onClose} sx={{ color: "#79757f", ml: -4 }}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#64558f" }}>
          Add Follow up - ({student.studentName})
        </Typography>
      </Box>

      <TextField
        fullWidth
        label="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        sx={{ mb: 3 }}
      />

      <TextField
        multiline
        rows={8}
        fullWidth
        placeholder="Message"
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

      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="outlined"
          onClick={handleSave}
          sx={{
            borderRadius: "20px",
            borderColor: "#1FB892",
            color: "#1FB892",
            fontSize: "17px",
            maxWidth: "30px",
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
