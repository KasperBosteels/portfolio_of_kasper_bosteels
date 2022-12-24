import Box from "@mui/material/Box"
import FormControl from "@mui/material/FormControl"
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { useState } from "react";
import { Result } from "../../../quiz-interfaces";
export interface Questionprops{
    question:Result
    answer:(answer:string)=>void
}
const BooleanQuestion = ({question,answer}:Questionprops)=>{
    const [value,setvalue]=useState<string>("Select Answer")
    const handleChange=(e:string)=>{
        answer(e)
        setvalue(e)
    }
    return (
    <Box>
    <FormControl
        disabled={question.user_answer?true:false}
        >
    <FormLabel>Answers</FormLabel>
    <RadioGroup
        value={value}
        onChange={e=>handleChange(e.target.value)}
        >
   <FormControlLabel label="True" value="True" control={<Radio/>}/>
   <FormControlLabel label="False" value="False" control={<Radio/>}/>
    </RadioGroup>
    </FormControl>
    </Box>
    )
}
export default BooleanQuestion;