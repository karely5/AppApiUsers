import { useState } from "react";


export const UserCard = ({user}) => {
  const [isContacted, setIsContacted] = useState(false)
  // const [tecnologies, setTecnologies] = useState(['HTML', 'CSS', 'JS'])
  const [address, setAddress] = useState({street:'calle falsa', number:123});

  const {id, firstName, email, image} = user  

  const handleClick = () => {
    // tecnologies.push('REACT')
    // setIsContacted(!isContacted);
    // const newTecnologies = [...tecnologies, 'REACT'];
    // setTecnologies(newTecnologies);
    // setTecnologies([...tecnologies, 'REACT']);
    // console.log(newTecnologies)
    setAddress({...address, street:'calle nueva', number:456});
  }

  // console.log(address)
 
  return (
    <div className="card">
      <img className="image" src={image} alt={firstName} />
      <h2 className="name">{firstName}</h2>
      <p className="description">{email}</p>
      <button id={id} onClick={() => handleClick()}>
        {
          isContacted ? 'Contactado' : 'Contactar'
        }
      </button>
    </div>
  );
};
