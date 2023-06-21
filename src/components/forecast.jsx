import { WeatherChart } from './weatherChart'
import { useState } from 'react'

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


export const Forecast=()=>{
    const [startDate, setStartDate] = useState(new Date())
const[endDate,setEndDate]=useState(new Date(startDate.getFullYear(),startDate.getMonth(),startDate.getDate()+8))

const [key, setKey] = useState('Today');
return(
    <Tabs
    id="controlled-tab-example"
    activeKey={key}
    onSelect={(k) => setKey(k)}
    className="mb-3"
  >
    <Tab eventKey="today" title="Today" >
      Tab content for Today
    </Tab>
    <Tab eventKey="tomorrow" title="Tomorrow" >
      Tab content for Tomorrow
    </Tab>
    <Tab eventKey="7days" title="7 days" >
    <div id="forecast">
 <h5>7 Day forecast</h5>
 <h6>From {startDate.toLocaleDateString()}</h6>
  
 <WeatherChart  startDate={startDate} endDate={endDate}/>
 <a href= {'../'} className="button_link">Back to title page</a>
    </div>
    </Tab>
  </Tabs>
   
    )
}
