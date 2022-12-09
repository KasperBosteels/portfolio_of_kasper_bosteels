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
  const [money, setMoney] = useState<number>(100);
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
    <div>
      <div
        style={{
          width: 50,
          height: 50,
          backgroundColor: "grey",
          borderRadius: 5,
        }}
        onClick={() => {
          if (money >= 1) {
            setSlots(randomValues(props.slots));
            loseOrWinMoney();
          }
        }}
      >
        <p>pull lever</p>
      </div>
      {Slots.map((currentslot) => (
        <Slot value={currentslot} />
      ))}
      {Slots.filter((slotvalue) => slotvalue == Slots[0]).length ==
      Slots.length ? (
        <p>you won!!</p>
      ) : (
        <p>you did not win!</p>
      )}
      <div>
        {money <= 0 ? (
          <p>you have no money</p>
        ) : (
          <p>money remaining: {money}</p>
        )}
      </div>
    </div>
  );
};

export default Slotmachine;
