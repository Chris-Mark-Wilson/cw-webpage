import {useEffect} from 'react'
import { fetchSelectedCity } from '../utils/geocodeApi';


export const Geolocation = ({cityData,setCityData,city, setCity, long, lat, setLong, setLat}) =>{




    useEffect(() => {
        fetchSelectedCity(city)
        .then((result) => {
          console.log(result)
           if(result){
            setCityData(result);
            setLat(result[0].latitude);
            setLong(result[0].longitude);
           }else
        setCityData([{name:'No results found', latitiude:"",longitude:"",country:"",admin1:"",admin2:""}]);
      
        });
      }, [city]);

return (
<>
<div id="geolocation">
  <div>
        {/* getting city name and long lat co-ordinates */}

        <label htmlFor="cityName">Search:   </label>
        <input
        defaultValue=""
          id="cityName"
          type="search"
          variant=""
          name="selectCity"
          style={{ fontSize: "0.8em", width: "55%" }}
          placeholder="Start typing..."
          onChange={(element) => {
            // const event = new Event("change");
            // const selectElement = document.querySelector('#selectCity')
            // selectElement.dispatchEvent(event);
// fires select onChange event to auto load top option into weather

               setCity(element.target.value)
          
             }
          }
        />
      </div>
      <div><label htmlFor="selectCity">Select:</label>
        <select style={{width:'50%', fontSize:'0.8em'}} onChange={(element)=>{
               setLat(element.target.value.split(':')[0])
               setLong(element.target.value.split(':')[1])
        }}>
                {cityData.map(({name, latitude,longitude,country,admin1,admin2},index)=>{
                    return(
                        <option key={index} value={`${latitude}:${longitude}`} style={{fontSize:'0.8em'}} selected={false}>{name},{country},{latitude},{longitude}</option>
                    )
                    })}

        </select></div>
        </div>


</>
)
}