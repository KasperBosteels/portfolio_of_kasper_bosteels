
import CardHeader  from "@mui/material/CardHeader"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions"
import Button from "@mui/material/Button"
import Link from "@mui/material/Link"
import { Result } from "../news-interfaces"
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import Box from "@mui/material/Box";

interface articleProp {
    data:Result
}
const Article = ({data}:articleProp)=>{
return (
    <Card style={{
        maxWidth:"28%",
        maxHeight:420,
        margin:"auto",
        backgroundColor:"palette.secondary.dark"}} 
        elevation={10}>
        
        <CardHeader 
        avatar={
            <a href="https://developer.nytimes.com.">
                <img src="/poweredby_nytimes_30a.png" alt="./logo192.png"/>
            </a>}
        title={data.title}
        subheader={new Date(data.published_date).toDateString()}
        color="palette.text.primary"/>
        <CardMedia
            component="img"
            height="194"
            image={data.multimedia[0].url}
            alt="logo192.png"
            />
        <CardContent>
            <Box sx={{
                overflow: "hidden",
                textOverflow:"clip",
                whiteSpace:"break-spaces",
                height:"4.5rem",
            }}>
            <Typography
                sx={{overflow:"hidden"}} 
                variant="body2" 
                color="text.secondary">
                    {data.abstract}
            </Typography>
            </Box>
        <CardActions>
        <Link href={data.url}><Button size="small" color="primary" startIcon={<AutoStoriesIcon/>}>Read More</Button></Link>
        </CardActions>
        
        
        </CardContent>
        
    </Card>
)
}
export default Article;