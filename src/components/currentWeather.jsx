import { useState } from "react";
import { useEffect } from "react";
import { fetchCurrentWeather } from "../utils/fetchWeatherApi";
import Clock from "./clock";

export const CurrentWeather = () => {
  const [description, setDescription] = useState("No weather returned");
  const [temp, setTemp] = useState(0);
  const [time, setTime] = useState("00:00");
  const [long, setLong] = useState(-0.25);
  const [lat, setLat] = useState(52.57);
  const [city, setCity] = useState("Peterborough");
  const[cityData,setCityData]=useState([]);

 
  useEffect(() => {
    fetchCurrentWeather(long, lat).then((result) => {
      setDescription(result.description);
      setTemp(result.temp);
      setTime(result.time);
    });
  }, [long]);

  return (
    <div className="current-weather" >
      <div>Current weather</div>

      <div>Data retrieved at: {time}</div>
      <div>
        <p> Current temperature: {temp}</p>
        <img src={description} style={{ width: "40%", border: "none" }}></img>
      </div>
      <div id="clock">
        <Clock />
      </div>
      <button style={{ backgroundColor: "gray" }}>
        <a href={"../"} className="button_link">
          Back to title page
        </a>
      </button>
    </div>
  );
};
