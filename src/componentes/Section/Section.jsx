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
  
  const [count, setCount] = useState(0)
  const [users, setUsers] = useState([])
  
  
  useEffect(()=>{
    console.log('useEffet ejecutado');
    fetch('https://dummyjson.com/users?limit=3').then(res=>res.json()).then(data=> {
      console.log(data.users)
      setUsers(data.users)
    })
    
  }, [count])

  const handleClick = () => setCount(count + 1);

  return (
    <>
      <h2>{count}</h2>
      <button onClick={handleClick}>Contador</button>
      <section>
        {users.map((user) => {
     
     return <UserCard key={user.id} user={user} />;
        })}
      </section>
    </>
  );
}
