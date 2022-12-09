import { useState } from "react";
import {Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField} from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete";
interface shoppingListItem {
  name:string,
  amount:number
}
const ShoppingList = () => {
  const [shoppinglist, setShoppingList] = useState<shoppingListItem[]>([]);
  const [nameinput, setNameInput] = useState<string>("");
  const [numberinput, setNumberInput] = useState<number>();
  const removeItem = (itemIndex: number) => {
    const filteredList = shoppinglist.filter((o,i)=>i!==itemIndex)
    setShoppingList(filteredList)
  };
  const insertAndEmptyFields =()=>{
    if(nameinput.length <= 0)return;
    let newItem:shoppingListItem = {name:nameinput,amount:numberinput === 0 ? 1 : numberinput!}
    setShoppingList([...shoppinglist,newItem])  
    setNameInput("")
    setNumberInput(1)
  }
  return (
    <>
      <Paper elevation={0} sx={{justifyItems:"center",alignItems:"center"}}>
        <Box sx={{margin:"auto",justifyContent:"center", alignItems:"center", display:"flex" }}>
        <TextField
          id="outlined-required"
          key="nameinput"
          label="Name"
          size="small"
          value={nameinput}
          onChange={(name) =>setNameInput(name.target.value)}
          sx={{borderRadius:0}}
        />
        <TextField
          id="outlined-number"
          type="number"
          key="numberinput"
          size="small"
          placeholder="1"
          value={numberinput}
          sx={{borderRadius:0}}
          InputLabelProps={{shrink:true}}
          onChange={(count) => setNumberInput(parseInt(count.target.value))}
        />
        <Button
          variant="contained"
          color="success"
          size="medium"
          sx={{borderRadius:0}}
          onClick={() => insertAndEmptyFields()}>Add
        </Button>
        </Box>
        <Box sx={{margin:"auto"}}>
          <TableContainer>
            <Table>
              <caption>A neat table with all your shopping items.</caption>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {shoppinglist.map((o,i)=>(
                  <TableRow key={i}>
                      <TableCell>{o.name}</TableCell>
                      <TableCell>{o.amount}</TableCell>
                      <TableCell><Button variant="contained" color="error" startIcon={<DeleteIcon/>} onClick={()=>removeItem(i)}>Remove</Button></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Paper>
    </>
  );
};

export default ShoppingList;
