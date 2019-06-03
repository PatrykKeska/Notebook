import React from 'react'
import styles from '../Contacts/Contacts.module.scss'
import Item from '../../Components/Item/Item'
import AppContext from '../../context'

const Contacts = () => {
   

    return (
<AppContext.Consumer>

{(context)=>(  
    <section className={styles.wrapper}>
    <ul>
       {context.contacts.map(item => ( 
           <Item 
           key={item.name}
           name = {item.name}
           phoneNumber = {item.phoneNumber}
           description = {item.description}
       
           />
       ))}
    </ul>
       </section>
)}
 
 
 
 
 
 
 
 
 
 
 
 
 

     </AppContext.Consumer>
    )
}


export default Contacts