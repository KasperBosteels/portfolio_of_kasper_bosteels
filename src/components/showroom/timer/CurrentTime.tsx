import { useEffect, useState } from "react";

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
    <p>
      Current time: {currentTime.getHours()}:{currentTime.getMinutes()}:{currentTime.getSeconds()}
    </p>
  );
};

export default CurrentTime;
