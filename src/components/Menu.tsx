import React,{useState,MouseEvent} from 'react';
import AppBar from "@mui/material/AppBar/AppBar";
import IconButton from "@mui/material/IconButton/IconButton";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import DarkMode from "@mui/icons-material/DarkMode";
import LightMode from "@mui/icons-material/LightMode";
import Typography from "@mui/material/Typography/Typography";
import {Menu, MenuItem,Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
export interface menuprops{
    theme:string;
    toggle:()=>void;
}
const NavigationBar=({theme,toggle}:menuprops)=>{
    const [anchor, setanchor] = useState<null | HTMLElement>(null);
    const open = Boolean(anchor);
    const openMenu = (event: MouseEvent<HTMLButtonElement>)=>{
        setanchor(event.currentTarget);
    }
    const closeMenu = ()=>{
        setanchor(null);
    }
    return(
        <div>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton 
                        id="menuButton"
                        edge="start" 
                        color="inherit" 
                        aria-controls={open ? 'basic-menu' : undefined} 
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined} 
                        onClick={openMenu}>
                    <MenuIcon/>
                </IconButton>
                <Menu 
                    anchorEl={anchor}
                    open={open}
                    onClose={closeMenu}
                    MenuListProps={{'aria-labelledby':'menuBUtton'}}>
                        <MenuItem><NavLink to="/">Home</NavLink></MenuItem>
                        <MenuItem><NavLink to="Contact">Contact</NavLink></MenuItem>
                        <MenuItem><NavLink to="Components">Components</NavLink></MenuItem>
                        <MenuItem><NavLink to="About">About</NavLink></MenuItem>
                    </Menu>
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
                    backgroundColor: theme == "dark" ? "white" : "black"}} 
                    onClick={()=>toggle()}>{theme == "light" ? (<DarkMode/>):(<LightMode/>)}</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default NavigationBar;