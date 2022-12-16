import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import NYTimes from '../components/NYTimes';
import Box from '@mui/material/Box';
import SkillsPanel from '../components/SkillsPanel';


const HomePage = ()=>{
    return (
        <Box className="ContainerBox" style={{ width:"100%", 
        display:"flex",
        justifyContent:"center",}}>
        <Grid container className="homeGrid" sx={{
        color:"text.primary", 
        bgcolor:"background.default", 
        marginTop:"2rem",
        display:"flex",
        width:"90%"
        }}>
        <Grid xs={8} >
            <Typography className="homeText">
            <h4>Beste bezoeker,</h4>
            Welkom op mijn portfolio site! Mijn naam is Kasper Bosteels en ik ben een student aan Artesis Plantijn<br></br>
            waar ik mijn opleiding tot programmeur volg. Mijn programmeervaardigheden omvatten<br></br> 
            C#, JavaScript, TypeScript<br></br>
            en ik werk met frameworks en platformen zoals React, Material UI, Express,<br></br>DotNet Web API, Node en Git.<br></br>
            Verder heb ik ook kennis van databases zoals MySQL, MongoDB en TypeORM en ben ik ook<br></br>
            bekend met tools zoals HeidiSQL, Oracle virtual Box, Windows Server 2019.<br></br>
            Daarnaast beheers ik ook HTML, CSS en heb ik kennis van UiPath.
            <br></br>
            <br></br>
            Ik hoop dat u interessante projecten en informatie op mijn site zult vinden en aarzel niet om<br></br>
            contact met mij op te nemen als u vragen of opmerkingen heeft.
            <br></br>
            <br></br>
            Met vriendelijke groet,<br></br>
            Kasper Bosteels
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