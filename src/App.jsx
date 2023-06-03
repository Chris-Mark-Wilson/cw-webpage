import { useState } from 'react'
import {Header} from './components/header'
import{Content} from './components/content'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Header/>
   <Content/>
   
    </>
  )
}

export default App
