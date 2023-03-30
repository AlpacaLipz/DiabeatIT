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
  const [currentUser, setCurrentUser] = useState({});

  const loginUser = (user) => {
    setCurrentUser(user);
    console.log(currentUser);
  };
  return (
    <Box>
      
      <ThemeProvider theme={theme}>
        <MuiNavBar />
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