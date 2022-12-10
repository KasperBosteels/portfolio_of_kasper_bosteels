import {useState} from "react"
import TodoList from "./todoList"
import TodoInput from "./todoInput"
import { todoItemprops } from "./todoItem"
import {Box} from "@mui/material"
const TodoComponent = () =>{
    const [todos,setTodos] = useState<todoItemprops[]>([])
    const [todo,setTodo] = useState<string>("")
    const removeTodo = (inputIndex:number)=>{
        const filteredTodos = todos.filter((t,i)=>i !== inputIndex)
        setTodos(filteredTodos);
    } 
    const CompleteTodo = (index:number,completed:boolean)=>{

        setTodos(todos.map((t,i)=>i===index ? {...t,completed:completed}:t))
        }
    const addTodo = (todo:string)=>{
        setTodos([...todos,{name:todo,completed:false,deletetodo:removeTodo,markCompleted:CompleteTodo,index:todos.length-1}]);
        setTodo("");
    }
   

    return (
        <Box>
            <Box>
                <TodoInput todo={todo} button={addTodo} inputfield={setTodo}/>
            </Box>
            <div>
                <TodoList todos={todos}/>
            </div>
        </Box>
    )
}
export default TodoComponent;