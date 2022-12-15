import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import NYTimes from '../components/NYTimes';
import Box from '@mui/material/Box';
import SkillsPanel from '../components/SkillsPanel';

const HomePage = ()=>{
    return (
        <Box sx={{width:"100%", display:"flex", justifyContent:"center"}}>
        <Grid container className="homeGrid" sx={{
        color:"text.primary", 
        bgcolor:"background.default", 
        marginTop:"2rem",
        display:"flex",
        width:"90%"
        }}>
        <Grid xs={8} >
            <Typography className="homeText">
                <h3>welkom</h3>
                <p>Mijn naam is Kasper Bosteels en ik ben een programmeur. 
                    <br></br>Ik ben gespecialiseerd in talen zoals JavaScript, TypeScript, C#, Bash en een beetje PHP. 
                    <br></br>Ik heb ook ervaring met technologieën zoals Typeorm, React.js en React.ts, MongoDB, MySQL, WordPress, Arduino,node, NPM, Uipath en DotNet.<br></br>
                    Daarnaast spreek ik vloeiend Nederlands en Engels. 
                    <br></br>Dit stelt me in staat om op een gemakkelijke manier te communiceren met zowel nationale als internationale klanten.<br></br>
                    Ik ben altijd op zoek naar nieuwe uitdagingen en kansen om mijn vaardigheden te verbeteren en te laten groeien. 
                    <br></br>Als u op zoek bent naar een professionele en gemotiveerde programmeur, aarzel dan niet om contact met me op te nemen.<br></br>
                    <br></br>Met vriendelijke groet,
                    <br></br>Kasper Bosteels</p>
                    <p className='tinyText'>(made by OpenAI)</p>
            </Typography>
            </Grid>
           <Grid xs={4}>
            <SkillsPanel/>
           </Grid>
            <NYTimes/>          
        </Grid>
        </Box>
    )
}
export default HomePage;