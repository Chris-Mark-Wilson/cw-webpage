import { Carousel } from "react-bootstrap"

export const WeatherCarousel=({weatherArray})=>{
    return(
    <Carousel  slide={false}  controls={true} indicators={false} id="weatherCarousel" >
        {weatherArray.map(({desc,todaysDate,minimumTemp,maximumTemp,feelsLikeMin,feelsLikeMax,hoursOfRain,sunrise,sunset,uv,windspeed},index)=>{
            return(
            <Carousel.Item key={index}>
                <br></br>
                <p>Date: {todaysDate}</p>
                <br></br>
                <p>Worst weather: {desc}</p>
                <br></br>
                <p>Min Temp: {minimumTemp}</p>
                <p>Feels Like: {feelsLikeMin}</p>
                <br></br>
                <p>Max Temp: {maximumTemp}</p>
                <p>Feels Like: {feelsLikeMax}</p>
                <br></br>
                <p>Hours Of Rain: {hoursOfRain}</p>
                <br></br>
                <p>Sunrise: {sunrise}</p>
                <p>Sunset: {sunset}</p>
                <br></br>
                <p>UV Index: {uv}</p>
                <br></br>
                <p>Windspeed: {windspeed}</p>
            </Carousel.Item>
            )
        })}
    </Carousel>
    
    )
    
    }