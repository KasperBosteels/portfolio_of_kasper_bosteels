import {useContext} from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Paper } from "@mui/material";
interface components {
name:string,
description:string,
path:string,
}
const componenten:components[] = [
    {
        name:"Filtering",
        description:"This is a filtering component that filters a list depending on what is typed in a search box.",
        path:"./laboComponentent/Filtering"
    },
    {
        name:"Current time",
        description:"This is a clock that shows the current time wich is live updated.",
        path:"./laboComponeten/Time"
    },
    {
        name: "slot machine",
        description: "This is a Slot Machine with REAL money.",
        path :"./laboComponenten/Slotmachine"
    }
];
//todo: add navigation
const Componenten = ()=>{
    return (
        <>
        <Paper>
        <Grid container spacing={5} style={{margin:"auto"}}>
            {componenten.map((comp)=>(
                <Grid xs={4}>
                    <div>
                    <h3>{comp.name}</h3>
                    <p>{comp.description}</p>
                    </div>
                </Grid>
            ))}
        </Grid>
        </Paper>
        </>
    )
}
export default Componenten;