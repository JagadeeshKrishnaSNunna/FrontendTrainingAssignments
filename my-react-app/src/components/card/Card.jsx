import { useState } from 'react'
import './Card.css'

function Card({ logo, name, status }) {
  const container_class=['container']
  const status_class=['status']
  if(status=="Active Incident"){
    status_class.push('orange')
    container_class.push('orange_con')
  }
  else if(status=='Down'){
    status_class.push('black')
    container_class.push('black_con')
  }
  return (
    <div className={container_class.join(" ")}>
      <div className="logo_container">
        <img id="logo" src={logo} alt="" />
      </div>
      <div className="text_container">
        <div id="name">{name}</div>
        <div id="status" className={status_class.join(" ")}>{status}</div>
      </div>
    </div>
  )
}

export default Card
