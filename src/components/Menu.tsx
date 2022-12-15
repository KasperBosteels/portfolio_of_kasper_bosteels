import {useState,MouseEvent} from 'react'
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
import Box from '@mui/material/Box'
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
            <AppBar position="static" sx={{width:"100%"}}>
                <Toolbar variant="dense" color="">
                    <IconButton 
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
                    onMouseLeave={()=>closeMenu()}
                    MenuListProps={{'aria-labelledby':'menuBUtton'}}>
                        <NavLink to="/" style={{ textDecoration:"none"}}><MenuItem><Typography color="text.primary">Home</Typography></MenuItem></NavLink>
                        <NavLink to="Contact" style={{ textDecoration:"none"}}><MenuItem><Typography color="text.primary">Contact</Typography></MenuItem></NavLink>
                        <NavLink to="Components" style={{textDecoration:"none"}}><MenuItem><Typography color="text.primary">Components</Typography></MenuItem></NavLink>
                    </Menu>
                <NavLink to="/" style={{textDecoration:"none"}}>
                    <Typography variant="h6" color="primary.dark">Portfolio of Kasper Bosteels</Typography>
                </NavLink>
                <NavLink className="topBarbuttons" to="/" style={{ textDecoration:"none"}}><Typography color="text.primary"> Home</Typography></NavLink>
                <NavLink className="topBarbuttons" to="Contact" style={{ textDecoration:"none"}}><Typography color="text.primary">Contact</Typography></NavLink>
               <NavLink className="topBarbuttons" to="Components" style={{textDecoration:"none"}}><Typography color="text.primary">Components</Typography></NavLink>
               <Box sx={{minWidth:50,display:"flex",justifyContent:"end", flex:"auto"}}>
               <a style={{marginRight:5}} href="https://github.com/KasperBosteels"><img width="20" src="./github-mark-white.png" alt="./logo192.png"></img></a>
               <a style={{marginRight:5}} href="https://be.linkedin.com/in/kasper-bosteels"><img width="20" src="./In-Blue-26-Ôö¼┬½.png" alt="./logo192.png"></img></a>
               </Box>
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
                    backgroundColor: theme === "dark" ? "white" : "black"}} 
                    onClick={()=>toggle()}>{theme === "light" ? (<DarkMode/>):(<LightMode/>)}
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default NavigationBar;