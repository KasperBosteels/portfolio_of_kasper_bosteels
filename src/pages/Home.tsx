import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import NYTimes from '../components/NYTimes';
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
            <Typography variant='h5'>Beste bezoeker,</Typography>
            <Typography> 
            Welkom op mijn portfolio site! Mijn naam is Kasper Bosteels en ik ben een student aan Artesis Plantijn<br></br>
            waar ik mijn opleiding tot full stack prorammeur volg. Programmeer talen die ik reeds goed beheer zijn: C#, Javascript, Typescript,SQL, html & css.<br></br>
            Ik werk persoonlijk liefst in backend of frontend web development, maar ik sta open voor totale nieuwe uitdaginen.<br></br>
            Ik heb ook al ervaring met een reeks van frameworks, zoals react, Angular, Material Ui en gatsby.
            en werk graag met Typeorm, mysql en mongodb.
            <br></br>
            <br></br>
            Mocht u interesse hebben of nog enkele vragen, kan je zeker een emailtje sturen
            <br></br>
            <br></br>
            Met vriendelijke groet,<br></br>
            Kasper Bosteels
            </Typography>
            </Box>
           <Box sx={{minWidth:"30%"}}>
            <SkillsPanel/>
           </Box>
        </Box>
            <FrontEnd/>
            <LatestBlogs/>
            <NYTimes timeout={30*60*1000}/>    
        </Grid>
        </Box>
    )
}
export default HomePage;