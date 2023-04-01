import React, { useState } from 'react';
import axios from 'axios';
import { Button, Box, TableContainer, Table, TableHead, TableBody, Tablelog, TableCell, Paper, Typography, TableRow } from '@mui/material';
import { useEffect } from 'react';
import { format, parseISO} from 'date-fns'

export const MuiTable = () => {

  const [logList, setLogList] = useState([]);

  // Populates Table from total log list
  useEffect(() => {
      axios.get('http://localhost:8000/api/logs')
      .then((res) => {
          setLogList(res.data.logs);
          console.log(res.data.logs);
      })
      .catch((err) => console.log("This is the log error: ", err))
  }, [])

  // Will delete log by _id
  const deleteLog = (logToDelete) => {
      axios.delete(`http://localhost:8000/api/logs/${logToDelete._id}`)
      .then((res) => {
          console.log(res);
          // Set a new array with elements whose _id don't match the productToDelete._id
          setLogList(logList.filter((logs) => logs._id !== logToDelete._id))
      })
      .catch((err) => console.log("This is the delete error: ", err));
  }

    return (
    <Box>
      <Typography sx={{width: '75%', borderBottom: '2px solid #DB3EB1', mt:2, ml:2}} color={'#DB3EB1'} variant="h4" gutterBottom> Gramp's Blood Sugar Log </Typography>
    <Box>
    <TableContainer component={Paper} sx={{height: '50%', width: '90%', mt: 4, ml:4}}>
    <Table sx={{height: "50%"}} aria-label='simple table' > 
        <TableHead sx={{bgcolor: 'secondary.main'}}>
            <TableCell  align='center'>Date</TableCell>
            <TableCell  align='center'>Blood Sugar</TableCell>
            <TableCell  align='center'>Time</TableCell>
            <TableCell  align='center'>Delete</TableCell>
        </TableHead>
        <TableBody>
            {logList.map(log => (<TableRow key={log.idx} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell sx={{bgcolor: 'secondary.main'}} align='center'>{format(parseISO(log.date), 'MM/dd/yyyy')}</TableCell>
                        <TableCell sx={{bgcolor: 'secondary.main' }} align='center'>{log.bloodSugar}</TableCell>
                        <TableCell sx={{bgcolor: 'secondary.main' }} align='center'>{log.dayNight}</TableCell>
                        <TableCell sx={{bgcolor: 'secondary.main' }} align='center'><Button onClick={() => deleteLog(log)}>Delete</Button></TableCell>
                    </TableRow>))}
        </TableBody>
    </Table>
  </TableContainer>
  </Box>
  </Box>
  )
};

