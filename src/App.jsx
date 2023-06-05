import { useState } from 'react'
import {Header} from './components/header'
import{Content} from './components/content'
import{workImageArray} from './assets/images'
import{WorkImageCarousel} from './components/workImageCarousel'
import React from 'react'
import {EarlyHistory,LaterHistory} from './components/history'
import {WeatherApp} from './components/weatherApp'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Header/>
   <div id="weather">
   <WeatherApp/>
   </div>
   <div className="historyContainer">
    <EarlyHistory/>
   <WorkImageCarousel imageArray={workImageArray}/>
   <LaterHistory/>
   </div>
   <Content/>
   
    </>
  )
}

export default App
