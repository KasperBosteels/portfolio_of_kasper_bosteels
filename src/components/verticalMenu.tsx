import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import Typography from "@mui/material/Typography"
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
        <Box sx={{
                flexGrow:1,
                display:{xs:"flex",md:"none"},}}>
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
                    MenuListProps={{'aria-labelledby':'menuButton'}}>
                        <NavLink to="/" style={{ textDecoration:"none"}}><MenuItem><Typography color="text.primary">Home</Typography></MenuItem></NavLink>
                        <NavLink to="Contact" style={{ textDecoration:"none"}}><MenuItem><Typography color="text.primary">Contact</Typography></MenuItem></NavLink>
                        <NavLink to="Blog" style={{textDecoration:"none"}}><MenuItem><Typography color="text.primary">Blog</Typography></MenuItem></NavLink>
                    </Menu>
                </Box>
    )
}
export default VerticalMenu;