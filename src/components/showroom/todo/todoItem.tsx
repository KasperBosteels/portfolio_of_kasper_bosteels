import { Button, TableCell } from "@mui/material";
import { useState } from "react"
export interface todoItemprops {
    name:string,
    completed:boolean,
    deletetodo:(inputIndex: number)=>void
    markCompleted:(index:number, completed:boolean)=>void
    index:number
}
const TodoItem = ({name,completed,deletetodo, markCompleted,index}:todoItemprops)=>{
console.log(name,completed)
return (
<>
<TableCell>
    <p>{name}</p> 
</TableCell>
<TableCell>
    <Button onClick={()=>markCompleted(index,completed)}variant={completed? "outlined" : "contained"} color={completed? "success" : "warning"}>{completed ? "Completed": "Not completed"}</Button>
</TableCell>
<TableCell>
    <Button variant="contained" color="error" onClick={()=>deletetodo(index)}>Remove</Button>
</TableCell>
</>
)
}
export default TodoItem;