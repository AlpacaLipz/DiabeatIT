import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, Card } from "@mui/material";
import { MuiTable } from "../components/MuitTable";
import Login from "../components/Login";

export const Dashboard = () => {
  const [currentUser, setCurrentUser] = useState({});

  const loginUser = (user) => {
    setCurrentUser(user);
    console.log(currentUser);
  };
  return (
    <Box>
      <MuiTable />
      <Box sx={{mt: 30}}>
        <Card sx={{width: '40%', height: 'auto'}}>
          <Login updateUser={loginUser} />
        </Card>
      </Box>
    </Box>
    
  );
};
