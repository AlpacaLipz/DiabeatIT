import React, { useState } from 'react';
import { Container, Box, Button, TextField, Typography, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

export const BloodSugarLog = () => {
  const [readings, setReadings] = useState([]);

  const handleAddReading = () => {
    const time = new Date().toLocaleString();
    const reading = document.getElementById('blood-sugar-reading').value.trim();

    if (reading !== '') {
      setReadings([...readings, { time, reading }]);
      document.getElementById('blood-sugar-reading').value = '';
    }
  };

  return (
    
    <Box>
      <Container sx={{width: '95%', mt: 5}} >
      <Typography sx={{ width: '80%', borderBottom: '2px solid #DB3EB1'}} color={'#DB3EB1'} variant="h4" gutterBottom>
        Blood Sugar Log
      </Typography>
      <TextField
        id="blood-sugar-reading"
        label="Date"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        margin="normal"
        sx={{mt:5}}
      />
      <TextField sx={{mt:5}}
        id="blood-sugar-reading"
        label="Am - Pm "
        type="text"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        margin="normal"
        required
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
        sx={{mt:5}}
      />
      <Button sx={{mt: 5, ml: 5 , bgcolor: '#DB3EB1'}} variant="contained" onClick={handleAddReading}>
        Add Reading
      </Button>
      </Container>
    </Box>
  );
};

export default BloodSugarLog;