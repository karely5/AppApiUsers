import { useState, useRef } from "react";



export const UserCard = ({user}) => {
  const [isContacted, setIsContacted] = useState(false)
  // const [tecnologies, setTecnologies] = useState(['HTML', 'CSS', 'JS'])
  const [address, setAddress] = useState({street:'calle falsa', number:123});

  const ref = useRef(0)

  const {id, firstName, email, image} = user  

  const handleClick = () => {
    setAddress({...address, street:'calle nueva', number:456});
  }

  console.log('render');

  const handleIncreaseRef = () =>{
    ref.current++;
    console.log(ref)
  }
 
  return (
    <div className="card">
      <img className="image" src={image} alt={firstName} />
      <h2 className="name">{firstName}</h2>
      <p className="description">{email}</p>
      <button onClick={handleIncreaseRef}>Aumentar Ref</button>
      <button id={id} onClick={() => handleClick()}>
        {
          isContacted ? 'Contactado' : 'Contactar'
        }
      </button>
    </div>
  );
};
