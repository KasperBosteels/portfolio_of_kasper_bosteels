import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";

const Counter = () => {
  const [counters, setCounters] = useState<number[]>([0]);
  const [sumOfAllCounters,setSumOfAllCounters] = useState<number>(0)
  const changeValueofCounter = (index: number, value: number) => {
    let newCounters = [...counters];
    newCounters[index] += value;
    setCounters(newCounters);
  };
  useEffect(() => {
    let sum = 0
    counters.map((c)=>sum+=c)
    setSumOfAllCounters(sum)
  }, [counters])
  
  return (
    
    <Box>
      <Box sx={{display:"flex", justifyContent:"center"}}>
      <Button color="warning" variant="contained" onClick={() =>setCounters([...counters, 0])}>Add counter</Button>
      </Box>
      <Box sx={{ justifyContent:"center"}}>

      
      {counters.map((counter, index) => {
        let color = "black";
        if (counter > 0) {
          color = "green";
        } else {
          color = "red";
        }
        return (
          <Box
            key={index}
            style={{
              marginTop:"1rem",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              size="medium"
              color="error"
              variant="contained"
              onClick={() => {changeValueofCounter(index, -1);}}>Decrease</Button>


            <p style={{ color: color, paddingLeft: 10, paddingRight: 10 }}>{counter}</p>
            <Button
              size="medium"
              value="increase"
              color="success"
              variant="contained"
              onClick={() => {
                changeValueofCounter(index, 1);
              }}
            >Increase</Button>
          </Box>
  
        );
      })}
      </Box>
      <Box sx={{display:"flex", justifyContent:"center"}}>
        <p> total sum: {sumOfAllCounters}</p>
      </Box>
    </Box>
  );
};

export default Counter;
