import Box from "@mui/material/Box";
import './pageStyling.css'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { project } from "./Projects";
import { Button, ImageList, ImageListItem, Paper, Typography } from "@mui/material";
import Link from "@mui/material/Link"
import Backdrop from '@mui/material/Backdrop';

const ProjectDetails = () => {
const [projects] = useState<project[]>(require("../components/projects/projects.json") ?? []);
const id = useParams().id;
const [proj, setProj] = useState<project>();
const [openimg, setOpenimg] = useState<string|null>();

const openimgHandler = (img:string) => {
    setOpenimg(img);
}

const closeimgHandler = () => {
    setOpenimg(null);
}

useEffect(() => {
    setProj(projects.filter(x=>x.id === id)[0]?? undefined);
}, [id,projects]);

    return (
    <Box className="Project_container">
       {
              proj !== undefined ? (
                <Box display="flex" flexDirection="row">
                <Box className="project_text_content">
                    <Typography variant="h4" component="div">{proj.title}</Typography>
                    <Paper elevation={3} sx={{padding:2, marginTop:5}}>
                    <Typography variant="body1" component="div" marginTop="2rem">
                    {proj.year}
                    </Typography>
                    <Typography variant="h5" component="div" marginTop="2rem">
                        Beschrijving:
                    </Typography>
                    <Typography variant="body1" component="div" marginTop=".5rem">
                    {proj.description}
                    </Typography>
                    { proj.details ? <>
                    <Typography variant="h5" component="div" marginTop="2rem">
                        Details:
                    </Typography>
                    <Typography variant="body1" component="div" marginTop=".5rem">
                    {proj.details}
                    </Typography>
                    </>
                    :
                    <></>
                    }
                    {proj.link ? 
                    <Link href={"https://github.com/"+proj.link}>
                    <Typography variant="h5" component="div" marginTop="2rem">
                    {"https://github.com/"+proj.link}
                    </Typography>
                    </Link>
                    
                    
                    : <></>
                    }
                    
                    
                    </Paper>
                </Box>
                <Box className="Project_images_container" sx={{display:{md:"none", lg:"inline-flex"}}} >
                    <ImageList
                        sx={{minWidth:500, width:"100%", height:"fit-content", padding:"1rem"}}
                        variant="quilted"
                        cols={2}
                        rowHeight="auto"
                        gap={1}               
                        >
                        
                        {
                            proj.extraImages ?
                            proj.extraImages.map((img,i)=>
                            <ImageListItem key={i}>
                                <img
                                 className="Project_image"
                                    src={"/"+img}
                                    loading="lazy"
                                    alt={"/"+img}
                                    onClick={()=>openimgHandler("/"+img)}
                                    />
                            </ImageListItem>
                            )
                            :
                            <></>
                        }
                    </ImageList>
                </Box>
                </Box>
                ) : (
                    <Box margin="auto" marginTop="5rem" display="flex" alignContent="center" justifyItems="center" alignItems="center" justifyContent="center">
                        <h3>Project not found</h3>
                    </Box>
                )

       }
       {
        openimg != null ?
       <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openimg !== null}
        onClick={closeimgHandler}>
        <img className="selectedImage"
            src={openimg}
            loading="lazy"
            alt={openimg}
            style={{maxWidth:"90%", maxHeight:"90%"}}
            />       
        </Backdrop> : <></>
        }
    </Box>
    );

};

export default ProjectDetails;