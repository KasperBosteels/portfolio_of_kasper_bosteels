import { useState } from "react"
export interface todoItemprops {
    name:string,
    completed:boolean,
    deletetodo:()=>void
}
export const todoItem = ({name,completed,deletetodo}:todoItemprops)=>{
const [todo,setTodo] = useState<todoItemprops>();
const markCompleted =(completed:boolean)=>{
const todocopy = todo;
todocopy!.completed=completed;
setTodo(todocopy);
}
return (<>
<div>
    <span style={{textDecoration:todo!.completed ? "line-trough" : "none"}}>{name}</span>
    <input type="checkbox" checked={completed} onChange={(event)=>{markCompleted(event.target.checked)}}></input>    
</div>
</>)
}