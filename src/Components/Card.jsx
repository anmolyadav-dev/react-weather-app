import React, { useState } from "react";
import Clock from "./Clock";

function Card({ data }) {
  return (
    <div className=" p-5 pb-10 shadow-gray-500 shadow-md rounded-md w-96  flex flex-col items-center justify-center backdrop-blur-sm bg-white/20">
      <img className="w-40" src={data.current.condition.icon} alt=".img" />
      <h4 className="text-2xl mb-3">{data.current.condition.text}</h4>
      <h2 className="text-5xl mb-3">{data.current.temp_c}&deg;C</h2>
      <h4 className="text-2xl mb-2">
        Feels Like : {data.current.feelslike_c} &deg;C
      </h4>
      <h4 className="text-2xl mb-5">
        {data.location.name} , {data.location.region}
      </h4>
      <h4 className="text-xl">
        Wind : {data.current.wind_kph} Km/h from {data.current.wind_dir}
      </h4>
      <Clock />
    </div>
  );
}

export default Card;
