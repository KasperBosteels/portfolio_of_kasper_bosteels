import Filtering from "../components/showroom/Filtering";
import ShoppingList from "../components/showroom/Shoppinglist";
import Slotmachine from "../components/showroom/slots/Slotmachine";
import TimeContainer from "../components/showroom/timer/TimeContainer";
import DadJoke from "../components/showroom/DadJoke";
import Pokedex from "../components/showroom/Pokedex";
import Counter from "../components/showroom/counter";
import TodoComponent from "../components/showroom/todo/Todo";
import { Paper } from "@mui/material";
import { useParams } from "react-router-dom";
import ComponentDoesNotExist from "../components/ComponentDoesNotExist";
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

const ShowRoom =()=>{
    let {id} = useParams();
return (
<>
<Paper sx={{width:"80%", alignContent:"center", margin:"auto", marginTop:"5%"}}>
    {id ? componenten[parseInt(id)].component:<ComponentDoesNotExist/>}
</Paper>
</>)
}

export default ShowRoom;