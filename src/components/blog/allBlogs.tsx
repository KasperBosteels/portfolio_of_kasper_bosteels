import BlogArticle from "./blogArticle";
import { useState } from "react";
import Box from "@mui/material/Box";
import  CircularProgress  from "@mui/material/CircularProgress";
export interface post {
    date:string,
    text:string,
    title?:string,
}
const AllBlogs = ()=>{
const [posts,setPosts] = useState<post[]>(require("./blogs/blogs.json").Posts.sort((a:post,b:post)=> new Date(a.date) < new Date(b.date)?+1 :0) ?? []);
return (


    <Box sx={{
        display:"flex", 
        flexDirection:"column", 
        alignContent:"space-evenly", 
        justifyContent:"center",
        rowGap:"2rem",
        marginTop:"5%"}}>
        {posts.length>0 ?  
            (
                <>
                {posts.map((p,i)=><BlogArticle key={"post-"+i} post={p} maxWidth="70%" button={false}/>)}
                </>
                ) : <CircularProgress  sx={{marginTop:"15%"}}/>}
    </Box>
)
}
export default AllBlogs;