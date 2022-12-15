import { CardActionArea, CardContent, Typography, CardActions,Button,Card } from "@mui/material"
import { Link } from "react-router-dom";
export interface ComponentCardProps {
    Title:string,
    Description:string,
    Path:number
}
const ComponentCard = ({Title,Description,Path}:ComponentCardProps)=>{
    
    return (
    <Card sx={{maxWidth:250, margin:"1%"}}>
        <CardActionArea>
            <CardContent>
                <Typography variant="h5">
                    {Title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {Description}
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
        <Link to={Path.toString()}><Button size="small" color="primary">Open</Button></Link>    
        </CardActions>
    </Card>
    )
}
export default ComponentCard;