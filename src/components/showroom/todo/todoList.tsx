import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import TodoItem, {todoItemprops} from "./todoItem";
export interface todoListprops {
    todos:todoItemprops[]
    markCompleted:(index:number,completed:boolean)=>void
  }
const TodoList = ({todos,markCompleted}:todoListprops) =>{
return (
    <>
    <Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>To do:</TableCell>
              <TableCell>Completed</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos?.map((t,i)=>(<TableRow key={i}><TodoItem todo={t} markCompleted={(completed:boolean)=>markCompleted(i,completed)}/></TableRow>))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
    </>
)
}
export default TodoList;