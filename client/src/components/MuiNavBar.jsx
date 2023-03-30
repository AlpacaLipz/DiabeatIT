import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography, Stack, Button, Menu, MenuItem, } from "@mui/material";
import MonitorHeartSharpIcon from '@mui/icons-material/MonitorHeartSharp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import jwt_decode from "jwt-decode"

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

  // ------------------ Google OAuth -----------------------
  // User useState variable
  const [user, setUser] = useState({});

  // Initializes Client - Calls google OAuth - calls Sign-in Features
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "377210060521-j5bmdlnnnkt8dvd6f7aqql61bd5qgo3k.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    // Button Render
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme: "outline", size: "large"}
    );
    
    // loads Sign-In Prompt - Optional
    google.accounts.id.prompt();

  }, []);

// Sets userState variable
function handleCallbackResponse(response) {
  console.log("Encoded JWT ID token: " + response.credential);
  var userObject = jwt_decode(response.credential);
  console.log(userObject);
  setUser(userObject);
  document.getElementById("signInDiv").hidden = true;
  setUser(user);
}

  // Sign-Out: Sets User to empty obj - unhides Sign-In Button 
  function handleSignOut(event) {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
    setUser({})
  }

const loginUser = (user) => {
  setCurrentUser(user);
  console.log(currentUser);
};


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

          {/*  To Be Styled */}
          <div>
          <div id="signInDiv"></div>
          { Object.keys(user).length != 0 &&
            <button onClick={ (e) => handleSignOut(e) }>Sign Out</button>
          }

          { user && 
            <div>
              <img src={user.picture}></img>
            </div>
          }
        </div>


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