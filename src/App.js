// import logo from './logo.svg';
import {useState, useEffect} from "react"

function Github({name, bio, followers, following, avatar_url}) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{bio}</p>
      <p>Followers: {followers}</p>
      <p>Following: {following}</p>
      <img src={avatar_url} height={150}/>
    </div>
  )
}

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(
      'https://api.github.com/users/Sisi-tech'
    ).then((response) => response.json()).then(setData);
  }, []);
  if(data)
  return <Github 
  name={data.name} 
  bio={data.bio} 
  followers={data.followers} 
  following={data.following}
  avatar_url={data.avatar_url}
  />;
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

export default App;
