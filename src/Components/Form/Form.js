import React from 'react'
import styles from '../Form/Form.module.scss'
import AppContext from '../../context'
import Button from '../Button/Button';
import Input from '../Form/Input/Input'
import Radio from './RadioInput.js/Radio'

const types = { 
    contact : 'contact', 
    todo : 'todo', 
}


class Form extends React.Component {

    state = {
       activeOption : types.contact , 
       checked : true , 
       value : ' ', 


     
    } 


    handleRadioChange = (type)=>{ 
     this.setState({ 
         activeOption : type
     })
 
    }




    render(){

 const {activeOption,} = this.state; 

    return (

        <AppContext.Consumer>
            {(context)=>(<form onSubmit={context.addItem} 
        className={styles.wrapper}>

<div className={styles.wrapper__radio}>
     <Radio
     id= {types.contact}
     checked={this.state.activeOption ===types.contact}
     handleChange = {()=> this.handleRadioChange(types.contact)}
    
     >
       Contact
     </Radio>


     <Radio
    id = {types.todo}
 checked={this.state.activeOption ===types.todo}
 handleChange = {()=> this.handleRadioChange(types.todo)}
     >
       ToDo
     </Radio>
     </div>

            <Input
                name='name'
                placeholder='name'
                type='text'
                tag = 'input'
              styles='form__input'
            
            />
           {activeOption ===types.contact ?  <Input
                name='phoneNumber'
                placeholder='Phone number'
                type='number'
                tag = 'input'
              styles='form__input'
            /> : null}
            <Input
                name='description'
                placeholder='description...'
                type='text'
                tag = 'textarea'
              styles='form__input'
            />

            <Button type='submit'>Add New Item</Button>
        </form>)}
        
    </AppContext.Consumer>
    )
    }
}


export default Form