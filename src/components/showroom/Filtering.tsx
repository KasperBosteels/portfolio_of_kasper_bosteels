import { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import Button from "@mui/material/Button";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import TableContainer from "@mui/material/TableContainer";
const studentNames:string[] = ["Jan","Jaap","Jonas","Jannick","Sarah","Steven","Karel","Kasper","Koen","Marie","Zhara","Albert","Brigitte"]
const randomGen =(max:number= 100,min:number= 0)=>Math.floor(Math.random()*max-min)+min;
interface IStudent {
  name: string;
  age: number;
  year: number;
}
const students: IStudent[] =[]
studentNames.map((n)=>students.push({name:n,age:randomGen(30,18),year:randomGen(7,1)}))
const Filtering = () => {
  const [filteredStudents, setFilteredStudents] = useState<IStudent[]>(students);
  const [sortby,setSortby] = useState<string>("name")

  filteredStudents.sort((a,b)=>{
    if(sortby === "name"){
      return a.name.localeCompare(b.name)
    }else if(sortby === "age"){
        return a.age - b.age
    }else {
      return a.year - b.year
    }
  })
  return (
    
    <Paper 
      sx={{
        display:"flex", 
        flexDirection:"column", 
        alignContent:"center",
        alignItems:"center",}}>
      <Box>
        <TextField
        sx={{margin:"1rem"}}
        label="Filter by Name"
        size="small"
        onChange={(e)=>{
          setFilteredStudents(
            students.filter((s)=>
              s.name.toLowerCase().startsWith(e.target.value.toLowerCase())
            )
          );
          }}/>
          <Typography padding="1rem">A list of students filterable by name, and sortable by name, age & year</Typography>
          <Box>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><Button color={sortby === "name" ? "error" : "secondary"} size={sortby === "name"? "large":"small"} onClick={()=>{setSortby("name")}}>Name</Button></TableCell>
                  <TableCell><Button color={sortby === "age" ? "error" : "secondary"} size={sortby === "age"? "large":"small"} onClick={()=>{setSortby("age")}}>Age</Button></TableCell>
                  <TableCell><Button color={sortby === "year" ? "error" : "secondary"} size={sortby === "year"? "large":"small"} onClick={()=>{setSortby("year")}}>year</Button></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredStudents?.sort().map((s,i)=>(
                  <TableRow key={i}>
                    <TableCell>{s.name}</TableCell>
                    <TableCell>{s.age}</TableCell>
                    <TableCell>{s.year}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          </Box>
      </Box>
    </Paper>
  )
};

export default Filtering;
