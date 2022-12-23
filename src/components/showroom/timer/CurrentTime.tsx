import { useEffect, useState } from "react";
import Typography  from "@mui/material/Typography";
interface ICurrentTime {
  interval: number;
}

const CurrentTime = ({ interval }: ICurrentTime) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    let handle = setInterval(() => {
      setCurrentTime(new Date());
    }, interval);
    return () => {
      clearInterval(handle);
    };
  }, [interval]);
  return (
    <Typography>
      Current time: {currentTime.getHours()}:{currentTime.getMinutes()}:{currentTime.getSeconds()}
    </Typography>
  );
};

export default CurrentTime;
