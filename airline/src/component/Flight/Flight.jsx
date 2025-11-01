import './Flight.css'

function Flight(props){    
    return(
        <div className='flightContainer'>
            {/* <img src="https://d1qznzlun37fj0.cloudfront.net/images/search/airlinelogos/--.gif" alt="" /> */}
            <div className='header'>
                <div className='from'>
                    <div className='TnD'>{props.data.from.time}<span> on </span>{props.data.from.date}</div>
                    <div className='place'>{props.data.from.Location}</div>
                </div>
                <div className='stops'>
                    <div>{props.data.stops.count} stops({props.data.stops.count}|ZRH)</div>
                    <div>Trip: {props.data.stops.duration}</div>
                </div>
                <div className='to'>
                    <div className='TnD'>{props.data.to.time}<span> on </span>Nov 15,2025</div>
                    <div className='place'>{props.data.to.Location}</div>
                </div>
            </div>
            <div className='footer'>Air Canada</div>
            <div className='footer'>Flight 4601</div>
        </div>
    )

}

export default Flight;