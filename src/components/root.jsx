 import {Link} from 'react-router-dom'
 
 export const Root=()=>{
    return(
        <div id="header">
       
        <div id="chris">
            <br/><br/>
            <h3>Site under construction <br/>Live development please excuse the layout while I work on the functionality
            </h3>
            <br/>
            <h2>Example webpage</h2>
            <h2> written by</h2>
             <h2>Chris Wilson</h2>  
             <h2>using React js </h2>
             <h3>project built with vite</h3>
       <h6>weather api  open-meteo.com</h6>
       </div>
       <div id="links">
        Quick links to mini apps/ functions etc
        <br/>
         <Link to = {'aboutUs'}>Carousel of my old job</Link>
         <br/>
         <Link to = {'currentWeather'}>Current weather</Link>
         <br/>
         <Link to = {'lockdown'}>Lockdown project</Link>
         <br/>
         <Link to = {'forecast'}>7 day weather</Link>

        
        </div>
       <div className="sides" id="email">
    <p>email: cw.plastering.services@gmail.com</p>
    chris@cmwilson.co.uk

   </div>
       </div>
    )
}
