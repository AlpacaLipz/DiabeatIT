import React, {useState} from  'react';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { Box } from '@mui/material';
import { MuiTable } from '../components/MuitTable';

export const Dashboard = () => {
  return (
    <Box>
      <MuiTable />
    </Box>
  )
}
