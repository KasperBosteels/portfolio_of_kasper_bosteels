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
        description:"A Table that simulates a shoppinglist with with names and the amount of each item to get.\nYou are able to add an item to the list with a specific amout, and you are able to delete individual items from the table.",
    },
    {
        name:"Filtering and sorting",
        description:"This component simulates a table of students with their age and the current year they are attending.\nThe table is filterable by name,\nAnd sortable by name,age and year.",
    },
    {
        name:"Slots",
        description:"This component acts as a slot machine from a casino with a set amount of money.\nEvery time you play you lose a bit of money,\nuntil either you win or lose all your money and you are no longer allowed to play.",
    },
    {
        name:"Counter",
        description:"This contains a single state wich contains an array of numbers that can individually be increased with the increment or decrement button on the sides of it.",
    },{
        name:"Interval",
        description:"This component contains various time triggered displays using the useEffect hook from react.",
    },{
        name:"Pokedex",
        description:"This component contains a call to the pokeApi.\nThe output of wich will be displayed as a list, wich can be filtered by name, and a max amount of pokemon can be set.",
    },
    {
        name:"DadJoke-local storage",
        description:"A component that calls the icanhazdadjoke api and displays a joke, every joke can be saved in the localstorage,\nif one is set it will be displayed below the joke.",
    },{
        name:"Todo list",
        description:"This item will simulate a todo list.\nEvery item in the list will be set as 'not completed', after the button is pressed the item will be crossed out and set as done.",
    },{
        name:"Quizapp",
        description:"nothing yet"
    }
];

//todo: style individal comp.components :(
const Componenten = ()=>{
    const [filteredComponents,setFilteredComponents] = useState<components[]>(componenten)
    return (
        <Grid container spacing={8} style={{margin:"auto", display:"flex", justifyContent:"center"}}>
            <Box sx={{ 
                width:"90%", 
                display:"flex",
                justifyContent:"flex-end",}}>
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