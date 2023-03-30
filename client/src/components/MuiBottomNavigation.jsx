import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import UpgradeIcon from '@mui/icons-material/Upgrade';
export const MuiBottomNavigation = () => {
    const [value, setValue] = useState(0);
    return (<Box><BottomNavigation sx={{bgcolor: 'secondary.main', width: '100%', position: 'absolute', bottom: 0 }} value={value} onChange={(e, newValue) => { setValue(newValue); }} showLabels>
      <BottomNavigationAction href='/logs' label='Home' icon={<HomeIcon />}/>
      <BottomNavigationAction href='/logs/new' label='Log' icon={<FavoriteIcon />}/>
      <BottomNavigationAction href='' label='Update' icon={<UpgradeIcon />}/>
    </BottomNavigation>
    </Box>
    );
};
