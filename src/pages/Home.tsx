import LinearProgress from '@mui/material/LinearProgress';
import Grid from '@mui/material/Unstable_Grid2';
import { ThemeProvider} from '@mui/material';
import {useContext} from "react"
import {modeDataContext} from "./Layout"
const HomePage = ()=>{
const theme = useContext(modeDataContext)
return (
        <>
        <Grid container spacing={5}>
        <Grid xs={8} >
            <div style={{fontFamily:"roboto", maxWidth:'50%', margin:"auto", marginTop:50}}>
                <h2>Hi!</h2>
                <p>My name is Kasper Bosteels.<br></br>I am student programmer at Artesis Plantijn, following the graduates programming.<br></br>
                I am in my final year, this website was one of our projects we had to make.<br></br>
                For more information about me you can check out the About page, or email me via the Contact page.<br></br>
                To check out some of my work, click the link to my github page at the bottom of this page, or go to components.</p>
            </div>
            </Grid>
            <Grid xs={4} >
                <div style={{minWidth:"50%", maxWidth:"70%", height:"100%", margin:"auto", borderWidth:5,borderColor:"rgba(0,0,0,0.3)",backgroundColor:"rgba(0,0,0,0.1)", borderStyle:"solid", borderRadius:"1rem", marginTop:50 }}>
                <h2>My skills</h2>
                <label>JS</label><LinearProgress color="info" variant="determinate" value={50}/>
                <label>TS</label><LinearProgress color="primary" variant="determinate" value={65}/>
                <label>C#</label><LinearProgress color="secondary" variant="determinate" value={45}/>
                <label>React</label><LinearProgress color="info" variant="determinate" value={30}/>
                <label>Python</label><LinearProgress color="warning"variant="determinate" value={15}/>
                </div >
            </Grid>
        </Grid>
        </>
    )
}
export default HomePage;