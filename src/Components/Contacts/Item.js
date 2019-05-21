
import React from 'react'; 
import styles from '../Contacts/Item.module.scss'

const Item = ({name, phoneNumber, description,id})=>{ 


    return ( 
   <>
      <li className={styles.wrapper}>
          <h1>Name: {name}</h1>
          <h2>Phone Number: {phoneNumber}</h2>
          <p> Description: {description}</p>
      </li>
      </>

    )
}









export default Item; 