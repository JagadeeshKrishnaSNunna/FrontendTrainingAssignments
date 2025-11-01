import './Search.css'

function Search(props) {
    const { search, searchHandler, searchButtonHandler ,count, total } = props
    return (
        <div className='searchContainer'>
            <p>Showing {count} out of {total} results found for:</p>
            <div className='barContainer'>
                <input type="text" value={search} placeholder='Enter topic to search' onChange={searchHandler} />
                <button onClick={searchButtonHandler}>Search</button>
            </div>
        </div>
    )
}



export default Search;