import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import Box from "@mui/system/Box"
import { useState } from "react"
import { QuizQuestiopProps } from "./QuizQuestion"

const sortAnswers = (c:string,w:string[])=>{
    let allAnswers = [c,...w]
    allAnswers.sort(()=>Math.random()-0.5)
return allAnswers
}

const MultipleChoiseQuestion=({question,answer}:QuizQuestiopProps)=>{
const [allAnswers]=useState<string[]>(sortAnswers(question.correct_answer,question.incorrect_answers))
const [Answer,setAnswer]=useState<string>();
const handleChange=(e:string)=>{
    setAnswer(e);
    answer(e)
}
return (
        <Box>
            <FormControl
                disabled={question.user_answer?true:false}
                >
                <InputLabel>Answer</InputLabel>
                <Select
                    sx={{minWidth:"10rem"}}
                    value={Answer!==undefined? Answer: ''}
                    onChange={(e)=>handleChange(e.target.value)}
                    label="Answer">
                    {allAnswers.map((a,i)=>(
                        <MenuItem 
                            sx={{minWidth:"10rem"}}
                            key={"option-"+i} 
                            value={a}>{a}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    )
}
export default MultipleChoiseQuestion;