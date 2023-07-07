import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import { NavLink } from "react-router-dom";
const HorizontalMenu = ()=>{
    return (
    <>
     <Box sx={{flexGrow:1, display:{xs:"none",md:"flex"}}}>
        <NavLink className="topBarbuttons" to="/" style={{ textDecoration:"none"}}><Button variant="text" sx={{color:"text.primary"}}>Home</Button></NavLink>
        <NavLink className="topBarbuttons" to="Contact" style={{ textDecoration:"none"}}><Button variant="text"sx={{color:"text.primary"}}>Contact</Button></NavLink>
        <NavLink className="topBarButtons" to="Blog" style={{textDecoration:"none"}}><Button variant="text" sx={{color:"text.primary"}}>Blog</Button></NavLink>
    </Box>
    </>
    )
}
export default HorizontalMenu;