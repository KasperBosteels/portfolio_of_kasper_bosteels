import Grid from "@mui/material/Unstable_Grid2";
import {Box, TextField } from "@mui/material";
import ComponentCard from "../components/ComponentCard";
import { useState } from "react";
interface components {
    name:string,
    description:string,
    }

const componenten:components[] = [
    {
        name:"Shopping list",
        description:"An empty shopping list with an input field that allows you to add to it.",
    },
    {
        name:"Filtering and sorting",
        description:"A component with a list that you can filter & sort, wich will update live.",
    },
    {
        name:"Slots",
        description:"A slot machine that simulates one from a casino with money.",
    },
    {
        name:"Counter",
        description:"This is a list with multiple counters triggered by buttons.",
    },{
        name:"Interval",
        description:"This component contains various time triggered displays",
    },{
        name:"Pokedex",
        description:"This component will call the pokeApi and simulate a pokedex.",
    },
    {
        name:"DadJoke-local storage",
        description:"A component that calls an api, and displays its answer.",
    },{
        name:"Todo list",
        description:"A component that simulates a todo list with communication between parent and child",
    }
];

//todo: style individal comp.components :(
const Componenten = ()=>{
    const [filteredComponents,setFilteredComponents] = useState<components[]>(componenten)
    return (
        <Grid container spacing={8} style={{margin:"auto", display:"flex", justifyContent:"center"}}>
            <Box sx={{ width:"90%", display:"flex",justifyContent:"flex-end",}}>
                <TextField 
                    label="filter" 
                    sx={{
                        marginTop:"2%", 
                        height:"fit-content"}}
                    onChange={(e)=>{setFilteredComponents(componenten.filter((c)=>c.name.toLowerCase().startsWith(e.target.value.toLowerCase())))}}/>
            </Box>
            {filteredComponents?.map((comp,i)=>(
               <ComponentCard Title={comp.name} Description={comp.description} Path={i}/>
              
            ))}
        </Grid>
    )
}
export default Componenten;