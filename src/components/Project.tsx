import { project } from "../pages/Projects"
import { Button, Card, CardActions, CardContent, CardMedia, Chip, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Typography} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

interface props {
    proj:project
}


const Project = ({proj}:props) => {
    const [Open,setOpen] = useState<boolean>(false);
    
    const handleClickOpen = () => {
        setOpen(true);
        };
    
    const handleClose = () => {
        setOpen(false);
        };
    

    return (
    <Card elevation={3} sx={{maxWidth:350, margin:"1%", display:"flex", flexDirection:"column",}}>
            {
                proj.image ? <CardMedia component="img" sx={{maxHeight:300}} image={"./"+proj.image} alt={proj.title}/> : <></>
            }
            <CardContent sx={{display:"flex", flexDirection:"column", height:"100%", overflow:"hidden"}}>
                
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
            <CardActions sx={{marginTop:"auto"}}>
            <NavLink to={proj.id}><Button href={proj.id} variant="outlined" size="small" color="secondary">Details </Button></NavLink>
            <Button onClick={handleClickOpen} variant="outlined" size="small" color="secondary">Details </Button>
            {
                proj.link ? <Link to={proj.link} style={{ textDecoration:"none"}}><IconButton href={proj.link}><GitHubIcon/></IconButton></Link> : <></>
            }
            </CardActions>
            <Dialog open={Open}>
                <DialogTitle>{proj.title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {proj.details}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
    </Card>
    )
}

export default Project;