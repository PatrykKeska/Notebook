import React from 'react';
import '../Root/Root.css'
import AppContext from '../../context'; 
import Navigation from '../Navigation/Navigation'
import Header from '../Header/Header'
import Contacts from '../Contacts/Contacts'
import ToDo from '../ToDo/ToDo'
import Modal from '../Modal/Modal'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


class Root extends React.Component{
state={ 
items : { 
  contacts : [],
  todo : [], 
} ,

 isModalOpen : false, 
}


handleSubmit = (e)=>{ 
  e.preventDefault(); 

  const newItem = { 
      // name : e.target[0].value, 
      // phoneNumber : e.target[1].value, 
      // description : e.target[2].value, 
      // id: this.state.initial.length, 
   
  }

  console.log('dziala')



//  this.setState({ 
//   initial : [...this.state.initial, newItem]
//  })

//  e.target.reset()
}


closeModal =()=>{ 
  this.setState({ 
    isModalOpen : false, 
  })
}
openModal =()=>{ 

  this.setState({ 
    isModalOpen : true, 
  })
}



  render(){
    const {isModalOpen} = this.state

    const contextElements = { 
      ...this.state,
      addItem : this.handleSubmit, 
              }
  
  return (
    <BrowserRouter>
      <AppContext.Provider value={contextElements}>
        <Navigation  openModal = {this.openModal} />
        {isModalOpen ? <Modal handleSubmit={this.handleSubmit} closeModal = {this.closeModal}/> : null}

        <Switch>
          <Route exact path='/' component={Header} />
          <Route path='/Contacts'
         component={ Contacts} />
          />

          <Route path='/ToDo' component={ToDo} />
        </Switch>
      </AppContext.Provider>

    </BrowserRouter>
  );
}
}

export default Root;