import { count } from "console";
import { useState } from "react";

const Counter = () => {
  let [counters, setCounters] = useState<number[]>([0]);
  const changeValueofCounter = (index: number, value: number) => {
    let newCounters = [...counters];
    newCounters[index] += value;
    setCounters(newCounters);
  };
  return (
    <>
      {counters.map((counter, index) => {
        let color = "black";
        if (counter > 0) {
          color = "green";
        } else {
          color = "red";
        }
        return (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <input
              type="button"
              value="increase"
              onClick={() => {
                changeValueofCounter(index, 1);
              }}
            ></input>
            <p style={{ color: color, paddingLeft: 10, paddingRight: 10 }}>
              {counter}
            </p>
            <input
              type="button"
              value="decrease"
              onClick={() => {
                changeValueofCounter(index, -1);
              }}
            ></input>
          </div>
        );
      })}
      <button
        onClick={(event) => {
          setCounters([...counters, 0]);
        }}
      >
        add counter
      </button>
    </>
  );
};

export default Counter;
