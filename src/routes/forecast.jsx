import { HourlyChart } from '../components/hourlyChart'
import { useState } from 'react'
import { DailyChart } from '../components/dailyChart';
import { useEffect } from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { fetchSelectedCity } from "../utils/geocodeApi";
import {Geolocation} from '../components/geolocation'
import { CurrentWeather } from '../components/currentWeather';

export const Forecast=()=>{

    const [startDate, setStartDate] = useState(new Date())
const[endDate,setEndDate]=useState(new Date(startDate.getFullYear(),startDate.getMonth(),startDate.getDate()+7))
const [tomorrow,setTomorrow]=useState(new Date(startDate.getFullYear(),startDate.getMonth(),startDate.getDate()+2))
const [key, setKey] = useState('today');

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



return(
  
<div>
      
    <Tabs
    id="forecast-tabs"
    variant="pills"
    activeKey={key}
    onSelect={(k) => setKey(k)}
    className="mb-3 "
   style={{fontSize:"0.8em",justifyContent:"space-evenly"}}
  >

    <Tab eventKey="current" title="Current">

    <div>
    <Geolocation cityData={cityData} setCityData={setCityData} city={city} setCity={setCity} long={long} lat={lat} setLong={setLong} setLat={setLat}/>
     
     <CurrentWeather long={long} lat= {lat} city={city}/>
      </div>
    </Tab>
    <Tab eventKey="today" title="Today" >
       
    <div id="forecast" >
      <Geolocation cityData={cityData} setCityData={setCityData} city={city} setCity={setCity} long={long} lat={lat} setLong={setLong} setLat={setLat}/>
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
    <Geolocation cityData={cityData} setCityData={setCityData} city={city} setCity={setCity} long={long} lat={lat} setLong={setLong} setLat={setLat}/>
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
    <Geolocation cityData={cityData} setCityData={setCityData} city={city} setCity={setCity} long={long} lat={lat} setLong={setLong} setLat={setLat}/>
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
  </div>
    )
}
