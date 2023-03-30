import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography, Stack, Button, Menu, MenuItem, } from "@mui/material";
import MonitorHeartSharpIcon from '@mui/icons-material/MonitorHeartSharp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
export const MuiNavBar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/logs/login`; 
      navigate(path);
    }
    return (<AppBar position="static" sx={{bgcolor: 'secondary.main',}}>
      <Toolbar>
        <IconButton size="large" edge='start' color="inherit" aria-label="logo">
          <MonitorHeartSharpIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Diabeat It
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit" id="resources-button" onClick={handleClick} aria-control={open ? "resources-menu" : undefined} aria-haspopup="true" aria-expanded={open ? "true" : undefined} endIcon={<KeyboardArrowDownIcon />}>
            Options
          </Button>
          <Button onClick={routeChange} color="inherit">Login</Button>
        </Stack>
        <Menu id="resources-menu" anchorEl={anchorEl} open={open} MenuListProps={{
            'aria-labelledby': 'resources-button'
        }} onClose={handleClose} anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
        }} transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
        }} >
          <MenuItem onClick={handleClose}>Chart It</MenuItem>
          <MenuItem onClick={handleClose}>Dashboard</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>);
};
