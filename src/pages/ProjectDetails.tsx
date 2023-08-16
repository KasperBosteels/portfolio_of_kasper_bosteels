import Box from "@mui/material/Box";
import './pageStyling.css'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { project } from "./Projects";
import { ImageList, ImageListItem, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";


const ProjectDetails = () => {
const id = useParams().id;
const [proj, setProj] = useState<project>();

const getProject =async () => {
    let project = require("../components/projects/projects.json").find((x:project) => x.id === id)?? [];
    return project;
}

useEffect(() => {
    getProject()
    .then((res:any) => {
        setProj(res);
    })
});

    return (
    <Box className="Project_container">
       {
              proj !== undefined ? (
                <Box display="flex" flexDirection="row">
                <Box className="project_text_content">
                    <Typography variant="h4" component="div">{proj.title}</Typography>
                    <Paper elevation={3} sx={{padding:2, marginTop:5}}>
                    <Typography variant="body1" component="div" marginTop="2rem">
                    {proj.description}
                    </Typography>
                    <Typography variant="body1" component="div" marginTop="2rem">
                    {proj.details}
                    </Typography>
                    
                    {proj.link ? 
                    <Link to={proj.link} style={{ textDecoration:"none"}}>
                    <Typography variant="body1" component="div" marginTop="5rem">
                        {proj.link}
                    </Typography>
                    </Link>
                    
                    : <></>}
                    </Paper>
                </Box>
                <Box className="Project_images_container" sx={{display:{md:"none", lg:"flex"}}} >
                    <ImageList
                        sx={{minWidth:500, width:"100%", height:"fit-content", padding:"1rem"}}
                        variant="quilted"
                        cols={2}
                        rowHeight={300}
                        gap={7}
                        
                        >
                        {
                            proj.image ?
                            <ImageListItem key={proj.image} cols={1} rows={1}>
                                <img 
                                className="Project_image"
                                   
                                    src={"/"+proj.image}
                                    loading="lazy"
                                    alt={"/"+proj.image}
                                    />
                            </ImageListItem>
                            :
                            <></>
                        }

                        {
                            proj.extraImages ?
                            proj.extraImages.map((img,i)=>
                            <ImageListItem key={i}>
                                <img
                                 className="Project_image"
                                    src={"/"+img}
                                    loading="lazy"
                                    alt={"/"+img}
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
                    <Box>
                        <h1>Project not found</h1>
                    </Box>
                )

       }
    </Box>
    );

};

export default ProjectDetails;