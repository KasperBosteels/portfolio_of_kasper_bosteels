import {useState} from "react"
import TodoList,{TodoItem} from "./todoList"
import {Button} from "@mui/material"
const TodoComponent = () =>{

    const [todos,setTodos] = useState<TodoItem[]>([])
    const [todo,setTodo] = useState<string>("")
    
    const addTodo = (todo:string)=>{
        setTodos([...todos,{name:todo,completed:false}]);
        setTodo("");
    }
    
    const removeTodo = (inputIndex:number)=>{
        const filteredTodos = todos.filter((t,i)=>i !== inputIndex)
        setTodos(filteredTodos);
    }
    
    const CompleteTodo = (index:number,completed:boolean)=>{
    setTodos(todos.map((t,i)=>i===index ? {...t,completed:completed}:t))
    }

    return (
        <div>
            <div>
                <input  id="todo" 
                        type="text" 
                        value={todo} 
                        onChange={(e)=>setTodo(e.target.value)}/>
                <Button onClick={()=>addTodo(todo)}>Add</Button>
            </div>
            <div>
                <TodoList deletetodo={removeTodo} todos={todos}/>
            </div>
        </div>
    )
}
export default TodoComponent;