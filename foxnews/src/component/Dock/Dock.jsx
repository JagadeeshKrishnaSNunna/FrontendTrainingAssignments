import './Dock.css'
import Card from '../Card/Card';

function Dock(props) {
    // console.log(props.news);

    return (
        <div className='dockContainer'>
            {
                props.news.map((rec, index) => (
                    <Card key={index} rec={rec} />
                ))
            }

        </div>
    )
}

export default Dock;