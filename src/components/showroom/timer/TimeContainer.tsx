import CurrentTime from "./CurrentTime";
import RandomValue from "./RandomValue";
import Timer from "./Timer";
const TimeContainer = ()=>{
    return (
        <>
        <div>
            <Timer interval={1}/>
            <CurrentTime interval={1}/>
            <RandomValue interval={1}/>
        </div>
        </>
    )
}
export default TimeContainer;