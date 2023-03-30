import React, {useState} from 'react'
import {Box, Card} from '@mui/material'
import Login from '../components/Login'
import { useContext } from 'react';
// import { AuthContext } from './AuthContext';

export const LoginView = () => {
  const { setIsLoggedIn } = useContext('AuthContext');

  const handleLogin = () => {
    // code to authenticate user
    setIsLoggedIn(true);
  }
  
  return (
    <Box sx={{mt: 30}}>
    <Card sx={{width: '40%', height: 'auto'}}>
      <Login onClick={handleLogin} />
    </Card>
  </Box>
  )
}