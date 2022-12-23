import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
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
  return <Typography>Random value between 100 & 200: {randomValue}</Typography>;
};
export default RandomValue;
const CreateRandomValue = () => {
  return Math.floor(Math.random() * (200 - 100 + 1) + 100);
};
