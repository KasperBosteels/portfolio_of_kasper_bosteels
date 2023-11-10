import { project } from "../pages/Projects"
import { Button, Card, CardActions, CardContent, CardMedia, Chip, IconButton, Typography} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from "react-router-dom";

interface props {
    proj:project
}


const Project = ({proj}:props) => {
    return (
    <Card elevation={3} sx={{maxWidth:350, height:'fit-content', margin:"1%", marginTop:0, display:"flex", flexDirection:"column",}}>
            {
                proj.image ? <CardMedia component="img" sx={{maxHeight:300}} image={"./"+proj.image} alt={proj.title}/> : <></>
            }
            <CardContent sx={{display:"flex", flexDirection:"column", height:"fit-content", overflow:"hidden"}}>
                <Typography variant="h5" component="div">
                    {proj.title} - {proj.year}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{flex: "1 0 auto", maxHeight:"15rem", overflow:"hidden"}}>
                    {proj.description}
                </Typography>
                <Typography variant="body2" color="text.secondary" marginTop="1rem" alignItems="end">
                    Tags:<br></br>
                    {proj.tags?.map((t,i)=><Chip key={i} label={t} color="default" sx={{marginLeft:".3rem", marginTop:".2rem"}} />)}
                </Typography>
            </CardContent>
            <CardActions sx={{marginTop:"auto", height:"fit-content"}}>
            <Link to={proj.id}><Button variant="outlined" size="small" color="secondary">Details </Button></Link>
            {
                proj.link ? <Link to={"https://github.com/"+proj.link} style={{ textDecoration:"none"}}><IconButton href={proj.link}><GitHubIcon/></IconButton></Link> : <></>
            }
            </CardActions>
    </Card>
    )
}

export default Project;