import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, Card } from "@mui/material";
import { MuiTable } from "../components/MuitTable";
import Login from "../components/Login";

export const Dashboard = () => {

  return (
    <Box>
      <MuiTable />
    </Box>
    
  );
};
