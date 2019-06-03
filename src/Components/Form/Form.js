import React from 'react'
import styles from '../Form/Form.module.scss'
import AppContext from '../../context'
import Button from '../Button/Button';
import Input from '../Form/Input/Input'
import Radio from './RadioInput.js/Radio'

const types = { 
    contacts : 'contacts', 
    todo : 'todo', 
}


class Form extends React.Component {

    state = {
        name : '',
        phoneNumber : '', 
        description : '', 
       activeOption : types.contacts , 


     
    } 


    handleRadioChange = (type)=>{ 
     this.setState({ 
         activeOption : type
     })
 
    }


handleInputChange=(e) =>{ 
    this.setState({ 
    [e.target.name] : e.target.value , 
    })
}





    render(){

 const {activeOption,} = this.state; 


    return (

        <AppContext.Consumer>
            {(context)=>(<form onSubmit={(e)=>(context.addItem(e,this.state))} 
        className={styles.wrapper}>

<div className={styles.wrapper__radio}>
     <Radio
     id= {types.contacts}
     checked={this.state.activeOption ===types.contacts}
     handleChange = {()=> this.handleRadioChange(types.contacts)}
    
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
              value = {this.state.name}
              onChange={this.handleInputChange}
            
            />
           {activeOption ===types.contacts ?  <Input
                name='phoneNumber'
                placeholder='Phone number'
                type='number'
                tag = 'input'
              styles='form__input'
              value={this.state.phoneNumber}
              onChange={this.handleInputChange}
            /> : null}

            <Input
                name='description'
                placeholder='description...'
                type='text'
                tag = 'textarea'
              styles='form__input'
              value={this.state.description}
              onChange={this.handleInputChange}
            />

            <Button type='submit'>Add New Item</Button>
        </form>)}
        
    </AppContext.Consumer>
    )
    }
}


export default Form