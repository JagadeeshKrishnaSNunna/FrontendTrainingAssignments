import { useEffect, useState } from 'react'
import './App.css'
import Search from './component/Search/Search'
import Dock from './component/Dock/Dock'

function App() {

  const [news,setNews]=useState(null)
  const [search,setSearch]=useState('')

  useEffect(()=>{
    fetch(`https://moxie.foxnews.com/search/web?q=${search}&fields=web&start=1`)
    .then(res=>res.json())
    .then(n=>{
      console.log(n);
      setNews(n)
    })
    .catch(error => {
        console.error("Error fetching news:", error); 
      })
  },[])

  const searchHandler=(e)=>{
    setSearch(e.target.value)
  }
  const searchButtonHandler=(e)=>{
    fetch(`https://moxie.foxnews.com/search/web?q=${search}&fields=web&start=1`)
    .then(res=>res.json())
    .then(n=>{
      console.log(n);
      setNews(n)
      setSearch('')
    })
    .catch(error => {
        console.error("Error fetching news:", error); 
      })


  }

  return (
    <>
    {news ? <div className='window'>
      <Search search={search} searchHandler={searchHandler} searchButtonHandler={searchButtonHandler} count={news.data.length} total={news.numFound}/>
      <Dock news={news.data}/>
    </div>: <p>loading</p>}
    </>
  )
}

export default App
