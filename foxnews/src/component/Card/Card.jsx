import './Card.css'

function Card(props){
    console.log(props.rec.attributes);
    return(
        <div className='cardContainer'>
            <div className='thum'>
                <img src={props.rec.attributes.thumbnail} alt="" />
            </div>
            <div className='desc'>
                <div><span>{props.rec.attributes.section.toUpperCase()}</span>     {props.rec.attributes.time_since}</div>
                <div className='title'>{props.rec.attributes.title}</div>
                <div>{props.rec.attributes.description}</div>
            </div>
        </div>
    )
}


export default Card