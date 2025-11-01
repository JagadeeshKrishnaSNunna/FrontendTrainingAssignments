import './Price.css'

function Price(){
    return(
        <div className='priceConrainer'>
            <div ><del>$791</del></div>
            <div className='actualPrice'>$772<sup>.39</sup></div>
            <div>Including Taxes</div>
            <div>Hurry ! Only 5 seats left</div>
            <button className='book'>BOOK</button>
            <div className='emi'>starting at $49/mo with <span>affirm</span> . Check your purchasing power</div>
        </div>
    )
}



export default Price;
