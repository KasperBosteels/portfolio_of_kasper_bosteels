import React,{ useState } from 'react';
import { CircularProgress, Grid, Paper } from '@mui/material';
import axios from 'axios';
import {Result} from "../interfaces"
import Article from './articleComponent';
import Typography from '@mui/material/Typography';
const NYTimes = () =>{
const [news,setNews] = useState<Result[]>([]);
    axios.get("https://api.nytimes.com/svc/topstories/v2/science.json?api-key=ZIdGxGbiWw9if9XwvGTQm26JA3jzYEXy").then((res)=>{
    let data:Result[] = JSON.parse(JSON.stringify(res)).data.results
    setNews([data[4],data[8],data[6]])
    }).catch((err)=>console.log(err))
    return (
        <>
        <Grid container direction={news.length > 0 ? "row" : "column"} style={{maxWidth:"90%", margin:"auto", maxHeight:345, verticalAlign:"center",justifyContent:"center",}}>
            {news.length > 0 ? (
            news.map((n)=>(<Article data={n}/>))
            ) : (<><Typography> assembling the news for you...</Typography><CircularProgress/></>)}
        </Grid>
        </>
    )
   
}

export default NYTimes;