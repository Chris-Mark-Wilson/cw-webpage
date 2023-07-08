import { HourlyChart } from './hourlyChart'
import { useState } from 'react'
import { DailyChart } from './dailyChart';
import { useEffect } from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { fetchCurrentWeather } from "../utils/fetchWeatherApi";
import Clock from "./clock";
import { fetchSelectedCity } from "../utils/geocodeApi";

export const Forecast=()=>{

    const [startDate, setStartDate] = useState(new Date())
const[endDate,setEndDate]=useState(new Date(startDate.getFullYear(),startDate.getMonth(),startDate.getDate()+7))
const [tomorrow,setTomorrow]=useState(new Date(startDate.getFullYear(),startDate.getMonth(),startDate.getDate()+2))
const [key, setKey] = useState('today');
const [description, setDescription] = useState("No weather returned");
const [temp, setTemp] = useState(0);
const [time, setTime] = useState("00:00");
const [long, setLong] = useState(-0.25);
const [lat, setLat] = useState(52.57);
const [city, setCity] = useState("Peterborough");
const[cityData,setCityData]=useState([]);

//-------------------get city and current weather----------------
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


return(
  <>
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
      <div><label htmlFor="selectCity">Select:</label>
        <select style={{width:'50%', fontSize:'0.8em'}} onChange={(element)=>{
               setLat(element.target.value.split(':')[0])
               setLong(element.target.value.split(':')[1])
        }}>
              
                {cityData.map(({name, latitude,longitude,country,admin1,admin2},index)=>{
                    return(
                        <option key={index} value={`${latitude}:${longitude}`} style={{fontSize:'0.8em'}}>{name},{country},{latitude},{longitude}</option>
                    )
                    })}

        </select></div>

    <Tabs
    id="forecast-tabs"
    variant="pills"
    activeKey={key}
    onSelect={(k) => setKey(k)}
    className="mb-3 "
   style={{fontSize:"0.8em",justifyContent:"space-evenly"}}
  >

    <Tab eventKey="current" title="Current">

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
    </Tab>
    <Tab eventKey="today" title="Today" >
       
    <div id="forecast" >
 <h5>Todays Weather</h5>
 <h6> {startDate.toDateString()}</h6>
  
 <HourlyChart  startDate={startDate} endDate={new Date(startDate)} long={long} lat={lat}/>
 <hr/>
 <button style={{backgroundColor:'grey'}}>
   <a href= {'../'} className="button_link">Back to title page</a>
 </button>

    </div>  
    </Tab>


    <Tab eventKey="tomorrow" title="Tomorrow" >
    <div id="forecast">
 <h5>Weather Tomorrow</h5>
 <h6>{tomorrow.toDateString()}</h6>
  
 <HourlyChart  startDate={tomorrow} endDate={tomorrow} long={long} lat={lat}/>
 <hr/>
 <button style={{backgroundColor:'grey'}}> <a href= {'../'} className="button_link">Back to title page</a>
 </button>

    </div>
    </Tab>


    <Tab eventKey="7days" title="7 days" >
    <div id="forecast">
 <h5>7 Day forecast</h5>
 <h6>From {startDate.toDateString()}</h6>
 <h6>To {endDate.toDateString()}</h6>
  
 <DailyChart  startDate={startDate} endDate={endDate} day={true} long={long} lat={lat}/>
 <hr/>
 <button style={{backgroundColor:'grey'}}>
 <a href= {'../'} className="button_link">Back to title page</a>
 </button>
    </div>
    </Tab>
  </Tabs>
  </>   
    )
}
