import Box from "@mui/material/Box"
import Link from "@mui/material/Link"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { DarkMode, LightMode } from "@mui/icons-material"

interface themeAndSocialProps {
    theme:string,
    toggle:()=>void
}
const ThemeAndSocials = ({theme,toggle}:themeAndSocialProps)=>{
    return (
        <>
        <Box sx={{
            minWidth:50,
            display:"flex",
            justifyContent:"end",
            flex:"auto"}}>
           <Link style={{marginRight:5}} href="https://github.com/KasperBosteels"><IconButton aria-label="link to github"><GitHubIcon/></IconButton></Link>
           <Link style={{marginRight:5}} href="https://be.linkedin.com/in/kasper-bosteels"><IconButton aria-label="link to linkedIn"><LinkedInIcon/></IconButton></Link>
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
                borderRadius:"10",
                backgroundColor: "black",
                borderWidth:0}}
                onClick={()=>toggle()}>{theme === "light" ? (<DarkMode/>):(<LightMode/>)}
        </Button>
        </>
    )
}
export default ThemeAndSocials;