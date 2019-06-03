import React from 'react';
import './Root.css'
import AppContext from '../../context'; 
import Navigation from '../../Components/Navigation/Navigation'
import Header from '../../Components/Header/Header'
import Contacts from '../Contacts/Contacts'
import ToDo from '../ToDo/ToDo'
import Modal from '../../Components/Modal/Modal'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


class Root extends React.Component{
state={ 

  contacts : [
    {
      name : 'patryk',
      phoneNumber : '12345678',
      description : 'description',
    }
  ],
  todo : [
    {
    name : 'example task',
    description : 'example description of todo task ' , 
    } 

  ], 


 isModalOpen : false, 
}


handleSubmit = (e, state)=>{ 
  e.preventDefault(); 

this.setState(prevState=> ({ 
  [state.activeOption] : [...prevState[state.activeOption], state]
}))

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

removeItem = ()=>{ 
  console.log('imgoingtoremove')
}



  render(){
    const {isModalOpen,} = this.state



    const contextElements = { 
      ...this.state,
      addItem : this.handleSubmit,
      removeItem: this.removeItem,
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

          <Route path='/ToDo'
           render={(routeProps)=> ( <ToDo {...routeProps} todo={this.state.todo} /> )}
          />
        </Switch>
      </AppContext.Provider>

    </BrowserRouter>
  );
}
}

export default Root;