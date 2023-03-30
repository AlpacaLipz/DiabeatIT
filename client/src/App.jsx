import React, {useState, useEffect} from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { MuiNavBar } from "./components/MuiNavBar";
import { MuiBottomNavigation } from "./components/MuiBottomNavigation";
import { ThemeProvider, Box, createTheme, colors, Typography } from "@mui/material";
import { Dashboard } from "./views/Dashboard";
import { CreateLog } from "./views/CreateLog";
import { UpdateLog } from "./views/UpdateLog";
import {LoginView} from "./views/LoginView"
import jwt_decode from "jwt-decode"

const theme = createTheme({
  palette: {
    primary: {
      main: "#41B6E6",
    },
    secondary: {
      main: "#DB3EB1",
    },
    background: {
      default: "#000000",
    },
    // text: {
    //   primary: '',
    // },
    action: {
      active: "#FFFFFF",
    },
  },
  components: {
    MuiMenu: {
      styleOverrides: {
        list: {
          '&[role="menu"]': {
            backgroundColor: "#41B6E6",
          },
        },
      },
    },
  },
  overrides: {
    MuiPaper: {
      root: {
        border: "5px solid black", // replace with your desired border style
      },
    },
    MuiTable: {
      root: {
        borderCollapse: "initial", // reset default border collapse
        borderSpacing: 0, // reset default border spacing
        "& th, & td": {
          borderBottom: "2px solid black", // replace with your desired border style
          padding: "8px 16px", // adjust cell padding to match thickness of border
        },
      },
    },
  },
});

function App() {

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
      
      // loads Sign-In Prompt
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

  return (
    <Box>
      
      <ThemeProvider theme={theme}>
        <MuiNavBar />
        <div>
          <div id="signInDiv"></div>
          { Object.keys(user).length != 0 &&
            <button onClick={ (e) => handleSignOut(e) }>Sign Out</button>
          }

          { user && 
            <div>
              <img src={user.picture}></img>
              <h3>{user.name}</h3>
            </div>
          }
        </div>
        <Routes>
          <Route path='/logs/login' element={<LoginView updateUser={loginUser} />}></Route>
          <Route path="/logs" element={<Dashboard />}></Route>
          <Route path="/logs/new" element={<CreateLog />}></Route> 
          {/* <Route path="/logs/:id/edit" element={<UpdateLog />}></Route> */}
        </Routes>
        <MuiBottomNavigation />
      </ThemeProvider>
    </Box>
  );
}
export default App;