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
import { useState } from "react";
import AddFollowUpForm from "./AddFollowUpForm";

export default function StudentFollowUp({ student, onBack }) {
  const [showFollowUpForm, setShowFollowUpForm] = useState(false);
  const [followUpData, setFollowUpData] = useState([
    {
      message:
        "Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      followUpBy: "Emily Doe",
      previousFollowUpDate: "5 Nov, 2024, 2:00 pm",
      nextFollowUpDate: "10 Nov, 2024, 2:00 pm",
    },
    {
      message:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
      followUpBy: "Lorelai Gilmore",
      previousFollowUpDate: "25 Nov, 2024, 12:30 pm",
      nextFollowUpDate: "30 Nov, 2024, 12:30 pm",
    },
  ]);

  
  

  // Define handleAddFollowUp function first
  const handleAddFollowUp = (newFollowUp) => {
    setFollowUpData((prevData) => [newFollowUp, ...prevData]);
    setShowFollowUpForm(false); // Close the dialog
  };

  // Conditional rendering for the AddFollowUpForm
  if (showFollowUpForm) {
    return (
      <AddFollowUpForm
        student={student}
        onClose={() => setShowFollowUpForm(false)}
        onSave={handleAddFollowUp} // Correctly pass the function here
      />
    );
  }

  const cellStyle = {
    "&:last-child": {
      borderRight: "none",
    },
  };

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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            color: "#5F5874",
          }}
        >
        <IconButton onClick={onBack} sx={{ color: "#79757f" }}>
          <ArrowBackIcon />
        </IconButton>
        <Typography
            variant="h6"
            sx={{ fontWeight: "bold", fontSize: "22px", color: "#64558f" }}
          >
            {student.studentName}, {student.class}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: "bold", fontSize: "17.4px", marginLeft: 6 }}
          >
            Enquiry Date:{" "}
            <span style={{ fontWeight: "normal", fontSize: "16.9px" }}>
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
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", color: "#7d5261", fontSize: "17.4px" }}
          >
            Parent Name:{" "}
            <span
              style={{
                fontWeight: "normal",
                fontSize: "16.9px",
                color: "black",
              }}
            >
              {student.parentName}
            </span>
          </Typography>
        </Box>
        <Box sx={{ flex: 1, mr: 100 }}>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", color: "#7d5261", fontSize: "17.4px" }}
          >
            Phone Number:{" "}
            <span
              style={{
                fontWeight: "normal",
                fontSize: "16.9px",
                color: "black",
              }}
            >
              {student.phoneNumber}
            </span>
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mr: 2 }}>
        <Button
          variant="outlined"
          onClick={() => setShowFollowUpForm(true)}
          sx={{
            borderRadius: "20px",
            borderColor: "#1FB892",
            color: "#1FB892",
            fontSize: "17px",
            "&:hover": {
              borderColor: "#1FB892",
              backgroundColor: "#1FB892",
              color: "white",
            },
          }}
        >
          Add Follow Up
        </Button>
      </Box>

      <Box sx={{ mb: 4, mt: 2 }}>
      {/* Follow-Up Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
            <TableCell
                  sx={{
                    ...cellStyle,
                    backgroundColor: "#1FB892",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "17px",
                    textAlign: "center",
                  }}
                >
                  Message
                </TableCell>
                <TableCell
                  sx={{
                    ...cellStyle,
                    backgroundColor: "#1FB892",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "17px",
                    textAlign: "center",
                  }}
                >
                  Follow up By
                </TableCell>
                <TableCell
                  sx={{
                    ...cellStyle,
                    backgroundColor: "#1FB892",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "17px",
                    textAlign: "center",
                  }}
                >
                  Next Follow Up Date
                </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {followUpData.map((row, index) => (
              <TableRow key={index}>
                <TableCell
                    sx={{
                      ...cellStyle,
                      fontSize: "15px",
                      maxWidth: "500px",
                      whiteSpace: "normal",
                      textAlign: "left",
                      padding: "20px",
                    }}
                  >
                    {row.message}
                  </TableCell>
                  <TableCell
                    sx={{ ...cellStyle, textAlign: "center", padding: "20px" }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <Typography sx={{ fontWeight: "bold", fontSize: "15px" }}>
                        {row.followUpBy}
                      </Typography>
                      <Typography sx={{ color: "#666", fontSize: "14px" }}>
                        {row.previousFollowUpDate}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{
                      ...cellStyle,
                      fontSize: "15px",
                      textAlign: "center",
                      padding: "20px",
                    }}
                  >
                    {row.nextFollowUpDate}
                  </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add Follow-Up Dialog */}
      {showFollowUpForm && (
        <AddFollowUpForm
          student={student}
          onClose={() => setShowFollowUpForm(false)}
          onSave={handleAddFollowUp}
        />
      )}
    </Box>
    </Box>
  );
}
