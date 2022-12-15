import LinearProgress from '@mui/material/LinearProgress';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import NYTimes from '../components/NYTimes';





const HomePage = ()=>{
    return (
        <>
        <Paper elevation={0}>
        <Grid container spacing={5} className="homeGrid" sx={{color:"text.primary", 
        bgcolor:"background.default", 
        marginTop:".5rem"}}>
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
            <Grid xs={4} >
                <Typography>
                <div className="skilsComponent">
                <h2>My skills</h2>
                <label>JS</label><LinearProgress color="info" variant="determinate" value={70}/>
                <label>TS</label><LinearProgress color="primary" variant="determinate" value={65}/>
                <label>C#</label><LinearProgress color="secondary" variant="determinate" value={50}/>
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