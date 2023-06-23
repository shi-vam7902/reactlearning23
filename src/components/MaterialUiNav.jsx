import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import { Button, Link } from '@mui/material';

export const MaterialUiNav = () => {
    
    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="relative">
            <Button  color='inherit' LinkComponent={"/home"} >CLICK</Button>
            <Button  color='inherit' LinkComponent={"/home"} >CLICK</Button>
            <Button  color='inherit' LinkComponent={"/home"} >CLICK</Button>
            <Button  color='inherit' LinkComponent={"/home"} >CLICK</Button>
          </AppBar>
        </Box>
      );
}


