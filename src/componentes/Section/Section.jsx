import { useState, useEffect } from 'react'
// import userImg from '../../assets/jugador.png'
import './Section.css'
import { UserCard } from '../UserCard/UserCard'

/* const users = [
  {
    id: 1,
    name: 'Karely Navarrete',
    description: 'Frontend Developer',
    image: userImg
  },
  {
    id: 2,
    name: 'Clark Kent',
    description: 'Bakend Develper',
    image: userImg
  },
  {
    id: 3,
    name: 'Bruce Wine',
    description: 'Security Developer',
    image: userImg
  },
] */



export const Section = () => {
  
  const [count, setCount] = useState(1)
  const [likes, setLikes] = useState(0)
  const [users, setUsers] = useState([])
  
  
  useEffect(()=>{
    console.log('useEffet ejecutado');
    // fetch('https://dummyjson.com/users?limit=3').then(res=>res.json()).then(data=> {
    fetch(`https://dummyjson.com/users`)
    .then(res=>res.json())
    .then(data=> {
      setUsers(data.users)
    })
    
  }, [count])

  const handleClick = () => setCount(count + 1);

  const handleIncreaseLikes = () => setLikes(likes + 1)

  return (
    <>
      <h2>{count}</h2>
      <button onClick={handleClick}>Siguiente</button>
      <h2>{likes}</h2>
      <button onClick={handleIncreaseLikes}>Likes</button>
      <section>
        {
          users.map(user => <UserCard key={user.id} user={user} />)
          
        }
      </section>
    </>
  );
}
