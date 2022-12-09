import { useEffect, useState } from "react";
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
  return <p>{Seconds}</p>;
};
export default Timer;
