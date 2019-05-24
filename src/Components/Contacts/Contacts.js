import React from 'react'
import styles from '../Contacts/Contacts.module.scss'
import Item from './Item'

const Contacts = ({data}) => {
   

    return (
<>

        <section className={styles.wrapper}>
  {/* <ul>
     {data.map(item => ( 
         <Item 
         key={item.id}
         name = {item.name}
         phoneNumber = {item.phoneNumber}
         description = {item.description}
     
         />
     ))}
  </ul> */}
     </section>

     </>
    )
}


export default Contacts