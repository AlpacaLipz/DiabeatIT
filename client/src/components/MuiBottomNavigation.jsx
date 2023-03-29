import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction, } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
export const MuiBottomNavigation = () => {
    const [value, setValue] = useState(0);
    return (<BottomNavigation sx={{bgcolor: 'secondary.main', width: '100%', position: 'absolute', bottom: 0 }} value={value} onChange={(e, newValue) => { setValue(newValue); }} showLabels>
      <BottomNavigationAction label='Home' icon={<HomeIcon />}/>
      <BottomNavigationAction label='Log' icon={<FavoriteIcon />}/>
      <BottomNavigationAction label='User' icon={<PersonIcon />}/>
    </BottomNavigation>);
};
