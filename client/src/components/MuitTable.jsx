import React from 'react';
import { Box, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, Typography } from '@mui/material';

export const MuiTable = () => {
    return (
    <Box>
      <Typography sx={{ width: '48%', borderBottom: '2px solid #DB3EB1', mt:2, ml:2}} color={'#DB3EB1'} variant="h3" gutterBottom> User Info </Typography>
    
    <TableContainer component={Paper} sx={{ width: '95%', mt: 2, ml:1.2}}>
    
    <Table aria-label='simple table' > 
        <TableHead sx={{bgcolor: 'secondary.main'}}>
            <TableCell  align='center'>Name</TableCell>
            <TableCell  align='center'>Age</TableCell>
            <TableCell  align='center'>Weight</TableCell>
            <TableCell  align='center'>A1C</TableCell>

        </TableHead>
        <TableBody>
            {tableData.map(row => (<TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell sx={{bgcolor: 'secondary.main'}} align='center'>{row.name}</TableCell>
                        <TableCell sx={{bgcolor: 'secondary.main' }} align='center'>{row.age}</TableCell>
                        <TableCell sx={{bgcolor: 'secondary.main' }} align='center'>{row.weight} .lbs</TableCell>
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
      "name": "Alpaca Jackson",
      "age": 69,
      "weight": 420,
      "A1C": "O-",
      "_id": "1"
  }
];
