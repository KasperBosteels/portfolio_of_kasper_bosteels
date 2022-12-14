import Grid from "@mui/material/Grid"
import CircularProgress from "@mui/material/CircularProgress/CircularProgress"
import axios from 'axios';
import {Result} from "../news-interfaces"
import Article from './articleComponent';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';

interface NYTimesprops{
timeout:number
}
const NYTimes = ({timeout}:NYTimesprops) =>{
const [news,setNews] = useState<Result[]>([]);
    useEffect(() => {
        axios.get("https://api.nytimes.com/svc/topstories/v2/science.json?api-key=ZIdGxGbiWw9if9XwvGTQm26JA3jzYEXy").then((res)=>{
            let data:Result[] = JSON.parse(JSON.stringify(res)).data.results
            setNews([data[4],data[5],data[6]])
            }).catch((err)=>console.log(err))    

    },[timeout])
    return (
        <>
        <Grid 
            container 
            direction={news.length > 0 ? "row" : "column"} 
            style={{
                maxWidth:"90%", 
                maxHeight:500,
                minHeight:375,
                height:"fit-content",
                padding:".1rem", 
                margin:"auto",
                marginTop:"10%",
                marginBottom:"8%",
                verticalAlign:"center",
                justifyContent:"center",
                flexDirection:"column", 
                flexGrow:1,
            }}
            sx={{display:{lg:"flex",md:"none",xs:"none"}}}
            >
            {news.length > 0 ? (
            news.map((n,i)=>(<Article key={"card-"+i} data={n}/>))
            ) : (<><Typography color="text.primary" sx={{marginRight:"1rem"}}>assembling the news for you...</Typography><CircularProgress/></>)}
        </Grid>
        </>
    )
   
}
export default NYTimes;