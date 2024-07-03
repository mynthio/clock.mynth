import React, { useState, useEffect } from "react";
import dayjs from "dayjs";

interface Props {
  format?: string;
}

export const Date: React.FC<Props> = ({ format = "D MMMM" }) => {
  const [currentDate, setCurrentDate] = useState(dayjs());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(dayjs());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <>{currentDate.format(format)}</>;
};
