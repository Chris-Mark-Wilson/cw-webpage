import axios from "axios";
import { descObject } from "../assets/descObject";

const weatherApi = axios.create({
  baseURL: "https://api.open-meteo.com/v1",
});
export const fetchCurrentWeather = () => {
  return weatherApi
    .get("/forecast?latitude=52.57&longitude=-0.25&current_weather=true")
    .then((response) => {
      const temp = response.data.current_weather.temperature;
      const description = descObject[response.data.current_weather.weathercode];
      const time = response.data.current_weather.time.replace("T", " ");

      return { temp: temp, description: description, time: time };
    })
    .catch((err) => {
      return err;
    });
};

