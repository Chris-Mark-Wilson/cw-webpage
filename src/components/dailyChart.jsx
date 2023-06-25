import React from 'react'
import { useState } from 'react'
import {useEffect} from 'react'
import {fetchDailyWeather} from '../utils/fetchApi'
import {dailyfy} from '../utils/dailyfy'
import {Spinner} from 'react-bootstrap'


export const DailyChart=({startDate,endDate})=>{
    const [isLoading,setIsLoading]=useState(true)
    const[weatherObj,setWeatherObj]=useState([])
  
  useEffect(()=>{
      fetchDailyWeather(startDate,endDate)
  .then((result)=>{
   
  setWeatherObj(result);
  setIsLoading(false);
  
  })},[])
  
  if(isLoading)  return (
      <div id="spinner-container">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
     </div>
      )
      
      // weatherObj is an object delivered from the api
      // it contains keys of time (iso8601), temperature_2m _max(*c), temperature_2m_min,precipitation_probability_max (%), and weathercode (number)
      // each key is an array of 8 items
      // ------------------------end load weather ------------------------------

      const array=dailyfy(weatherObj)
      
      return (
        <div className='day-container'>
        <div className="daydiv">

{array.map(({time,maxTemp,minTemp,weatherDesc,rain,weatherCode},index)=>{
    return(
        <div key={index} className="bar-container">
            <div className='three-bars'>
                 <div className='chart-bar' 
                  id='bar-maxTemp'  
                 style={{ height:`${maxTemp*4}px`}} />
                 <div className='chart-bar' id='bar-minTemp' style={{height:`${minTemp*4}px`}}/>
                 <div className='chart-bar' id='bar-rain' style={{height:`${(200/100)*rain}px`}}/>
            </div>
        <div style={{fontSize:`0.7rem`}}>{maxTemp}°c</div>
        <div style={{fontSize:`0.7rem`}}>{minTemp}°c</div>
        <div style={{fontSize:`0.7rem`}}>{rain}%</div>
        <div style={{fontSize:`0.7rem`}}>{new Date(time).toDateString().slice(0,3)}</div>

        </div>
    )
})}
        </div>
        </div>
      )
      }  