import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material"
import { NavLink } from "react-router-dom"
import MenuIcon from "@mui/icons-material/Menu"
import {MouseEvent} from "react"
interface VerticalMenuProps {
    open:boolean,
    anchor:null | HTMLElement,
    closeMenu:()=>void,
    setopen:(event:MouseEvent<HTMLButtonElement>)=>void
}
const VerticalMenu = ({open,anchor,closeMenu,setopen}:VerticalMenuProps)=>{
    return (
        <Box sx={{flexGrow:1,display:{xs:"flex",md:"none"}}}>
                    <IconButton 
                        color="inherit"
                        aria-controls={open ? 'basic-menu' : undefined} 
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined} 
                        onClick={setopen}>
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
                </Box>
    )
}
export default VerticalMenu;