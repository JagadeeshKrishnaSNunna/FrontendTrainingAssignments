import { useState } from 'react'
import Card from '../card/Card.jsx'
import './SearchBar.css'

function SearchBar(props) {
    const [name, setName] = useState('')
    const [matchData, setMatchData] = useState(null) 

    const findHandler = () => {
        const filtered = props.data.filter((u) =>
            u.name.toLowerCase().includes(name.toLowerCase())
        )
        console.log(name);
        
        setMatchData(filtered)
    }

    return (
        <>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Enter the Name'
            />
            <button onClick={findHandler}>Find</button>

            {matchData === null && (
                <div className='cardDock'>
                    {props.data.map((value, id) => (
                        <Card key={id} data={value} />
                    ))}
                </div>
            )}

            {matchData !== null && (
                matchData.length > 0 ? (
                    <div className='cardDock'>
                        {matchData.map((value, id) => (
                            <Card key={id} data={value} />
                        ))}
                    </div>
                ) : (
                    <h2>No Match Found</h2>
                )
            )}
        </>
    )
}

export default SearchBar
