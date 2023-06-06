import { useState } from "react";
import { Header } from "./components/header";
import React from "react";
import { CurrentWeather } from "./components/currentWeather";
import {AboutUs} from './components/aboutUs'
import {  Lockdown } from "./components/lockdown";
import { Forecast } from "./components/forecast";


import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <AboutUs/>
      <CurrentWeather />
      <Lockdown />
      <Forecast/>
    </>
  );
}

export default App;
