import { WeatherChart } from './weatherChart'
import { useState } from 'react'


export const Forecast=()=>{
    const [startDate, setStartDate] = useState(new Date())
const[endDate,setEndDate]=useState(new Date(startDate.getFullYear(),startDate.getMonth(),startDate.getDate()+8))


return(
    <div id="forecast">
 <h5>7 Day forecast</h5>
 <h6>From {startDate.toLocaleDateString()}</h6>
  
 <WeatherChart  startDate={startDate} endDate={endDate}/>
 <a href= {'../'} className="button_link">Back to title page</a>
    </div>
    )
}
