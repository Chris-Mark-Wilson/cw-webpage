import React from 'react'
import { useState } from 'react'
import {useEffect} from 'react'
import {fetchDailyWeather} from '../utils/fetchApi'
import {
    MainContainer,
    Container,
    BarChartContainer,
    Number,
    Temp,
    Time,
    BlackLine,
    MakeBar
  } from "../styles";
  import {objectify} from '../utils/objectify'
  import {Spinner} from 'react-bootstrap'




export const WeatherChart=({startDate,endDate})=>{
  const [isLoading,setIsLoading]=useState(true)
  const[weatherObj,setWeatherObj]=useState([])

useEffect(()=>{
    fetchDailyWeather(startDate,endDate)
.then((result)=>{
   
setWeatherObj(result);
setIsLoading(false);

})},[])


    // weatherObj is an object delivered from the api
    // it contains keys of time (iso8601), temperature_2m (*c), precipitation_probability (%), cloudcover (%) and weathercode (number)
    // each key is an array of 192 item

    if(isLoading)  return (
      <Container>
        <MainContainer>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      </MainContainer>
      </Container>
    )
    
    const weatherArray=objectify(weatherObj)
    // comes back as an array of 192 objects
    // each object has temp,time,rain,cloud,desc
     // (description from weathercode)
    
    return(
        
             <Container>
               <MainContainer>
               
                {weatherArray.map(({temp,time,rain,cloud,desc},index) => {
                  return (
  
                    <BarChartContainer key={index}>
                       <Temp color={["black"]}>{Math.round(temp)}℃</Temp> 
                        <MakeBar height={temp * 2} colors={["rgb(207,53,33)","rgb(144,218,24)","rgb(62,141,173)"]} />
                        <Time color={["black"]}>{time}:00</Time>
                       <Time color={["blue"]}>{rain}%</Time>
                       
                     </BarChartContainer> 
                  );
                })};
                
               
              </MainContainer>
               <BlackLine />
             </Container>
        
          );
        }
           
    
    