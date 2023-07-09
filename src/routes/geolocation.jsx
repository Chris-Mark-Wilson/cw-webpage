import {useState,useEffect} from 'react'
import { fetchSelectedCity } from '../utils/geocodeApi';


export const Geolocation = ({cityData,setCityData,city, setCity, long, lat, setLong, setLat}) =>{




    useEffect(() => {
        fetchSelectedCity(city)
        .then((result) => {
           result?setCityData(result):
        setCityData([{name:'No results found', latitiude:"",longitude:"",country:"",admin1:"",admin2:""}]);
        });
      }, [city]);
console.log(cityData)
return (
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



</>
)
}