import Box from "@mui/material/Box"
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";
import Project from "../components/Project";
import './pageStyling.css'
export interface project {
    id:string,
    title:string,
    description:string,
    tags?:string[],
    image:string,
    year?:number,
    link?:string
    details:string
    extraImages?:string[],
    file?:string
}
const Projects = () => {

    const [projects] = useState<project[]>(require("../components/projects/projects.json"));

    return (
        <Box className="Projects_Page_Container" >
            <Box sx={{margin:"auto"}}>
                <h2>Projecten</h2>
            </Box>
            <Box className="Projects_Container" >
            {
                (projects.map.length > 0) ? projects.map((p,i)=><Project proj={p} key={"key-"+p.id}/>) : <CircularProgress/>
            }
            </Box>
        </Box>
    )
}

export default Projects;