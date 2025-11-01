import React from 'react';
import { useEffect, useState } from 'react'
import Card from './component/Card/Card'
import './App.css'

function App() {
  const [flightData, setFlightData] = useState(null)
  useEffect(() => {
    fetch('/component/data.json')
      .then(res => res.json())
      .then(d => {
        // console.log(d);
        setFlightData(d)
      })
  }, []
  )
  
  return (
    <>
      {flightData?<Card data={flightData}/>:<p>Loading...!</p>}
    </>
  )
}

export default App
