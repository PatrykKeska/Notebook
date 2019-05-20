import React from 'react'
import styles from '../Form/Form.module.scss'
import Button from '../Button/Button';
import Input from '../Form/Input/Input'


const Form = () => {
    return (
        <form className={styles.wrapper}>

            <Input
                name='name'
                placeholder='name'
                type='text'

            />





            <Button>Add New Item</Button>
        </form>
    )
}


export default Form