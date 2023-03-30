import React, {useState} from  'react';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { Box } from '@mui/material';
import { BloodSugarLog } from '../components/BloodSugarLog';


export const CreateLog = () => {
  return (
    <Box>
      <BloodSugarLog />
    </Box>
  )
}