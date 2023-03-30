import React from 'react';
import { Box, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, Typography } from '@mui/material';

export const MuiTable = () => {
    return (
    <Box>
      <Typography sx={{ width: '48%', borderBottom: '2px solid #DB3EB1', mt:2, ml:2}} color={'#DB3EB1'} variant="h3" gutterBottom> User Info </Typography>
    
    <TableContainer component={Paper} sx={{ width: '95%', mt: 2, ml:1.2}}>
    
    <Table aria-label='simple table' > 
        <TableHead sx={{bgcolor: 'secondary.main'}}>
            <TableCell  align='center'>Date</TableCell>
            <TableCell  align='center'>Blood Sugar</TableCell>
            <TableCell  align='center'>Update</TableCell>
            <TableCell  align='center'>Delete</TableCell>
        </TableHead>
        <TableBody>
            {tableData.map(row => (<TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell sx={{bgcolor: 'secondary.main'}} align='center'>{row.name}</TableCell>
                        <TableCell sx={{bgcolor: 'secondary.main' }} align='center'>{row.age}</TableCell>
                        <TableCell sx={{bgcolor: 'secondary.main' }} align='center'>{row.weight} .lBbs</TableCell>
                        <TableCell sx={{bgcolor: 'secondary.main' }} align='center'>{row.A1C}</TableCell>
                    </TableRow>))}
        </TableBody>
    </Table>
  </TableContainer>
  </Box>
  )
};
const tableData = [
  {
      "date": "Alpaca Jackson",
      "": 69,
      "weight": 420,
      "A1C": "O-",
      "_id": "1"
  }
];
