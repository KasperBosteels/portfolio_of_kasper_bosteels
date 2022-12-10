import { Paper, Box, Button } from "@mui/material";
import { display } from "@mui/system";
import { useState } from "react";
import Slot from "./Slot";
interface slotmachine {
  slots: number;
}
const randomValues = (amount: number = 3): number[] => {
  let arr: number[] = [];
  for (let i = 0; i < amount; i++) {
    arr.push(Math.floor(Math.random() * 5));
  }

  return arr;
};
const Slotmachine = (props: slotmachine) => {
  //create array fixed length
  const [Slots, setSlots] = useState<number[]>(randomValues(props.slots));
  const [money, setMoney] = useState<number>(10);
  const loseOrWinMoney = () => {
    if (
      Slots.filter((SlotsValue) => SlotsValue == Slots[0]).length ==
      Slots.length
    ) {
      setMoney(money + 20);
    } else {
      setMoney(money - 1);
    }
  };
  return (
    <Box sx={{alignItems:"center",justifyItems:"center"}}>
      <Box sx={{display:"flex", justifyContent:"center", verticalAlign:"center"}}>
      <Button
      sx={{width:"5rem",height:"5rem", margin:"1rem"}}
        disabled={money <= 0 ? true : false}
        color={money <= 0 ? "error" : "success"}
        variant="contained"
        onClick={() => {
          if (money >= 1) {
            setSlots(randomValues(props.slots));
            loseOrWinMoney();}}}>
        {money <= 0 ? "no more money" : "Pull the lever!"}
      </Button>
      {Slots.map((currentslot) => (
        <Slot value={currentslot} />
      ))}
      </Box>
      <Box sx={{display:"flex", justifyContent:"center"}}>
      {Slots.filter((slotvalue) => slotvalue == Slots[0]).length ==
      Slots.length ? (
        <p>you won!!</p>
      ) : (
        <p>you did not win!</p>
      )}
      </Box>
      <Box sx={{display:"flex", justifyContent:"center"}}>
        {money <= 0 ? (
          <p>you have no money</p>
        ) : (
          <p>money remaining: {money}</p>
        )}
      </Box>
    </Box>
  );
};

export default Slotmachine;
