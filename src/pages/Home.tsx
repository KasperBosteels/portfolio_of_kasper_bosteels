import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SkillsPanel from '../components/SkillsPanel';
import LatestBlogs from '../components/blog/latestBlogs';
import FrontEnd from '../components/Technologies';
import './pageStyling.css'
const HomePage = ()=>{
    return (
        <Box 
        className="Home_page_container">
        <Grid 
            className="Home_page_Grid"
            container
            sx={{
            color:"text.primary", 
            margin:"auto",
            marginTop:"2rem",
            display:"flex",
            width:"90%"
        }}>
        <Box sx={{
            display: "flex",
            alignItems: "center",
            margin: "auto",
            width: "90%",
            flexDirection:"row",
            height:"fit-content",
            columnGap:"21%",
            padding:"1rem",
            }}>
            <Box>
            <Typography>Welkom op mijn portfolio website.<br></br>
Ik ben Kasper Bosteels en in 2023 ben ik met grote onderscheiding afgestudeerd aan Artesis Plantijn Hogeschool.<br></br>
Mijn passie voor Fullstack programmeren bracht me naar de opleiding Programmeren, waar ik mijn vaardigheden heb verfijnd.<br></br>
Ik sta nu open voor boeiende en vernieuwende uitdagingen.<br></br>

Het volgen van de richting Programmeren heeft me de kennis bijgebracht om een ervaren full stack developer te worden.<br></br>
Mijn nieuwsgierigheid leidde me tot het ontdekken van diverse programmeertalen en frameworks, waaronder React, Angular, Material UI, Gatsby en ASP.NET Core Entity Framework.<br></br>
Ik ben met name enthousiast over technologieën zoals TypeScript, Node.js en TypeORM.<br></br>
Naast mijn IT-interesses ben ik ook een gepassioneerde duiker, klaar om nieuwe dieptes te verkennen.
<br></br>
<br></br>
Indien u geïnteresseerd bent of vragen heeft, aarzel dan niet om contact met mij op te nemen via e-mail.
<br></br>
<br></br>
Met vriendelijke groet,<br></br>
Kasper Bosteels
            </Typography>
            </Box>
           <Box sx={{minWidth:"30%", display:{lg:"flex",md:"none",xs:"none"}}}>
            <SkillsPanel/>
           </Box>
        </Box>
            <FrontEnd/>
            <LatestBlogs/>
        </Grid>
        </Box>
    )
}
export default HomePage;