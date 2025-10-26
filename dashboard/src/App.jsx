import { useEffect, useState } from 'react'
import SearchBar from './components/searchBar/SearchBar.jsx'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [userData, setUserData] = useState([])

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json())
    .then((data)=>{
      setUserData(data)})
  },[])
  // console.log(userData);
  
  return (
    <>
    {/* {console.log(userData)} */}
      <SearchBar data={userData}></SearchBar>
    </>
  )
}

export default App
