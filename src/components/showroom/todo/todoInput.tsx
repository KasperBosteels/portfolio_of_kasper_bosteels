import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
interface Iinputprops {
    todo:string
    button:(todo:string)=>void
    inputfield:(input:string)=>void
}
export const TodoInput = ({todo,button,inputfield}:Iinputprops)=>{
    return (
    <Box>
    <TextField 
        required
        label="To do item" 
        size="small"
        value={todo}
        sx={{borderRadius:0}}
        onChange={(e)=>inputfield(e.target.value)}/>
        <Button size="medium" variant="contained" sx={{borderRadius:0}}onClick={()=>button(todo)}>Add</Button>
    </Box>
    )
}
export default  TodoInput;