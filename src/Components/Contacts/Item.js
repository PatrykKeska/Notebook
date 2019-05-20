
import React from 'react'; 
import styles from '../Contacts/Contacts'

const Item = ({name, phoneNumber, description,id})=>{ 


    return ( 
   <>
      <li>
          <h1>{name}</h1>
          <h2>{phoneNumber}</h2>
          <p>{description}</p>
      </li>
      </>

    )
}









export default Item; 