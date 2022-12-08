import React,{ useState } from 'react';
import { CircularProgress, Paper } from '@mui/material';
import axios from 'axios';
import {Result} from "../interfaces"
import Article from './articleComponent';
const NYTimes = () =>{
const [news,setNews] = useState<Result[]>([]);
    axios.get("https://api.nytimes.com/svc/topstories/v2/science.json?api-key=ZIdGxGbiWw9if9XwvGTQm26JA3jzYEXy").then((res)=>{
    let data:Result[] = JSON.parse(JSON.stringify(res)).data.results
    setNews([data[4],data[8],data[6]])
    }).catch((err)=>console.log(err))
    return (
        <>
        <Paper style={{alignItems:"center", justifyItems:"center"}}>
            {news.length > 0 ? (
            news.map((n)=>(<Article data={n}/>))
            ) : <CircularProgress/>}
        </Paper>
        
        </>
    )
   
}

export default NYTimes;