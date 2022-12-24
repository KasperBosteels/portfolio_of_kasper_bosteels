import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect, useState } from "react";
import { Welcome,Result,Difficulty,Type } from "../../../quiz-interfaces";
import QuizQuestion from "./QuizQuestion";


const Quizapp = ()=>{
const [quiz,setQuiz]=useState<Result[]>([])
const [isloading,setIsloading]=useState<boolean>(true)
    
const fetchQuiz=async ()=>{
    let rawresponse = await fetch("https://opentdb.com/api.php?amount=10");
    let response:Welcome =await  rawresponse.json();
    setQuiz(response.results)
}

useEffect(()=>{
    fetchQuiz()
    setIsloading(false)
    },[])

    
const Answer=(answer:string,i:number)=>{
let questions = [...quiz];
questions[i].user_answer=answer
setQuiz(questions)
}
    return (
    <Box>
        {isloading && <CircularProgress/>}
        {!isloading && quiz.map((q,i)=>(<QuizQuestion question={q} answer={(a)=>Answer(a,i)}/>))}
    </Box>
    )
}
export default Quizapp;