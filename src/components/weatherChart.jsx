import React from 'react'
import {
    MainContainer,
    Container,
    BarChartContainer,
    Number,
    BlackLine,
    MakeBar
  } from "../styles";

export const WeatherChart=({weatherObj})=>{

    // weatherObj is an object delivered from the api
    // it contains keys o,f time (iso8601), temperature_2m (*c), precipitation_probability (%), cloudcover (%) and weathercode (number)
    // each key is an array of 192 items
    
    return(
        
             <Container>
               <MainContainer>
                {weatherObj.temperature_2m.map((temp,index) => {
                  return (
    
                    <BarChartContainer key={index}>
                       <Number color={["black"]}>{Math.round(temp)} </Number> 
                        <MakeBar height={temp * 2} colors={["rgb(207,53,33)","rgb(116,173,62)","rgb(62,141,173)"]} />
                     </BarChartContainer> 
                  );
                })}; 
              </MainContainer>
               <BlackLine />
             </Container>
        
          );
        }
           
    
    