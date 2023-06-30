import { HourlyChart } from './hourlyChart'
import { useState } from 'react'
import { DailyChart } from './dailyChart';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


export const Forecast=()=>{

    const [startDate, setStartDate] = useState(new Date())

const[endDate,setEndDate]=useState(new Date(startDate.getFullYear(),startDate.getMonth(),startDate.getDate()+7))

const [tomorrow,setTomorrow]=useState(new Date(startDate.getFullYear(),startDate.getMonth(),startDate.getDate()+2))

const [key, setKey] = useState('today');
return(
    <Tabs
    id="forecast-tabs"
    
    activeKey={key}
    onSelect={(k) => setKey(k)}
    className="mb-3 "
   
  >
    <Tab eventKey="today" title="Today" >
       
    <div id="forecast" >
 <h5>Todays Weather</h5>
 <h6> {startDate.toDateString()}</h6>
  
 <HourlyChart  startDate={startDate} endDate={new Date(startDate)}/>
 <hr/>
 <button style={{backgroundColor:'grey'}}>
   <a href= {'../'} className="button_link">Back to title page</a>
 </button>

    </div>  
    </Tab>


    <Tab eventKey="tomorrow" title="Tomorrow" >
    <div id="forecast">
 <h5>Weather Tomorrow</h5>
 <h6>{tomorrow.toDateString()}</h6>
  
 <HourlyChart  startDate={tomorrow} endDate={tomorrow} />
 <hr/>
 <button style={{backgroundColor:'grey'}}> <a href= {'../'} className="button_link">Back to title page</a>
 </button>

    </div>
    </Tab>


    <Tab eventKey="7days" title="7 days" >
    <div id="forecast">
 <h5>7 Day forecast</h5>
 <h6>From {startDate.toDateString()}</h6>
 <h6>To {endDate.toDateString()}</h6>
  
 <DailyChart  startDate={startDate} endDate={endDate} day={true}/>
 <hr/>
 <button style={{backgroundColor:'grey'}}>
 <a href= {'../'} className="button_link">Back to title page</a>
 </button>
    </div>
    </Tab>
  </Tabs>
   
    )
}
