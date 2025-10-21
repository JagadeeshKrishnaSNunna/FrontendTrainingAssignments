import './display_card.css'
import {useState,useEffect} from 'react'
import Card from "../card/Card.jsx"
import './display_card.css'


function display_card(){
    const [data,setData]=useState([])
    useEffect(()=>{
      fetch("/data.json")
      .then(res=> res.json())
      .then(setData)
    },[]);
    // console.log(data);
    return (
        <div class='display_container'>
     {data.map(item => (
          <Card key={item.id} logo={item.logo} name={item.name} status={item.status} />
        ))}
    </div>
    );
}

export default display_card