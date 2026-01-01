import React, { useEffect, useState } from "react";
import Shuffle from "./Shuffle";
import TextPressure from "./Shuffle";

const NotFound = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date());
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
    const formatDate = (date) => {
        return date.toLocaleDateString("id-ID", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        });
      };
    
      const formatTime = (date) => {
        return date.toLocaleTimeString("id-ID");
      };
  return (
    <div className="h-screen jakarta bg-[#0f0f0f] text-white px-10 pt-10 flex items-center flex-col justify-center" >
        <p>{formatDate(time)}{"        "}{formatTime(time)} </p>
      <div className="p-10 top-0 relative left-0 flex flex-col bg-[#0f0f0f] items-center justify-center">
        <div style={{ position: "relative", height: "" }}>
          <TextPressure
            text="404 Not Found!"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#ffffff"
            strokeColor="#ff0000"
            minFontSize={350}
          />
        </div>
        <a
          href="/"
          className="px-7 py-5 mt-20 bg-white rounded-full font-medium text-default"
        >
          Back To Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
