import {
  Box,
  Typography,
  Paper,
  TextField,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Button,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import StudentFollowUp from "./StudentFollowUp";

const stats = [
  { label: "Total Enquiries", value: "50" },
  { label: "School Toured", value: "40" },
  { label: "Follow up", value: "10" },
  { label: "Joined", value: "20" },
  { label: "Dropped", value: "20" },
];

const tableData = [
    {
      id: "1819-1982",
      studentName: "Rohit Singh",
      class: "LKG",
      parentName: "Vinay Singh",
      phoneNumber: "9876543210",
      dateTime: "1 Nov, 2024, 6:00 pm",
      followUp: "5 Nov, 2024, 2:00 pm",
      createdBy: "Admission form",
      status: "Follow up",
    },
    {
      id: "1819-1983",
      studentName: "Aarav Sharma",
      class: "UKG",
      parentName: "Pooja Sharma",
      phoneNumber: "9123456789",
      dateTime: "2 Nov, 2024, 10:00 am",
      followUp: "6 Nov, 2024, 3:00 pm",
      createdBy: "Online Enquiry",
      status: "Joined",
    },
    {
      id: "1819-1984",
      studentName: "Isha Gupta",
      class: "1st",
      parentName: "Rajesh Gupta",
      phoneNumber: "9876543211",
      dateTime: "3 Nov, 2024, 1:00 pm",
      followUp: "7 Nov, 2024, 4:00 pm",
      createdBy: "Admission form",
      status: "School Toured",
    },
    {
      id: "1819-1985",
      studentName: "Kabir Malhotra",
      class: "2nd",
      parentName: "Anjali Malhotra",
      phoneNumber: "9988776655",
      dateTime: "4 Nov, 2024, 9:00 am",
      followUp: "8 Nov, 2024, 5:00 pm",
      createdBy: "Online Enquiry",
      status: "Follow up",
    },
  ];
  

  export default function AdmissionDetails() {
    const [selectedStudent, setSelectedStudent] = useState(null);
  
    if (selectedStudent) {
      return <StudentFollowUp student={selectedStudent} onBack={() => setSelectedStudent(null)} />;
    }
  
  return (
    <Box sx={{ p: 3, position: "relative" }}>
      {/* Button at Top-Right Corner */}
      {/* <Box
        sx={{
          position: "absolute",
          top: "1px",
          right: "20px",
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
        >
          Create Enquiry
        </Button>
      </Box> */}
    
      {/* Stats Cards */}
      <Box sx={{ display: "flex", gap: 2, mb: 5, mt:4 }}>
        {stats.map((stat, index) => (
          <Paper
            key={index}
            sx={{
              p: 2,
              flex: 1,
              textAlign: "center",
              bgcolor: stat.label === "Dropped" ? "#f5f5f5" : "white",
              border: "1px solid #e7def8", // Light border color
            }}
          >
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", color: "#64558f" }}
            >
              {stat.value}
            </Typography>
            <Typography variant="body1" sx={{ color: "#615b71" }}>
              {stat.label}
            </Typography>
          </Paper>
        ))}
      </Box>

      {/* Filters */}
      <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
        <TextField
          placeholder="Search by Student Name, Phone number"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{
            flex: 1,
            "& .MuiInputBase-input::placeholder": {
              color: "#958DA8", // Set your desired placeholder color here
              opacity: 1, // Ensure opacity is set if needed
            },
          }}
        />
        <Select defaultValue="Class Enquiry" sx={{ width: 200 }}>
          <MenuItem value="Class Enquiry" sx={{ color: "#615b71" }}>
            Class Enquiry
          </MenuItem>
        </Select>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker sx={{ width: 200 }} />
          <DatePicker sx={{ width: 200 }} />
        </LocalizationProvider>
      </Box>

      {/* Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox"sx={{ padding: "1px" }}>
                <Checkbox />
              </TableCell>
              <TableCell
                sx={{ fontSize: "17px", color: "#5F5874", fontWeight: "bold", textAlign: 'center' }}
              >
                Student Name
              </TableCell>
              <TableCell
                sx={{ fontSize: "17px", color: "#5F5874", fontWeight: "bold", textAlign: 'center',padding: "2px" }}
              >
                Class
              </TableCell>
              <TableCell
                sx={{ fontSize: "17px", color: "#5F5874", fontWeight: "bold" , textAlign: 'center'}}
              >
                Parent Name
              </TableCell>
              <TableCell
                sx={{ fontSize: "17px", color: "#5F5874", fontWeight: "bold" , textAlign: 'center'}}
              >
                Phone number
              </TableCell>
              <TableCell
                sx={{ fontSize: "17px", color: "#5F5874", fontWeight: "bold" , textAlign: 'center'}}
              >
                
                Date & Time
              </TableCell>
              <TableCell
                sx={{ fontSize: "17px", color: "#5F5874", fontWeight: "bold", textAlign: 'center' }}
              >
                Follow up
              </TableCell>
              <TableCell
                sx={{ fontSize: "17px", color: "#5F5874", fontWeight: "bold", textAlign: 'center' }}
              >
                Created by
              </TableCell>
              <TableCell
                sx={{ fontSize: "17px", color: "#5F5874", fontWeight: "bold", textAlign: 'center' }}
              >
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => (
              <TableRow key={row.id}>
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                <TableCell 
              sx={{ 
                fontSize: "16px", 
                textAlign: 'center',
                cursor: 'pointer',
                '&:hover': {
                  color: '#1976d2',
                  textDecoration: 'underline'
                }
              }}
              onClick={() => setSelectedStudent(row)}
            >
              {row.studentName}
            </TableCell>
                <TableCell sx={{ fontSize: "16px", textAlign: 'center' }}>{row.class}</TableCell>
                <TableCell sx={{ fontSize: "16px", textAlign: 'center' }}>
                  {row.parentName}
                </TableCell>
                <TableCell sx={{ fontSize: "16px", textAlign: 'center' }}>
                  {row.phoneNumber}
                </TableCell>
                <TableCell sx={{ fontSize: "16px" , textAlign: 'center'}}>{row.dateTime}</TableCell>
                <TableCell sx={{ fontSize: "16px", textAlign: 'center' }}>{row.followUp}</TableCell>
                <TableCell sx={{ fontSize: "16px" , textAlign: 'center'}}>{row.createdBy}</TableCell>
                <TableCell>
                  <Select
                    value={row.status}
                    size="medium"
                    sx={{
                        width: '140px', 
                        height: '30px',
                        fontSize: '13px',
                      "& .MuiSelect-select": {
                        py: 0.5,
                        bgcolor:
                          row.status === "Follow up" ? "#fff" : "#f5f5f5",
                      },
                    }}
                  >
                    <MenuItem value="Follow up">Follow up</MenuItem>
                    <MenuItem value="Joined">Joined</MenuItem>
                    <MenuItem value="School Toured">School Toured</MenuItem>
                  </Select>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
