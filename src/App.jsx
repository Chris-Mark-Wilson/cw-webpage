import { useState } from "react";
import { Header } from "./components/header";
import React from "react";
import { WeatherApp } from "./components/weatherApp";
import {AboutUs} from './components/aboutUs'
import { Bikes } from "./components/bikes";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
     
      <AboutUs/>
      <WeatherApp />
      <Bikes />
    </>
  );
}

export default App;
