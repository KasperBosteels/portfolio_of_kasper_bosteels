import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import Card  from "@mui/material/Card";
import Box from "@mui/system/Box";
import { post } from "./allBlogs";
interface blogArticleProps{
post:post,
maxWidth?:string,
maxHeight?:string,
title?:string
}
const BlogArticle = ({post,maxWidth="25%",maxHeight="fit-content",title="Stage @ Robonext"}:blogArticleProps)=>{
    return (
        <Card 
        style={{
            maxWidth:maxWidth,
            margin:"auto",
            backgroundColor:"palette.secondary.dark"}}
        elevation={8}>
            <CardHeader
            sx={{backgroundColor:"primary.main"}}
            title={title}
            subheader={new Date(post.date).toDateString()}
            color="palette.text.primary"
            />
            <CardContent>
                <Box sx={{
                        whiteSpace:"break-spaces",
                        overflow:"hidden", 
                        textOverflow:"ellipsis", 
                        maxHeight:maxHeight,
                        paddingBottom:5}}>
                    <Typography
                        variant="body2"
                        color="text.secondary">
                    {post.text}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    )
}
export default BlogArticle;