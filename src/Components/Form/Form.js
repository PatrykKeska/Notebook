import React from 'react'
import styles from '../Form/Form.module.scss'
import Button from '../Button/Button';
import Input from '../Form/Input/Input'


class Form extends React.Component {

    state = {
        
    } 
    render(){
    return (
        <form className={styles.wrapper}>

            <Input
                name='name'
                placeholder='name'
                type='text'
                tag = 'input'
            />
            <Input
                name='phoneNumber'
                placeholder='Phone number'
                type='number'
                tag = 'input'
            />
            <Input
                name='description'
                placeholder='description...'
                type='text'
                tag = 'textarea'
            />






            <Button>Add New Item</Button>
        </form>
    )
    }
}


export default Form