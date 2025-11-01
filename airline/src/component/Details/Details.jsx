import Flight from '../Flight/Flight';
import './Details.css'
import { useState } from 'react';

function Details(props) {
    const [disp, setDisp] = useState(0)
    const clickHandler = () => { 
        console.log(disp);
        setDisp(!(disp))        
    }
{props.data?"null":<p>loading..!</p>}
    return (
        <div className='detailContainer'>
            <button onClick={clickHandler}>Show Details </button>
            {props.data ? null:<p>loading..!</p>}
            {(disp && props.data) ? <div className='flightcontainer'>
                <Flight data={props.data.arrival} />
                <Flight data={props.data.departure} />
            </div>: null}
        </div>
    )
}



export default Details;