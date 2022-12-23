import Button from "@mui/material/Button";
import TableCell from "@mui/material/TableCell";
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
    {todo.completed ? (<p style={{textDecorationLine:"line-through"}}>{todo.name}</p>): (<p>{todo.name}</p>)}
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