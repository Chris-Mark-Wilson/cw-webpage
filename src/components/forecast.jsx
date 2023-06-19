import { useState } from 'react'
import {useEffect} from 'react'
import { WeatherChart } from './weatherChart'


import {fetchDailyWeather} from '../utils/fetchApi'


export const Forecast=()=>{
   

const[weatherObj,setWeatherObj]=useState({temperature_2m:[10,20,30,40]})

const [startDate, setStartDate] = useState(new Date())
const[endDate,setEndDate]=useState(new Date(startDate.getFullYear(),startDate.getMonth(),startDate.getDate()+8))


useEffect(()=>{
    fetchDailyWeather(startDate,endDate)
.then((result)=>{
   
setWeatherObj(result)

})},[])


return(
    <div id="forecast">
 <h5>7 Day forecast</h5>
 <h6>From {startDate.toLocaleDateString()}</h6>
  
 <WeatherChart weatherObj={weatherObj}/>
    </div>
    )
}
