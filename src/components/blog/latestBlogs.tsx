import BlogArticle from "./blogArticle";
import { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { post } from "./allBlogs";
import { Button, CircularProgress, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import ChromeReaderModeTwoToneIcon from '@mui/icons-material/ChromeReaderModeTwoTone';
const LatestBlogs =()=>{
const [posts,setPosts] = useState<post[]>(require("./blogs/blogs.json").Posts.sort((a:post,b:post)=> new Date(a.date) < new Date(b.date) ? +1 : 0).filter((p:post,i:number)=>i <=3) ?? [])

    return (
        <Box>
            <Box sx={{display:"flex", width:"100%", justifyContent:"space-between"}}>
                <Typography variant="h5">Latest Blog posts</Typography>
                <NavLink to="Blog" style={{textDecoration:"none"}}><Button startIcon={<ChromeReaderModeTwoToneIcon/>} variant="text">Read all blog posts...</Button></NavLink>
            </Box>
    <Box sx={{borderStyle:"solid", borderTopWidth:2, borderBottomWidth:0,borderLeftWidth:0,borderRightWidth:0, borderColor:"text.primary",}}>
    <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between", alignContent:"space-between", width:"100%", marginBottom:"1%", marginTop:0.5}}>
      {posts.length>0 ?  
            (
                <>
                {posts.map((p,i)=><BlogArticle key={"post-"+i} post={p} maxHeight="15rem"/>)}
                </>
                ) : <CircularProgress  sx={{marginTop:"15%"}}/>}
    </Box>
    </Box>
    </Box>
    )
}
export default LatestBlogs;