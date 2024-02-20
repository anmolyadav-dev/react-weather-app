import React, { useState, useEffect } from "react";

function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    // Clear the interval when the component unmounts
    return () => {
      clearInterval(timerID);
    };
  }, []);

  const tick = () => {
    setCurrentTime(new Date());
  };

  return (
    <div>
      <h2 className="text-2xl mt-10">
        Current Time: {currentTime.toLocaleTimeString()}
      </h2>
    </div>
  );
}

export default Clock;
