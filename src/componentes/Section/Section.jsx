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
  // const [users, setUsers] = useState([]) forma original
  const [user, setUser] = useState({})
  
  
  useEffect(()=>{
    console.log('useEffet ejecutado');
    // fetch('https://dummyjson.com/users?limit=3').then(res=>res.json()).then(data=> {
    fetch(`https://dummyjson.com/users/${count}`)
    .then(res=>res.json())
    .then(data=> {
      console.log(data)
      setUser(data)
    })
    
  }, [count])

  const handleClick = () => setCount(count + 1);

  return (
    <>
      <h2>{count}</h2>
      <button onClick={handleClick}>Siguiente</button>
      <section>
        {
          <UserCard key={user.id} user={user} />
        }
      </section>
    </>
  );
}
