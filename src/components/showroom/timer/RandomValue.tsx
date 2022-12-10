import { useEffect, useState } from "react";

interface IRandomValue {
  interval: number;
}
const RandomValue = ({ interval }: IRandomValue) => {
  const [randomValue, setRandomValue] = useState<number>(CreateRandomValue());
  useEffect(() => {
    let handle = setInterval(() => {
      setRandomValue(CreateRandomValue());
    }, interval);
    return () => {
      clearInterval(handle);
    };
  }, [interval]);
  return <p>Random value between 100 & 200: {randomValue}</p>;
};
export default RandomValue;
const CreateRandomValue = () => {
  return Math.floor(Math.random() * (200 - 100 + 1) + 100);
};
