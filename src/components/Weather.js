import React from "react";
import Image from "next/image";

const Weather = ({ weatherData }) => {
  return (
    <div className="border border-white mt-10 mx-2 sm:mx-4 md:mx-8 sm:w-24 md:w-24 lg:mx-16 xl:mx-auto  lg:w-[1000px] lg:h-[400px] bg-transparent lg:relative">
      <div className="text-center mt-6 ">
        <Image
          src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          alt="/"
          width="200"
          height="100"
          className="bg-black lg:ml-36 ml-12 rounded-xl"
        />
      </div>
      <div className="lg:absolute lg:mt-0 mt-5 lg:bottom-2 lg:left-[400px]">
        <div className="text-center  text-white lg:mb-24 ">
          <p className="text-5xl">{weatherData.main.temp}°F</p>
          <h2 className="text-lg">
            {weatherData.name}, {weatherData.sys.city} {weatherData.sys.country}
          </h2>
          <p>{weatherData.weather[0].description}</p>
        </div>

        <div className="p-2 text-white text-center lg:mt-0 mt-8 lg:flex lg:w-96 mb-4 lg:mb-5">
          <p className="text-sm">Feels Like: {weatherData.main.feels_like}</p>
          <p className="text-sm">temp_min: {weatherData.main.temp_min}</p>
          <p className="text-sm">temp_max: {weatherData.main.temp_max}</p>
          <p className="text-sm">pressure: {weatherData.main.pressure}</p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
