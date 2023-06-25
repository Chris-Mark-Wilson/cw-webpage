import {descObject} from '../assets/descObject'
export const dailyfy=(obj)=>{
    const array=[];
    for(let i=0;i<obj.time.length;i++){
array.push({
    time:obj.time[i],
    maxTemp:obj.temperature_2m_max[i],
    minTemp:obj.temperature_2m_min[i],
    weatherDesc:descObject[obj.weathercode[i]],
    rain:obj.precipitation_probability_max[i],
    weatherCode:obj.weathercode[i]  
})
    }
    return array;
}