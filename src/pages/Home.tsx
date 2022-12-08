import LinearProgress from '@mui/material/LinearProgress';
import Grid from '@mui/material/Unstable_Grid2';
import useTheme from '@mui/material/styles/useTheme';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
const HomePage = ()=>{
return (
        <>
        <Paper elevation={0}>

        <Grid container spacing={5} sx={{color:"text.primary", bgcolor:"background.default", marginTop:".5rem"}}>
        <Grid xs={8} >
            <Typography style={{fontFamily:"roboto", marginTop:50}}>
                <h2>Hi!</h2>
                <p>My name is Kasper Bosteels.<br></br>I am student programmer at Artesis Plantijn, following the graduates programming.<br></br>
                I am in my final year, this website was one of our projects we had to make.<br></br>
                For more information about me you can check out the About page, or email me via the Contact page.<br></br>
                To check out some of my work, click the link to my github page at the bottom of this page, or go to components.</p>
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
        </Grid>
        </Paper>

        </>
    )
}
export default HomePage;