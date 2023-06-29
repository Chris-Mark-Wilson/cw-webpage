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
    element:<AboutUs />,
    errorElement:<ErrorPage/>
  },
  {
    path:"/currentWeather",
    element:<CurrentWeather/>,
    errorElement:<ErrorPage/>
  },
  {
    path:"/lockdown",
    element:<Lockdown />,
    errorElement:<ErrorPage/>
  },
  {
    path:"/forecast",
    element:<Forecast />,
    errorElement:<ErrorPage/>
  }

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
