import React from 'react'
import { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { ErrorPage } from './components/errorPage'
import './index.css'
import './Root.css'
import {Root} from './components/root.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { AboutUs } from './components/aboutUs.jsx'
import { CurrentWeather } from './components/currentWeather.jsx'
import { Lockdown } from './components/lockdown.jsx'
import { Forecast } from './components/forecast.jsx'


const router= createBrowserRouter([
  {
    path:"/",
    element:<Root />,
    errorElement:<ErrorPage/>
  },
  {
    path:"/aboutUs",
    element:<AboutUs />
  },
  {
    path:"/currentWeather",
    element:<CurrentWeather/>
  },
  {
    path:"/lockdown",
    element:<Lockdown />
  },
  {
    path:"/forecast",
    element:<Forecast />
  }

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
