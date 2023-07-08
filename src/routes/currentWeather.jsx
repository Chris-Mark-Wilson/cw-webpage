import { useState } from "react";
import { useEffect } from "react";
import { fetchCurrentWeather } from "../utils/fetchWeatherApi";
import Clock from "./clock";
import { fetchSelectedCity } from "../utils/geocodeApi";

export const CurrentWeather = () => {
  const [description, setDescription] = useState("No weather returned");
  const [temp, setTemp] = useState(0);
  const [time, setTime] = useState("00:00");
  const [long, setLong] = useState(-0.25);
  const [lat, setLat] = useState(52.57);
  const [city, setCity] = useState("Peterborough");
  const[cityData,setCityData]=useState([]);

  useEffect(() => {
    fetchSelectedCity(city)
    .then((result) => {
       result?setCityData(result):
    setCityData([{name:'No results found', latitiude:"",longitude:"",country:"",admin1:"",admin2:""}]);
    });
  }, [city]);
  {/* returns an array of result objects limit 10 
keys of  name, latitiude,longitude,country,admin1,admin2*/}

  useEffect(() => {
    fetchCurrentWeather(long, lat).then((result) => {
      setDescription(result.description);
      setTemp(result.temp);
      setTime(result.time);
    });
  }, [city]);

  return (
    <div className="current-weather" >
      <div>Current weather</div>
      <div>
        {/* getting city name and long lat co-ordinates */}

        <label htmlFor="cityName">Location (city): </label>
        <input
        defaultValue="Peterborough"
          id="cityName"
          type="search"
          variant=""
          name="selectCity"
          style={{ fontSize: "0.8em", width: "55%" }}
          placeholder="Peterborough"
          onChange={(element) => setCity(element.target.value)}
        />
      </div>
      <div>

        <label htmlFor="selectCity">Select:</label>
        <select style={{width:'50%', fontSize:'0.8em'}} onChange={(element)=>{
               setLat(element.target.value.split(':')[0])
               setLong(element.target.value.split(':')[1])
        }}>
              
                {cityData.map(({name, latitude,longitude,country,admin1,admin2},index)=>{
                    return(
                        <option key={index} value={`${latitude}:${longitude}`} style={{fontSize:'0.8em'}}>{name},{country},{latitude},{longitude}</option>
                    )
                    })}

        </select>
      </div>

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
