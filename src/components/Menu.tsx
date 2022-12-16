import {useState,MouseEvent} from 'react'
import AppBar from "@mui/material/AppBar/AppBar"
import Toolbar from "@mui/material/Toolbar/Toolbar"
import DarkMode from "@mui/icons-material/DarkMode"
import LightMode from "@mui/icons-material/LightMode"
import Typography from "@mui/material/Typography/Typography"
import Button from "@mui/material/Button"
import { NavLink } from 'react-router-dom'
import Box from '@mui/material/Box'
import { Container } from '@mui/material'
import VerticalMenu from './verticalMenu'
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
            <AppBar position="static" sx={{width:"100%"}} enableColorOnDark>
                <Container>
                <Toolbar variant="dense" color="" disableGutters>
                <VerticalMenu open={open} anchor={anchor} setopen={openMenu} closeMenu={closeMenu}/>
                <NavLink to="/" style={{textDecoration:"none"}}>
                    <Typography variant="h6" color="text.primary" sx={{display:{md:"flex",xs:"none"}}}>Portfolio van Kasper Bosteels</Typography>
                    <Typography variant="h6" color="text.primary" sx={{display:{md:"none",xs:"flex"}}}>Portfolio</Typography>

                </NavLink>
                <Box sx={{flexGrow:1, display:{xs:"none",md:"flex"}}}>
                <NavLink className="topBarbuttons" to="/" style={{ textDecoration:"none"}}><Typography color="text.primary"> Home</Typography></NavLink>
                <NavLink className="topBarbuttons" to="Contact" style={{ textDecoration:"none"}}><Typography color="text.primary">Contact</Typography></NavLink>
               <NavLink className="topBarbuttons" to="Components" style={{textDecoration:"none"}}><Typography color="text.primary">Components</Typography></NavLink>
               </Box>
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
                </Container>

            </AppBar>
        </div>
    )
}
export default NavigationBar;