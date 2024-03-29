import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import Card  from "@mui/material/Card";
import Box from "@mui/system/Box";
import { post } from "./allBlogs";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import Chip from "@mui/material/Chip";
interface blogArticleProps{
post:post,
maxWidth?:string,
maxHeight?:string,
button?:boolean
tags?:string[],
gap?:string

}
const BlogArticle = ({post,maxWidth="25%",maxHeight="fit-content",button=false,tags = [],gap="auto"}:blogArticleProps)=>{
    return (
        <Card 
        style={{
            minWidth:300,
            maxWidth:maxWidth,
            margin:"auto",
            marginBottom:gap,
            backgroundColor:"palette.secondary.dark"}}
        elevation={8}>
            <CardHeader
            sx={{backgroundColor:"primary.main"}}
            title={post.title ?? "Stage Robonext"}
            subheader={new Date(post.date).toDateString()}
            color="palette.text.primary"
            />
            <CardContent>
                <Box>
                    <Typography
                    height={maxHeight}
                    typography="nowrap"
                    overflow="hidden"
                    whiteSpace="break-spaces"
                     variant="body2"
                     color="text.secondary">
                    {post.text}
                    </Typography>
                    {button ?<NavLink to="Blog"><Button variant="text">Read More...</Button></NavLink>:<></>}
                    {tags.map((t,i)=>(<Chip key={"tagid"+i} variant="outlined" label={t}/>))}
                </Box>
            </CardContent>
        </Card>
    )
}
export default BlogArticle;