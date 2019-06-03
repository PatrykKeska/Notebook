
import React from 'react';
import styles from '../ToDo/ToDo.module.scss'

import Item from '../../Components/Item/Item'

const ToDo = ({todo}) => {
    console.log(todo)
    return (


       <section className={styles.wrapper}>
      {todo.map(item=>(
          <Item
          name={item.name}
          description={item.description}
          key={item.description}
          />
      ))}
        
        
            </section>
      
    )
    
}

export default ToDo  