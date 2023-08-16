import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { project } from "./Projects";
import { ImageList, ImageListItem, Typography } from "@mui/material";
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
    <Box sx={{margin:"auto", justifyContent:"center", alignContent:"center", width:"80%"}}>
       {
              proj !== undefined ? (
                <Box display="flex" flexDirection="row">
                <Box marginTop="5rem">
                    <Typography variant="h4" component="div">{proj.title}</Typography>
                    <Box>
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
                    </Box>
                </Box>
                <Box sx={{display:{md:"none", lg:"flex"}}} padding="1rem" justifyContent="center" alignContent="center" margin="auto" minWidth="40%" flexDirection="column" height="fit-content">
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
                                    style={{
                                        boxShadow:" 0px 1px 4px rgba(0,0,0,0.16)",
                                    }}
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
                                <img  style={{
                                        boxShadow:" 0px 1px 4px rgba(0,0,0,0.16)",
                                    }}
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