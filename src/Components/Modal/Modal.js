import React from 'react';
import styles from '../Modal/Modal.module.scss'
import Button from '../Button/Button'

const Modal = (props) => {

    return (
        <div className={styles.wrapper}>

        {/* <button onClick={props.handleClose}>Close</button> */}
  
 <Button onClick={props.closeModal}>Close</Button> 

        </div>

    )
}



export default Modal