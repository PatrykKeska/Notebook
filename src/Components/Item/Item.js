
import React from 'react'; 
import styles from '../Item/Item.module.scss'
import Button from '../Button/Button'

const Item = ({name, phoneNumber, description, ...props })=>{ 


    return ( 
   <>
   {phoneNumber? ( <li 
     {...props}
      className={styles.wrapper}>
          <h1>Name: {name}</h1>
          <h2>Phone Number: {phoneNumber}</h2>
          <p> Description: {description}</p>
      </li>) : (  <li 
     {...props}
      className={styles.wrapper}>
       <Button>Remove</Button>
          <div className={styles.wrapper__div}>
          <h1>Name: {name}</h1>
          <p> Description: {description}</p>
          </div>
      </li>)}
     
      </>

    )
}









export default Item; 