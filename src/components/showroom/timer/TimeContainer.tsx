import CurrentTime from "./CurrentTime";
import RandomValue from "./RandomValue";
import Timer from "./Timer";
import {Box} from "@mui/material"
const TimeContainer = ()=>{
    return (
        <>
        <Box style={{
            display:"flex", 
            flexDirection:"column",
            alignItems:"center", 
            width:"fit-content", 
            margin:"auto"}}>
            <Timer interval={1000}/>
            <CurrentTime interval={1}/>
            <RandomValue interval={1000}/>
        </Box>
        </>
    )
}
export default TimeContainer;