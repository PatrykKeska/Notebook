import React from 'react';
import styles from '../Modal/Modal.module.scss'
import Button from '../Button/Button'
import Form from '../Form/Form'

const Modal = (props) => {

    return (
        <div className={styles.wrapper}>
             <Button onClick={props.closeModal}>Close</Button> 
     <Form handleSubmit={props.handleSubmit}/>


        </div>

    )
}



export default Modal