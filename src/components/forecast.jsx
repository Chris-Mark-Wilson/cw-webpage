import { WeatherChart } from './weatherChart'
import { useState } from 'react'

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


export const Forecast=()=>{

    const [startDate, setStartDate] = useState(new Date())

const[endDate,setEndDate]=useState(new Date(startDate.getFullYear(),startDate.getMonth(),startDate.getDate()+8))

const [tomorrow,setTomorrow]=useState(new Date(startDate.getFullYear(),startDate.getMonth(),startDate.getDate()+2))

const [key, setKey] = useState('7days');
return(
    <Tabs
    id="controlled-tab-example"
    activeKey={key}
    onSelect={(k) => setKey(k)}
    className="mb-3"
  >
    <Tab eventKey="today" title="Today" >
       
    <div id="forecast">
 <h5>Todays Weather</h5>
 <h6> {startDate.toDateString()}</h6>
  
 <WeatherChart  startDate={startDate} endDate={new Date(startDate)}/>
 <hr/>
 <a href= {'../'} className="button_link">Back to title page</a>
    </div>  
    </Tab>


    <Tab eventKey="tomorrow" title="Tomorrow" >
    <div id="forecast">
 <h5>Weather Tomorrow</h5>
 <h6>{tomorrow.toDateString()}</h6>
  
 <WeatherChart  startDate={tomorrow} endDate={tomorrow}/>
 <hr/>
 <a href= {'../'} className="button_link">Back to title page</a>
    </div>
    </Tab>


    <Tab eventKey="7days" title="7 days" >
    <div id="forecast">
 <h5>7 Day forecast</h5>
 <h6>From {startDate.toDateString()}</h6>
 <h6>To {endDate.toDateString()}</h6>
  
 <WeatherChart  startDate={startDate} endDate={endDate}/>
 <hr/>
 <a href= {'../'} className="button_link">Back to title page</a>
    </div>
    </Tab>
  </Tabs>
   
    )
}
