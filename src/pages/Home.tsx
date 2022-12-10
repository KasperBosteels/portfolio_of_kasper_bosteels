import LinearProgress from '@mui/material/LinearProgress';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import NYTimes from '../components/NYTimes';







const HomePage = ()=>{
    return (
        <>
        <Paper elevation={0}>
        <Grid container spacing={5} sx={{color:"text.primary", bgcolor:"background.default", marginTop:".5rem"}}>
        <Grid xs={8} >
            <Typography style={{fontFamily:"roboto", marginTop:50}}>
                <h3>welkom</h3>
                <p>Welkom op mijn portfolio site! 
                    Ik ben Kasper Bosteels, een ervaren ontwikkelaar met een passie voor het creëren van 
                    slimme en gebruiksvriendelijke applicaties. Op deze site kunt u enkele van mijn recente 
                    projecten bekijken, evenals informatie over mijn vaardigheden en werkervaring. Neem gerust contact 
                    met mij op als u geïnteresseerd bent in mijn diensten of als u gewoon verder wilt praten over technologie en ontwikkeling.</p>
                    <p className='tinyText'>(made by OpenAI)</p>
            </Typography>
            </Grid>
            <Grid xs={4} >
                <Typography>
                <div style={{minWidth:"50%", maxWidth:"70%", height:"100%", margin:"auto", marginTop:50 }}>
                <h2>My skills</h2>
                <label>JS</label><LinearProgress color="info" variant="determinate" value={50}/>
                <label>TS</label><LinearProgress color="primary" variant="determinate" value={65}/>
                <label>C#</label><LinearProgress color="secondary" variant="determinate" value={45}/>
                <label>React</label><LinearProgress color="info" variant="determinate" value={30}/>
                <label>Python</label><LinearProgress color="warning"variant="determinate" value={15}/>
                </div >
                </Typography>
            </Grid>
            <NYTimes/>          
        </Grid>
        </Paper>
        </>
    )
}
export default HomePage;