import React,{useState,MouseEvent} from 'react'
import AppBar from "@mui/material/AppBar/AppBar"
import IconButton from "@mui/material/IconButton/IconButton"
import Toolbar from "@mui/material/Toolbar/Toolbar"
import MenuIcon from "@mui/icons-material/Menu"
import DarkMode from "@mui/icons-material/DarkMode"
import LightMode from "@mui/icons-material/LightMode"
import Typography from "@mui/material/Typography/Typography"
import Menu from '@mui/material/Menu'
import  MenuItem from "@mui/material/MenuItem"
import Button from "@mui/material/Button"
import { NavLink } from 'react-router-dom'
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
            <AppBar position="static" sx={{width:"100vw"}}>
                <Toolbar variant="dense" color="">
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
                    anchorOrigin={{
                        vertical:"top",
                        horizontal:"right"
                    }}
                    transformOrigin={{
                        vertical:"top",
                        horizontal:"right"
                    }}
                    onMouseLeave={closeMenu}
                    MenuListProps={{'aria-labelledby':'menuBUtton'}}>
                        <MenuItem><NavLink to="/" style={{ textDecoration:"none"}}><Typography color="text.primary"> Home</Typography></NavLink></MenuItem>
                        <MenuItem><NavLink to="Contact" style={{ textDecoration:"none"}}><Typography color="text.primary">Contact</Typography></NavLink></MenuItem>
                        <MenuItem><NavLink to="Components" style={{textDecoration:"none"}}><Typography color="text.primary">Components</Typography></NavLink></MenuItem>
                    </Menu>
                <Typography variant="h6" color="inherit">
                    Portfolio of Kasper Bosteels
                </Typography>
                <NavLink className="topBarbuttons" to="/" style={{ textDecoration:"none"}}><Typography color="text.primary"> Home</Typography></NavLink>
                <NavLink className="topBarbuttons" to="Contact" style={{ textDecoration:"none"}}><Typography color="text.primary">Contact</Typography></NavLink>
               <NavLink className="topBarbuttons" to="Components" style={{textDecoration:"none"}}><Typography color="text.primary">Components</Typography></NavLink>
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