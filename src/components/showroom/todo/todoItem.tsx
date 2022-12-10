import { Button, TableCell, Typography } from "@mui/material";
export interface todoItemprops {
    name:string,
    completed:boolean,
}
interface totoiprop {
    todo:todoItemprops
    markCompleted:(completed:boolean)=>void
}
const TodoItem = ({todo,markCompleted}:totoiprop)=>{
return (
<>
<TableCell>
    <span style={{textDecoration: todo.completed ? "line-trough" : "none"}}>{todo.name}</span>
</TableCell>
<TableCell>
    <Button 
        onClick={()=>{markCompleted(!todo.completed)}}
        variant={todo.completed? "outlined" : "contained"} 
        color={todo.completed? "success" : "warning"}>{todo.completed ? "Completed": "Not completed"}</Button>
</TableCell>
</>
)
}
export default TodoItem;