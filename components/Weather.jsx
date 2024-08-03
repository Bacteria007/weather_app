import Image from "next/image";
import React from "react";

const kelvinToCelsius = (kelvin) => {
    return kelvin - 273.15;
  };

const Weather = ({ data }) => {
  console.log(data);

  return (
    <div className="relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto p-4 text-gray-300 z-10">
      {/* Top */}
      <div className="relative flex justify-between items-center lg:pt-12">
        <div className="flex flex-col items-center">
          <Image
            width={100}
            height={100}
            alt="/"
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          />
          <p className="text-2xl">{data.weather[0].main}</p>
        </div>
        <p className="text-7xl lg:text-9xl">{kelvinToCelsius(data.main.temp).toFixed(0)}&#176;C</p>
      </div>
      {/* bottom */}
      <div className="bg-black/50 relative p-8 rounded-md">
        <p className="text-2xl text-center pb-6">Weather {data.name}</p>
        <div className="flex justify-between text-center">
          <div>
            <p className="text-2xl font-bold"> {kelvinToCelsius(data.main.feels_like).toFixed(0)}&#176;C</p>
            <p className="text-xl">Feels Like</p>
          </div>
          <div>
            <p className="text-2xl  font-bold"> {data.main.humidity}% </p>
            <p className="text-xl">Humidity</p>
          </div>
          <div>
            <p className="text-2xl font-bold"> {data.wind.speed.toFixed(0)} MPH</p>
            <p className="text-xl">Winds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
