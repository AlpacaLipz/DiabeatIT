import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import {
  Box,
  Avatar,
  Button,
  Container,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Typography,
} from "@mui/material";

const Login = (props) => {
  const [user, setUser] = useState({});

  // Decodes Google Response - Sets user state to Obj - hides Sign-In Button
  const handleCallbackResponse = (response) => {
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
    props.updateUser(user);
  }

  // Sign-Out: Sets User to empty obj - unhides Sign-In Button
  const handleSignOut = (event) => {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
    props.updateUser({});
  }

  // Initializes Client - Calls google OAuth - calls Sign-in Features
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "377210060521-j5bmdlnnnkt8dvd6f7aqql61bd5qgo3k.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    // Button Render
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });

    google.accounts.id.prompt();
  }, []);

  return (
    <Box>
      <Container>
      <Box id="signInDiv">
      </Box>
      {user && (
        <Box >
          <Box>
          <img src={user.picture} />
          </Box>
          <Typography variant="sub1">{user.name}</Typography>
        </Box>
      )}
      {Object.keys(user).length != 0 && (
        <Button
          sx={{ mt: 5, bgcolor: "#DB3EB1" }}
          variant="contained"
          onClick={(e) => handleSignOut(e)}
        >
          Sign Out
        </Button>
      )}
      </Container>
    </Box>
  );
};

export default Login;