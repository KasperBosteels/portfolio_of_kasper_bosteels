import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import { useState } from "react";
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
    <>
    <Paper>
      <Box>
        <TextField
        label="Filter by Name"
        size="small"
        onChange={(e)=>{
          setFilteredStudents(
            students.filter((s)=>
              s.name.toLowerCase().startsWith(e.target.value.toLowerCase())
            )
          );
          }}/>
          <Box>
          <TableContainer>
            <Table>
              <caption>A list of students filterable by name, and sortable by name, age & year</caption>
              <TableHead>
                <TableRow>
                  <TableCell><Button color={sortby == "name" ? "success" : "primary"} size="small" onClick={()=>{setSortby("name")}}>Name</Button></TableCell>
                  <TableCell><Button color={sortby == "age" ? "success" : "primary"} size="small" onClick={()=>{setSortby("age")}}>Age</Button></TableCell>
                  <TableCell><Button color={sortby == "year" ? "success" : "primary"} size="small" onClick={()=>{setSortby("year")}}>year</Button></TableCell>
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
  </>
  )
};

export default Filtering;
