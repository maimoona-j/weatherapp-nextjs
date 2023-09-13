"use client";

import React, { useState } from "react";
import axios from "axios";
import Spinner from "@/components/Spinner";
import Weather from "@/components/Weather";
import { BsSearch } from "react-icons/bs";
import { API_KEY } from "./config";

export default function Home() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeatherData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <div className="relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 px-4 text-white z-10">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              fetchWeatherData();
            }}
          >
            <div>
              <input
                type="text"
                className="flex justify-between relative items-center  w-[280px] lg:w-96 m-auto p-4 bg-transparent border border-gray-300 text-white rounded-2xl"
                placeholder="Enter a city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <button
                type="button"
                className=" lg:absolute absolute bottom-5 left-[250px] lg:bottom-4 lg:left-[360px]"
                onClick={fetchWeatherData}
              >
                <BsSearch size={20} />
              </button>
            </div>
          </form>
        </div>

        {loading ? (
          <Spinner />
        ) : weatherData ? (
          <Weather weatherData={weatherData} />
        ) : null}
      </div>
    </main>
  );
}
