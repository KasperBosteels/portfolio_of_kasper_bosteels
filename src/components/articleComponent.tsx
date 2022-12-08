
import { CardHeader, Avatar } from "@mui/material"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { Card } from "react-bootstrap"
import { Result } from "../interfaces"
interface articleProp {
    data:Result
}
const Article = ({data}:articleProp)=>{
return (
    <Card style={{maxWidth:345,maxHeight:390, margin:"auto"}}>
        <CardHeader avatar={<a href="https://developer.nytimes.com."><img src="/poweredby_nytimes_30a.png"/></a>}
        title={data.title}
        subheader={new Date(data.published_date).toDateString()}/>
        <CardMedia
            component="img"
            height="194"
            image={data.multimedia[0].url}
            alt="logo192.png"/>
        <CardContent>
            <Typography variant="body2" color="text.secondary">{data.abstract}</Typography>
        </CardContent>
    </Card>
)
}
export default Article;