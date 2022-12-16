import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";


const ErrorPage = ()=>{
    return(
        <>
        <Box sx={{display:"flex",justifyContent:"center"}}>
        <Box sx={{margin:"auto", marginTop:"5%"}}>
            <Typography variant="h1">404</Typography>
            <p>This page was not found.</p>
            <NavLink to="/">go to the homepage</NavLink>
        </Box>
        </Box>
        </>
    )
}
export default ErrorPage;