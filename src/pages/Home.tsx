import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SkillsPanel from '../components/SkillsPanel';
import LatestBlogs from '../components/blog/latestBlogs';
import FrontEnd from '../components/Technologies';
const HomePage = ()=>{
    return (
        <Box 
        sx={{ 
        width:"100%", 
        display:"flex",
        justifyContent:"center",}}>
        <Grid 
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
            <Typography> 
            Welkom op mijn portfolio site.<br></br>
            Ik ben Kasper Bosteels, in 2023 ben ik afgestudeerd aan Artesis Plantijn Hogeschool met grote onderscheiding<br></br>
            Om een Fullstack programmeur te worden, volgde ik er de richting Programmeren.<br></br>
            Nu sta ik open voor totale nieuwe uitdagingen.<br></br>

            Ik volgde de richting Programmeren om een full stack developer te worden.<br></br>
            ik sta open voor totale nieuwe uitdagingen.<br></br>
            Naast de verschillende programmeer talen heb ik al ervaring met een reeks van frameworks, zoals react, Angular, Material Ui, gatsby en Asp.net Core Entity Framework.<br></br>
            Mijn favoriete technologiën zijn Typescript, node en Typeorm.<br></br>
            Buiten IT doe ik ook nog Scuba duiken.
            <br></br>
            <br></br>
            Mocht u interesse hebben of nog vragen, stuur me dan zeker een mailtje.
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