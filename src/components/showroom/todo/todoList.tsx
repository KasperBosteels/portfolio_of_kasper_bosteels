import {todoItem, todoItemprops} from "./todoItem";
export interface todoListprops {
    deletetodo: (index:number)=>void
    todos:TodoItem[]
  }
  export interface TodoItem { 
    name: string;
    completed: boolean;
}
const TodoList = ({deletetodo,todos}:todoListprops) =>{
return (
    <>
    <div>
      
    </div>
    </>
)
}
export default TodoList;