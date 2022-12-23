import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
interface ITimerProps {
  interval: number;
}
const Timer = ({ interval }: ITimerProps) => {
  const [Seconds, SetSeconds] = useState(0);
  useEffect(() => {
    let handle = setInterval(() => {
      SetSeconds((number) => number + 1);
    }, interval);
    return () => {
      clearInterval(handle);
    };
  }, [interval]);
  return <Typography>Elapsed seconds since you opened this: {Seconds}</Typography>;
};
export default Timer;
