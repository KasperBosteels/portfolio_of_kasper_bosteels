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
    component:JSX.Element
    }

const componenten:components[] = [
    {
        name:"Shopping list",
        component:<ShoppingList/>
    },
    {
        name:"Filtering and sorting",
        component:<Filtering/>
    },
    {
        name:"Slots",
        component:<Slotmachine slots={3}/>
    },
    {
        name:"Counter",
        component:<Counter/>
    },{
        name:"Interval",
        component:<TimeContainer/>
    },{
        name:"Pokedex",
        component:<Pokedex limit={5}/>
    },
    {
        name:"DadJoke-local storage",
        component:<DadJoke/>
    },{
        name:"Todo list",
        component:<TodoComponent/>
    }
];

const ShowRoom =()=>{
    let {id} = useParams();
return (
<>
<Paper sx={{maxWidth:"80%",padding:"1%" ,alignContent:"center", margin:"auto", marginTop:"5%"}}>
    {id &&  parseInt(id) >= 0 && parseInt(id) < componenten.length ? componenten[parseInt(id)].component:<ComponentDoesNotExist/>}
</Paper>
</>)
}

export default ShowRoom;