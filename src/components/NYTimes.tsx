import Grid from "@mui/material/Grid"
import CircularProgress from "@mui/material/CircularProgress/CircularProgress"
import axios from 'axios';
import {Result} from "../interfaces"
import Article from './articleComponent';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
const NYTimes = () =>{
const [news,setNews] = useState<Result[]>([]);
    axios.get("https://api.nytimes.com/svc/topstories/v2/science.json?api-key=ZIdGxGbiWw9if9XwvGTQm26JA3jzYEXy").then((res)=>{
    let data:Result[] = JSON.parse(JSON.stringify(res)).data.results
    setNews([data[4],data[5],data[6]])
    }).catch((err)=>console.log(err))
    return (
        <>
        <Grid 
            container 
            direction={news.length > 0 ? "row" : "column"} 
            style={{
                maxWidth:"90%", 
                margin:"auto",
                padding:".1rem", 
                maxHeight:500,
                minHeight:375,
                height:"fit-content",
                verticalAlign:"center",
                justifyContent:"center",
                marginTop:"10%",
                flexDirection:"column", 
                marginBottom:"8%",
                flexGrow:1,
                }}
            sx={{display:{lg:"flex",md:"none",xs:"none"}}}
            >
            {news.length > 0 ? (
            news.map((n)=>(<Article data={n}/>))
            ) : (<><Typography color="text.primary" sx={{marginRight:"1rem"}}> assembling the news for you...</Typography><CircularProgress/></>)}
        </Grid>
        </>
    )
   
}
export default NYTimes;