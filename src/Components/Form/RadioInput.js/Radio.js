 
 import React from 'react';
 import styles from '../RadioInput.js/Radio.module.scss'

 const Radio = ({children, checked, handleChange,id })=>{ 

    return ( 

        <>
         <label className={styles.wrapper}>
           <input  
           type="radio"
           checked= {checked}
           className={styles.input}
           onChange={handleChange}
           id = {id}

           
           />
           {children}
         </label>

        </>
    )
 }


 export default Radio ; 