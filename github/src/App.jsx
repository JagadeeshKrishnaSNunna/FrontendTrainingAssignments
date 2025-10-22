import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [userData, setUserData] = useState([])
  const [userName, setUserName] = useState('')

  const handlerInputChange = (event) => {
    const { value } = event.target
    setUserName(value)
  }

  const handelerSearch = () => {
    fetch(`https://api.github.com/users/${userName}`)
      .then(res => res.json())
      .then(data => {
        setUserData(data)
        setUserName('')
      })
  }



  return (
    <div>
      <Title headerText="Github profile page" />
      <Search searchText={userName} onChangeHandler={handlerInputChange} onClickHandler={handelerSearch} />
      <UserProfile {...userData} />
      
    </div>
  )
}

const Title = ({ headerText }) => {

  return (
    <h1>{headerText}</h1>
  )
}

const Search = (props) => {

  const { searchText, onChangeHandler, onClickHandler } = props
  return (
    <div>
      <input style={{ marginRight: "10px" }} type='text' value={searchText} onChange={onChangeHandler}></input>
      <button onClick={onClickHandler}>Search</button>
    </div>
  )
}

const UserProfile = (props) => {
  if (!props.login)
    return null

  return (
    <div>
      <div>name:{props.name || props.login}</div>
      <div>Email:{props.email} </div>
      <div>Company:{props.company} </div>
      <div>Located:{props.located} </div>
      <div>Created:{props.created_at} </div>
      <a href={props.html_url} target="_blank">git hub url</a>
      <CardDock reposURL={props.repos_url} /> 
    </div>
  )
}

const CardDock = (props) => {
  const { reposURL } = props
  if (!reposURL)
    return null

  return (
    <div>
      <Card reposURL={reposURL} />
    </div>
  )
}

const SingleCard = (props) => {
  const {repoName,visibility,language}=props
  return (
    <div className='container'>
      <div>
        <div className='line'>
          <svg aria-hidden="true" height="30" width="30" viewBox="0 0 16 16" version="1.1" data-view-component="true" className="octicon octicon-repo mr-1 color-fg-muted">
            <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
          </svg>
          <div className='name'>{repoName}
            <div className='visibility'><p>{visibility}</p></div>
          </div>
          <svg id='grip' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-grip-vertical" viewBox="0 0 16 16">
            <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
          </svg>
        </div>
        <div className='line'>
          <div className='color'></div>
          <div className='language'>{language}</div>
        </div>
      </div>
    </div>
  )
}
const Card = (props) => {
  const { reposURL } = props
  const [repos, setRepos] = useState([])
  useEffect(() => {
    fetch(reposURL)
      .then(res => res.json())
      .then(data => {
        setRepos(data)
      })
  }, [reposURL])
  

  console.log(repos);
  return (
    <>
      <hr />
      <div>Total repos:{repos.length}</div>
      <div className='dock'>
        {repos.map(item => (
        <SingleCard key={item.id} repoName={item.name} visibility={item.visibility} language={item.language}/>
      ))}
      </div>

    </>
  )

}


export default App
