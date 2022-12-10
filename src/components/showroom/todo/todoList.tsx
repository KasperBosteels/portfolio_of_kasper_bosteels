import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import TodoItem, {todoItemprops} from "./todoItem";
export interface todoListprops {
    todos:todoItemprops[]
  }
const TodoList = ({todos}:todoListprops) =>{
return (
    <>
    <Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>To do:</TableCell>
              <TableCell>Completed</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos?.map((t,i)=>(<TableRow key={i}><TodoItem name={t.name} completed={t.completed} deletetodo={t.deletetodo} markCompleted={t.markCompleted} index={i}/></TableRow>))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
    </>
)
}
export default TodoList;