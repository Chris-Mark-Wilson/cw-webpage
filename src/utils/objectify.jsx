import {descObject} from '../assets/descObject'

export const objectify=(obj)=>{
    let array=[]
    for (let i=0;i<obj.time.length-1;i++){
        array.push({
          feelsLikeMax:obj.apparent_temperature_max[i],
          feelsLikeMin: obj.apparent_temperature_min[i],
          hoursOfRain:obj.precipitation_hours[i],
          sunrise:new Date(obj.sunrise[i]).toLocaleTimeString(),
          sunset:new Date(obj.sunset[i]).toLocaleTimeString(),
          maximumTemp:obj.temperature_2m_max[i],
          minimumTemp:obj.temperature_2m_min[i],
          todaysDate:new Date(obj.time[i]).toDateString(),
          uv:obj.uv_index_max[i],
          desc:descObject[obj.weathercode[i]],
            windspeed:obj.windspeed_10m_max[i]

        })
    }
    return array
}