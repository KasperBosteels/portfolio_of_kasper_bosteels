import { Box, Paper, Typography } from "@mui/material"


const FrontEnd = ()=>{

    return (

        <Box sx={{flexDirection:{lg:"row",md:"column",xs:"column"}, alignContent:"space-between", justifyContent:"space-between", width:"80%", margin:"auto",display:{lg:"inline",md:"inline",xs:"none",}}}>
            <Paper elevation={5} sx={{padding:2}}>
            <Typography variant="h6">Frame works waar ik ervaring mee heb</Typography>
            <Box sx={{display:"flex", columnGap:".5rem",minWidth:"30%", maxWidth:"30%", paddingTop:3,paddingBottom:3}}>
                <Typography><a title="Facebook, Public domain, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:React-icon.svg"><img style={{backgroundColor:"white", borderRadius:"2rem", }} width="64" alt="React-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/64px-React-icon.svg.png"/></a></Typography>
                <Typography><a title="Google, Public domain, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Angular_full_color_logo.svg"><img  style={{backgroundColor:"white", borderRadius:"2rem", }} width="64" alt="Angular full color logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/64px-Angular_full_color_logo.svg.png"/></a></Typography>
                <Typography><a title="Fehguy, CC BY-SA 4.0 &lt;https://creativecommons.org/licenses/by-sa/4.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Swagger-logo.png"><img style={{backgroundColor:"white", borderRadius:"2rem", }} width="64" alt="Swagger-logo" src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Swagger-logo.png"/></a></Typography>
                <Typography><a title="Material Ui logo" href="https://img.icons8.com/color/64/null/material-ui.png"><img style={{backgroundColor:"white", borderRadius:"2rem", }}  alt="Material Ui Logo" src="https://img.icons8.com/color/64/null/material-ui.png"/></a></Typography>
                <Typography><a title="Gatsby js Logo" href="https://upload.wikimedia.org/wikipedia/en/d/d0/Gatsby_Logo.png"><img style={{backgroundColor:"white", borderRadius:"2rem", }} width="64" alt="Gatsby Logo" src="https://upload.wikimedia.org/wikipedia/en/d/d0/Gatsby_Logo.png"></img></a></Typography>

            </Box>
            </Paper>
            <Paper elevation={5} sx={{padding:2,minWidth:"30%",maxWidth:"32%",display:{lg:"none",md:"none",xs:"none",}}}>
                <Typography variant="h6">Backend Technologies waar ik ervaring mee heb</Typography>
                <Box sx={{display:"flex", columnGap:".5rem", maxWidth:"30%", paddingTop:3,paddingBottom:3}}>
                    <Typography><a title="Jason Groce, Public domain, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:.NET_Core_Logo.svg"><img style={{backgroundColor:"white", borderRadius:"2rem", }} width="64" alt=".NET Core Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/64px-.NET_Core_Logo.svg.png"/></a></Typography>
                    <Typography><a title="expressjs developers, Public domain, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Expressjs.png"><img style={{backgroundColor:"white", borderRadius:"2rem", }} width="64" alt="Expressjs" src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"/></a></Typography>
                    <Typography><a title="™/®Oracle Corporation, Public domain, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:MySQL_textlogo.svg"><img style={{backgroundColor:"white", borderRadius:"2rem", }} width="64" alt="MySQL textlogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/MySQL_textlogo.svg/64px-MySQL_textlogo.svg.png"/></a></Typography>
                    <Typography><a title="Mike Zinner of [mariadb.org], CC BY-SA 3.0 &lt;https://creativecommons.org/licenses/by-sa/3.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Mariadb-seal-browntext.svg"><img width="64" alt="Mariadb-seal-browntext" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Mariadb-seal-browntext.svg/64px-Mariadb-seal-browntext.svg.png"/></a></Typography>
                    <Typography><a title="Typeorm logo" href="https://user-images.githubusercontent.com/30929568/112730670-de09a480-8f58-11eb-9875-0d9ebb87fbd6.png"><img style={{backgroundColor:"white", borderRadius:"2rem", }} width="64" alt="Typeorm logo" src="https://user-images.githubusercontent.com/30929568/112730670-de09a480-8f58-11eb-9875-0d9ebb87fbd6.png"/></a></Typography>
                    <Typography><a title="Alexander Sosluev, CC BY-SA 4.0 &lt;https://creativecommons.org/licenses/by-sa/4.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Mongodb.png"><img style={{backgroundColor:"white", borderRadius:"2rem", }} width="64" alt="Mongodb" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Mongodb.png/64px-Mongodb.png"/></a></Typography>
                </Box>
            </Paper>
            <Paper elevation={5} sx={{padding:2,minWidth:"30%",maxWidth:"32%" ,display:{lg:"none",md:"none",xs:"none"}}}>
                <Typography variant="h6">andere technologieën die ik gebruik of ervaring mee heb</Typography>
                <Box sx={{display:"flex", columnGap:".5rem", paddingTop:3,paddingBottom:3}}>
                    <Typography><a title="UiPath.com, Public domain, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:UiPath_Logo.png"><img style={{padding:".3rem", backgroundColor:"white", borderRadius:"2rem",borderWidth:0 }} width="64" alt="UiPath Logo" src="https://upload.wikimedia.org/wikipedia/commons/9/96/UiPath_Logo.png"/></a></Typography>
                </Box>

            </Paper>
        </Box>
    )
}

export default FrontEnd;