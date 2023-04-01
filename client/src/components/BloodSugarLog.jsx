import React, { useState } from "react";
import {
  Container,
  Box,
  Button,
  TextField,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Stack,
} from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom'


export const BloodSugarLog = () => {
  const [date, setDate] = useState("");
  const [dayNight, setDayNight] = useState("");
  const [bloodSugar, setBloodSugar] = useState("");
  const nav = useNavigate();
  const handleAddReading = (e) => {
  e.preventDefault()

    axios
      .post("http://localhost:8000/api/logs", {
        bloodSugar,
        date,
        dayNight,
      })
      .then((response) => {
        console.log(date, dayNight, bloodSugar);
        console.log(response.data);
        nav('/logs');
      })
      .catch((err) => console.log("This is the Add Reading error: ", err));
  };

  return (
<form onSubmit={handleAddReading}>
      <Container sx={{ width: "95%", mt: 5 }}>
        
        <Typography
          sx={{ width: "80%", borderBottom: "2px solid #DB3EB1" }}
          color={"#DB3EB1"}
          variant="h4"
          gutterBottom
        >
          Blood Sugar Log
        </Typography>
        <Stack>
          <TextField
            id="blood-sugar-reading"
            label="Date"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            margin="normal"
            sx={{ mt: 5 }}
            onChange={(e) => {
              setDate(e.target.value);
            }}
            required
          />
          <TextField
            sx={{ mt: 5 }}
            id="blood-sugar-reading"
            label="Time"
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            margin="normal"
            required
            onChange={(e) => {
              setDayNight(e.target.value);
            }}
          />
          <TextField
            id="blood-sugar-reading"
            label="Blood Sugar Level"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            margin="normal"
            sx={{ mt: 5 }}
            onChange={(e) => {
              setBloodSugar(e.target.value);
            }}
            required
          />
          <Button
            sx={{ mt: 5, ml: 5, bgcolor: "#DB3EB1" }}
            variant="contained"
            type='submit'
          >
            Add Reading
          </Button>
        </Stack>
      </Container>
      </form>
  );
};
