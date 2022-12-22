import {useState,MouseEvent} from 'react'
import AppBar from "@mui/material/AppBar/AppBar"
import Toolbar from "@mui/material/Toolbar/Toolbar"
import Typography from "@mui/material/Typography/Typography"
import { NavLink } from 'react-router-dom'
import { Container } from '@mui/material'
import VerticalMenu from './verticalMenu'
import HorizontalMenu from './HorizontalMenu'
import ThemeAndSocials from './themeAndSocials'
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
                <Container className="TopMenuContainer" sx={{margin:"auto", display:"flex", alignContent:"space-evenly", flexDirection:"column", width:"100%"}}>
                <Toolbar variant="regular" color="" disableGutters>
                <VerticalMenu open={open} anchor={anchor} setopen={openMenu} closeMenu={closeMenu}/>
                <NavLink to="/" style={{textDecoration:"none"}}>
                    <Typography variant="h6" color="text.primary" sx={{display:{md:"flex",xs:"none"}}}>Portfolio van Kasper Bosteels</Typography>
                    <Typography variant="h6" color="text.primary" sx={{display:{md:"none",xs:"flex"}}}>Portfolio</Typography>
                </NavLink>
                <HorizontalMenu/>
                <ThemeAndSocials theme={theme} toggle={toggle}/>
                </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}
export default NavigationBar;