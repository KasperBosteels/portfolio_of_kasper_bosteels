import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
interface Iinputprops {
    todo:string
    button:(todo:string)=>void
    inputfield:(input:string)=>void
}
export const TodoInput = ({todo,button,inputfield}:Iinputprops)=>{
    const handleSubmit=(value:string)=>{
    if(value.length>0)button(value)
    }
    return (
    <Box>
    <TextField 
        required
        label="To do item" 
        size="small"
        value={todo}
        sx={{borderRadius:0}}
        onChange={e=>inputfield(e.target.value)}
        onKeyDown={(k)=>{if(k.code==="Enter"){handleSubmit(todo)}}}/>
        <Button size="medium" variant="contained" sx={{borderRadius:0}}onClick={()=>handleSubmit(todo)}>Add</Button>
    </Box>
    )
}
export default  TodoInput;