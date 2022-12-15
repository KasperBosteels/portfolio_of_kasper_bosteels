import Grid from "@mui/material/Unstable_Grid2";
import { Paper,Button, Box, TextField } from "@mui/material";

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
    const [active,setActive] = useState<number>(9);
    const [filteredComponents,setFilteredComponents] = useState<components[]>(componenten)

    
    
    return (
        <Grid container spacing={8} style={{margin:"auto"}}>
            <Box sx={{ width:"100%", display:"flex",justifyContent:"flex-end",}}>
                <TextField 
                    label="filter" 
                    sx={{marginRight:"3%",
                        marginTop:"2%", 
                        height:"fit-content"}}
                    onChange={(e)=>{setFilteredComponents(componenten.filter((c)=>c.name.toLowerCase().startsWith(e.target.value.toLowerCase())))}}/>
            </Box>
            {filteredComponents?.map((comp,i)=>(
                <Grid xs={8} style={{width:"95%", margin:"auto", padding:".3rem"}}>
                    <Paper elevation={8}>
                        <h3 style={{margin:"1.5rem"}}>{comp.name}</h3>
                        {active !== i ? (<p style={{marginLeft:"1.5rem"}}>{comp.description}</p>):<></>}
                        <Button variant="contained" 
                                color={active !== i ? "success" : "error"}   
                                onClick={()=>{active !== i ? setActive(i) : setActive(9)}}
                                sx={{margin:"1rem"}}>
                                    {active !== i ? "Try me!" : "Close"}
                        </Button>
                        {active === i ? (<Paper sx={{
                            margin:"auto",
                            padding:"2rem",
                            maxWidth:"70%", 
                            width:"fit-content",
                            justifyContent:"center",
                            borderTopRightRadius:"1.5rem",
                            borderTopLeftRadius:"1.5rem",
                            alignItems:"center"}}>
                            </Paper>):(<></>)}
                    </Paper>
                </Grid>
              
                
                
            ))}
        </Grid>
    )
}
export default Componenten;