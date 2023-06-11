import { useState } from "react";
import { Header } from "./components/header";
import React from "react";
import { CurrentWeather } from "./components/currentWeather";
import {AboutUs} from './components/aboutUs'
import {  Lockdown } from "./components/lockdown";
import { Forecast } from "./components/forecast";
import "./App.css";

//--------------------firebase config set up----------------
import { initializeApp } from 'firebase/app';

// config from  1) registerapp - 2) add firebase sdk -> firebase console
const firebaseConfig = {
  apiKey: "AIzaSyDtsegIp0u2X2B6eVtiKE4ro-bq5r7aNi8",
  authDomain: "cw-webpage-1686390194073.firebaseapp.com",
  projectId: "cw-webpage-1686390194073",
  storageBucket: "cw-webpage-1686390194073.appspot.com",
  messagingSenderId: "751299865282",
  appId: "1:751299865282:web:fd1e83b31c040af0b6695b",
  measurementId: "G-3EC528K5J2"  
};

const app = initializeApp(firebaseConfig);

//-------------------------------------------------------------


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
