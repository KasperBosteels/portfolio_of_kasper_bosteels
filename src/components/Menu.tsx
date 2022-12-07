import React from 'react';
import AppBar from "@mui/material/AppBar/AppBar";
import IconButton from "@mui/material/IconButton/IconButton";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import DarkMode from "@mui/icons-material/DarkMode";
import LightMode from "@mui/icons-material/LightMode";
import Typography from "@mui/material/Typography/Typography";
import { Button } from 'react-bootstrap';
export interface menuprops{
    theme:string;
    toggle:()=>void;
}
const NavigationBar=({theme,toggle}:menuprops)=>{
    
    return(
        <div>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start"

                    color="inherit">
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" color="inherit">
                    Portfolio of Kasper Bosteels
                </Typography>
                <Button style={{
                    transition:"all",
                    transitionDuration:".5s" ,
                    justifyContent:"center", 
                    justifyItems:"center", 
                    display:"flex",
                    marginLeft:"auto",
                    left:0,
                    right:0 , 
                    height:"100%" ,
                    backgroundColor:"black"}} 
                    onClick={()=>toggle()}>{theme == "light" ? (<DarkMode/>):(<LightMode/>)}</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default NavigationBar;