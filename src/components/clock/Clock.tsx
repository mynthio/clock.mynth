import { useState, useEffect } from "react";

type Props = {
  showSeconds?: boolean;
  use24HourFormat?: boolean;
};

export const Clock = ({
  showSeconds = true,
  use24HourFormat = true,
}: Props) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: showSeconds ? "2-digit" : undefined,
      hour12: !use24HourFormat,
    });
  };

  return <>{formatTime(time)}</>;
};
