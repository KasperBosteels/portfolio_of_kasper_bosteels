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
  /*
    if(question.user_answer !== undefined){
  
        color = question.user_answer === question.correct_answer?
*/

return (
    <Box sx={{margin:"2rem"}}>
    <Box>
        <Typography>{question.question}</Typography>
    </Box>
    <Box>
        {question.type === Type.Boolean && <BooleanQuestion question={question} answer={answer}/>}
        {question.type === Type.Multiple && <MultipleChoiseQuestion question={question} answer={answer}/>}
    </Box>
    </Box>
)
}
export default QuizQuestion;