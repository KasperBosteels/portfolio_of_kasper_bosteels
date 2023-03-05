import BlogArticle from "./blogArticle";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import  CircularProgress  from "@mui/material/CircularProgress";
import { TextField } from "@mui/material";
export interface post {
    date:string,
    text:string,
    title?:string,
    tags?:string[]
}
const AllBlogs = ()=>{
const [posts] = useState<post[]>(require("./blogs/blogs.json").Posts.sort((a:post,b:post)=> new Date(a.date) < new Date(b.date)?+1 :0) ?? []);
const [FilteredPOsts, setFilteredPosts] = useState<post[]>(posts);
const [FilterText,setFilterText] = useState<string>("");

const EditText =(input:string)=>{
 setFilterText(input??"");
}
useEffect(() => {
  
    setFilteredPosts(posts.filter(x=>x.title?.toLowerCase().includes(FilterText.toLowerCase())))

}, [FilterText,posts])

return (

    <Box sx={{marginBottom:"1rem"}}>
    <Box
        sx={{
          display:"flex",
          alignContent:"center",
          justifyContent:"center",  
          marginTop:"2rem",
          padding:"4rem",
        }}
        >
        <TextField variant="outlined"label="Filter By title"
            onChange={(e)=>EditText(e.target.value)}
            />
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
                {FilteredPOsts.map((p,i)=><BlogArticle key={"post-"+i} post={p} maxWidth="70%" button={false} tags={p.tags}/>)}
                </>
                ) : <CircularProgress  sx={{marginTop:"15%"}}/>}
    </Box>
    </Box>
    </Box>
)
}
export default AllBlogs;