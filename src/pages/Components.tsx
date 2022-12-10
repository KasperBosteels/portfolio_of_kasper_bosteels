import Grid from "@mui/material/Unstable_Grid2";
import { Paper,Button } from "@mui/material";
import Filtering from "../components/showroom/Filtering";
import ShoppingList from "../components/showroom/Shoppinglist";
import Slotmachine from "../components/showroom/slots/Slotmachine";
import TimeContainer from "../components/showroom/timer/TimeContainer";
import DadJoke from "../components/showroom/DadJoke";
import Pokedex from "../components/showroom/Pokedex";
import Counter from "../components/showroom/counter";
import TodoComponent from "../components/showroom/todo/Todo";
import { useState } from "react";
interface components {
name:string,
description:string,
component:JSX.Element
}
const componenten:components[] = [
    {
        name:"Shopping list",
        description:"An empty shopping list with an input field that allows you to add to it.",
        component:<ShoppingList/>
    },
    {
        name:"Filtering and sorting",
        description:"A component with a list that you can filter & sort, wich will update live.",
        component:<Filtering/>
    },
    {
        name:"Slots",
        description:"A slot machine that simulates one from a casino with money.",
        component:<Slotmachine slots={3}/>
    },
    {
        name:"Counter",
        description:"This is a list with multiple counters triggered by buttons.",
        component:<Counter/>
    },{
        name:"Interval",
        description:"This component contains various time triggered displays",
        component:<TimeContainer/>
    },{
        name:"Pokedex",
        description:"This component will call the pokeApi and simulate a pokedex.",
        component:<Pokedex limit={5}/>
    },
    {
        name:"DadJoke-local storage",
        description:"A component that calls an api, and displays its answer.",
        component:<DadJoke/>
    },{
        name:"Todo list",
        description:"A component that simulates a todo list with communication between parent and child",
        component:<TodoComponent/>
    }
];
//todo: style individal comp.components :(
const Componenten = ()=>{
    const [active,setActive] = useState<number>(9);
    return (
        <Grid container spacing={8} style={{margin:"auto"}}>
            {componenten.map((comp,i)=>(
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
                                {comp.component}
                                </Paper>
                                ):
                                (<></>)}
                    </Paper>
                </Grid>
              
                
                
            ))}
        </Grid>
    )
}
export default Componenten;