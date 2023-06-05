import { useState } from 'react'
import {useEffect} from 'react'
import {fetchCurrentWeather} from '../utils/fetchWeather'
import Clock from './clock'


export const WeatherApp=()=>{
    const[description,setDescription]=useState('No weather returned')
const [temp,setTemp]=useState(0)
const[time,setTime]=useState("00:00")

useEffect(()=>{
    fetchCurrentWeather()
.then((result)=>{
setDescription(result.description)
setTemp(result.temp)   
setTime(result.time) 
})})
return(
    <>
<div>
    <p>Peterborough, cambridgeshire</p>
   Data retrieved at: {time} 
</div>

    <div>
       <p> Current temperature: { temp}</p>    
        Current sky: {description}
    </div>
    <div id="clock"><Clock/></div>
    </>
    )
}