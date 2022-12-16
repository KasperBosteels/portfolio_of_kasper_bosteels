import { DarkMode, LightMode } from "@mui/icons-material"
import { Box } from "@mui/material"
import { Button } from "react-bootstrap"



interface themeAndSocialProps {
    theme:string,
    toggle:()=>void
}
const ThemeAndSocials = ({theme,toggle}:themeAndSocialProps)=>{
    return (
        <>
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
                borderRadius:"10",
                backgroundColor: "black",
                borderWidth:0}}
                onClick={()=>toggle()}>{theme === "light" ? (<DarkMode/>):(<LightMode/>)}
        </Button>
        </>
    )
}
export default ThemeAndSocials;