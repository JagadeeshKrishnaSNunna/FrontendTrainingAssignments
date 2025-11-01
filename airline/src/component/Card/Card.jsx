import './Card.css'
import Flight from '../Flight/Flight'
import Price from '../Price/Price';
import Details from '../Details/Details';

function Card(props) {
    return (
        <div className='cardContainer'>
            <div className='flightcontainer'>
                <Flight data={props.data.arrival} />
                <hr className='line' />
                <Flight data={props.data.departure} />
                <div className='footer'>
                    <Details data={props.data} />
                </div>
            </div>
            <div className='priceContainer'>
                <Price data={props.data.price} />
            </div>
        </div>
    )
}


export default Card;