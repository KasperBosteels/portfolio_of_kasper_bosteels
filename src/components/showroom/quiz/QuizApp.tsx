import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { useCallback, useEffect, useState } from "react";
import { Welcome,Result } from "../../../quiz-interfaces";
import QuizQuestion from "./QuizQuestion";


const Quizapp = ()=>{
const [quiz,setQuiz]=useState<Result[]>([])
const [isloading,setIsloading]=useState<boolean>(true)
    
const fetchQuiz= useCallback(async ()=>{
    setIsloading(true)
    let rawresponse = await fetch("https://opentdb.com/api.php?amount=10");
    let response:Welcome =await  rawresponse.json();
    setQuiz([...quiz,...response.results])
    setIsloading(false)

},[setIsloading,setQuiz,quiz])

useEffect(()=>{
    fetchQuiz()
},[fetchQuiz])

const Answer=(answer:string,i:number)=>{
    setQuiz(quiz.map((q,id)=>(id===i)?{...q,user_answer:answer}:q))
}
    return (
    <Box>
        {isloading?<CircularProgress/>:quiz.map((q,i)=>(<QuizQuestion key={"q-"+i} question={q} answer={(a)=>Answer(a,i)}/>))}
    </Box>
    )
}
export default Quizapp;