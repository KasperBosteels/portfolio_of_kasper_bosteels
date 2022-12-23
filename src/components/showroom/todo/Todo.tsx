import {useState} from "react"
import TodoList from "./todoList"
import TodoInput from "./todoInput"
import { todoItemprops } from "./todoItem"
import Box from "@mui/material/Box"
const TodoComponent = () =>{
    const [todos,setTodos] = useState<todoItemprops[]>([])
    const [todo,setTodo] = useState<string>("")
    const CompleteTodo = (index:number,completed:boolean)=>{
       setTodos(todos.map((todo,i)=>i === index ? {...todo,completed:completed}:todo))
        }
        const addTodo = (todo:string)=>{
        setTodos([...todos,{name:todo,completed:false}]);
        setTodo("");
    }
   

    return (
        <Box>
            <Box>
                <TodoInput todo={todo} button={addTodo} inputfield={setTodo}/>
            </Box>
            <Box>
                <TodoList todos={todos} markCompleted={CompleteTodo}/>
            </Box>
        </Box>
    )
}
export default TodoComponent;