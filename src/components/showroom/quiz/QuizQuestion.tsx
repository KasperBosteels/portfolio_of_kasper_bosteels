import Paper from "@mui/material/Paper"
import Typography  from "@mui/material/Typography"
import Box from "@mui/system/Box"
import {Result,Type } from "../../../quiz-interfaces"
import BooleanQuestion from "./BooleanQuestion"
import MultipleChoiseQuestion from "./MultipleChoiseQuestion"
export interface QuizQuestiopProps{
    question:Result
    answer:(answer:string)=>void
}
const QuizQuestion=({question,answer}:QuizQuestiopProps)=>{

return (
    <Paper sx={{margin:"1rem", backgroundColor:question.correct_answer===question.user_answer?"rgba(0,255,0,0.1)":"rgba(255,0,0,0.2)", borderRadius:"1rem",padding:".3rem"}}>
    <Box sx={{margin:"1rem"}}>
    <Box>
        <Typography>{question.question}</Typography>
    </Box>
    <Box>
        {question.type === Type.Boolean && <BooleanQuestion question={question} answer={answer}/>}
        {question.type === Type.Multiple && <MultipleChoiseQuestion question={question} answer={answer}/>}
    </Box>
    </Box>
    </Paper>
)
}
export default QuizQuestion;