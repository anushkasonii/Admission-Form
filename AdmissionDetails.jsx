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
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState, useEffect } from "react";
import StudentFollowUp from "./StudentFollowUp";

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
  const [tableDataState, setTableDataState] = useState(tableData);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [stats, setStats] = useState([]);

  // Function to calculate stats dynamically
  const calculateStats = () => {
    const total = tableDataState.length;
    const schoolToured = tableDataState.filter(
      (item) => item.status === "School Toured"
    ).length;
    const followUp = tableDataState.filter(
      (item) => item.status === "Follow up"
    ).length;
    const joined = tableDataState.filter(
      (item) => item.status === "Joined"
    ).length;
    const dropped = tableDataState.filter(
      (item) => item.status === "Dropped"
    ).length;

    setStats([
      { label: "Total Enquiries", value: total },
      { label: "School Toured", value: schoolToured },
      { label: "Follow up", value: followUp },
      { label: "Joined", value: joined },
      { label: "Dropped", value: dropped },
    ]);
  };

  // Recalculate stats when table data changes
  useEffect(() => {
    calculateStats();
  }, [tableDataState]);

  const handleFilterClick = (label) => {
  if (label === "Total Enquiries") {
    // Reset filters and show all data
    setSelectedFilters([]);
    setTableDataState(tableData); // Ensure all data is displayed
  } else {
    setSelectedFilters((prev) => {
      const newFilters = prev.includes(label)
        ? prev.filter((f) => f !== label) // Remove filter if already selected
        : [...prev, label]; // Add filter if not selected

      // Apply filters to the table data
      const filteredData =
        newFilters.length === 0
          ? tableData // Reset to show all data if no filters
          : tableData.filter((item) => newFilters.includes(item.status));

      setTableDataState(filteredData);
      return newFilters;
    });
  }
};

  

  const handleStatusChange = (id, newStatus) => {
    setTableDataState((prevData) =>
      prevData.map((row) =>
        row.id === id ? { ...row, status: newStatus } : row
      )
    );
  };

  if (selectedStudent) {
    return (
      <StudentFollowUp
        student={selectedStudent}
        onBack={() => setSelectedStudent(null)}
      />
    );
  }

  return (
    <Box sx={{ p: 3, position: "relative" }}>
      <Box sx={{ display: "flex", gap: 2, mb: 5, mt: 4 }}>
        {stats.map((stat, index) => (
          <Paper
            key={index}
            onClick={() => handleFilterClick(stat.label)}
            sx={{
              p: 2,
              flex: 1,
              textAlign: "center",
              bgcolor: selectedFilters.includes(stat.label)
                ? "#e7def8"
                : stat.label === "Dropped"
                ? "#f5f5f5"
                : "white",
              border: "1px solid #e7def8",
              cursor: "pointer",
              "&:hover": {
                bgcolor: "#e7def8",
              },
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

      <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
        <TextField
          placeholder="Search by Student Name or Phone number"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          onChange={(e) => {
            const searchValue = e.target.value.toLowerCase();
            setTableDataState(
              tableData.filter(
                (row) =>
                  row.studentName.toLowerCase().includes(searchValue) ||
                  row.phoneNumber.includes(searchValue)
              )
            );
          }}
          sx={{
            flex: 1,
            "& .MuiInputBase-input::placeholder": {
              color: "#958DA8",
              opacity: 1,
            },
          }}
        />
        <Select
          value=""
          sx={{ width: 200 }}
          onChange={(e) => {
            const selectedValue = e.target.value;
            if (selectedValue === "") {
              setTableDataState(tableData);
            } else {
              setTableDataState(
                tableData.filter((row) => row.createdBy === selectedValue)
              );
            }
          }}
          displayEmpty
          renderValue={(selected) =>
            selected ? (
              selected
            ) : (
              <span style={{ color: "#958DA8" }}>Created By</span>
            )
          }
        >
          <MenuItem value="Admission form" sx={{ color: "#615b71" }}>
            Admission form
          </MenuItem>
          <MenuItem value="Online Enquiry" sx={{ color: "#615b71" }}>
            Online Enquiry
          </MenuItem>
        </Select>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Date"
            onChange={(newValue) => {
              if (newValue) {
                const selectedDate = newValue.format("D MMM, YYYY");
                setTableDataState(
                  tableData.filter((row) => row.dateTime.includes(selectedDate))
                );
              } else {
                setTableDataState(tableData);
              }
            }}
            sx={{ width: 200 }}
          />
          <DatePicker
            label="Follow Up Date"
            onChange={(newValue) => {
              if (newValue) {
                const selectedDate = newValue.format("D MMM, YYYY");
                setTableDataState(
                  tableData.filter((row) => row.followUp.includes(selectedDate))
                );
              } else {
                setTableDataState(tableData);
              }
            }}
            sx={{ width: 200 }}
          />
        </LocalizationProvider>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#1FB892" }}>
              <TableCell padding="checkbox" sx={{ padding: "1px" }}>
                <Checkbox sx={{ color: "white", ml: 0.5 }} />
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "17px",
                  color: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Student Name
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "17px",
                  color: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                  padding: "2px",
                }}
              >
                Class
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "17px",
                  color: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Parent Name
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "17px",
                  color: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Phone number
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "17px",
                  color: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Date & Time
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "17px",
                  color: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Follow up
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "17px",
                  color: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Created by
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "17px",
                  color: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableDataState.map((row) => (
              <TableRow key={row.id}>
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "16px",
                    textAlign: "center",
                    cursor: "pointer",
                    "&:hover": {
                      color: "#1976d2",
                      textDecoration: "underline",
                    },
                  }}
                  onClick={() => setSelectedStudent(row)}
                >
                  {row.studentName}
                </TableCell>
                <TableCell sx={{ fontSize: "16px", textAlign: "center" }}>
                  {row.class}
                </TableCell>
                <TableCell sx={{ fontSize: "16px", textAlign: "center" }}>
                  {row.parentName}
                </TableCell>
                <TableCell sx={{ fontSize: "16px", textAlign: "center" }}>
                  {row.phoneNumber}
                </TableCell>
                <TableCell sx={{ fontSize: "16px", textAlign: "center" }}>
                  {row.dateTime}
                </TableCell>
                <TableCell sx={{ fontSize: "16px", textAlign: "center" }}>
                  {row.followUp}
                </TableCell>
                <TableCell sx={{ fontSize: "16px", textAlign: "center" }}>
                  {row.createdBy}
                </TableCell>
                <TableCell>
                  <Select
                    value={row.status}
                    size="medium"
                    onChange={(e) => handleStatusChange(row.id, e.target.value)}
                    sx={{
                      width: "140px",
                      height: "30px",
                      fontSize: "13px",
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
                    <MenuItem value="Dropped">Dropped</MenuItem>
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
