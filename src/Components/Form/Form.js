import React from 'react'
import styles from '../Form/Form.module.scss'
import Button from '../Button/Button';
import Input from '../Form/Input/Input'


class Form extends React.Component {

    state = {
        name : ' ',
        phoneNumber : ' ', 
        description : ' ',
        value : ' ',
     
    } 




    render(){
    return (
        <form onSubmit={this.props.handleSubmit} 
        className={styles.wrapper}>
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

            <Button type='submit'>Add New Item</Button>
        </form>
    )
    }
}


export default Form