import {descObject} from '../assets/descObject'

export const objectify=(obj)=>{
    let array=[]
    for (let i=0;i<obj.time.length;i++){
        array.push({
         time:obj.time[i].toString().slice(11,13),
         temp:obj.temperature_2m[i],
         rain:obj.precipitation_probability[i],
         cloud:obj.cloudcover[i],
         desc:descObject[obj.weathercode[i]],
         day:new Date(obj.time[i]).toDateString().slice(0,3)

        })
    }
    return array
}