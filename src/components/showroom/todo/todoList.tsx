import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow"
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