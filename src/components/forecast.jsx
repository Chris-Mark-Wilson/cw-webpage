import { useState } from 'react'
import {useEffect} from 'react'
import { WeatherCarousel } from './weatherCarousel'


import {fetchDailyWeather} from '../utils/fetchApi'


export const Forecast=()=>{
    const[description,setDescription]=useState('No weather returned')

const[weatherArray,setWeatherArray]=useState([])

const [startDate, setStartDate] = useState(new Date())
const[endDate,setEndDate]=useState(new Date(startDate.getFullYear(),startDate.getMonth(),startDate.getDate()+8))
// yes this is how I add 7 days to the date. :/

useEffect(()=>{
    fetchDailyWeather(startDate,endDate)
.then((result)=>{
setWeatherArray(result)
})})


return(
    <div id="forecast">
 <h5>7 Day forecast</h5>
 <h6>From {startDate.toLocaleDateString()}</h6>
   {/* <h6>To {endDate.toLocaleDateString()}</h6> */}
 <WeatherCarousel weatherArray={weatherArray}/>
    </div>
    )
}
