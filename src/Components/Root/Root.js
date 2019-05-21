import React from 'react';
import '../Root/Root.css'
import Navigation from '../Navigation/Navigation'
import Header from '../Header/Header'
import Contacts from '../Contacts/Contacts'
import ToDo from '../ToDo/ToDo'
import Modal from '../Modal/Modal'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


class Root extends React.Component{
state={ 
  initial : [

    {name : 'Patryk',
     phoneNumber : 12121212, 
     description : 'description for contact',
     id : 0, 
  },
    {name : 'Kinga',
     phoneNumber : 121312312, 
     description : 'description for contact',
     id :1, 
  },

  ], 

 isModalOpen : false, 
}


handleSubmit = (e)=>{ 
  e.preventDefault(); 

  const newItem = { 
      name : e.target[0].value, 
      phoneNumber : e.target[1].value, 
      description : e.target[2].value, 
      id: this.state.initial.length, 
  }



 this.setState({ 
  initial : [...this.state.initial, newItem]
 })

 e.target.reset()
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
  
  return (
    <BrowserRouter>
      <>
        <Navigation  openModal = {this.openModal} />
        {isModalOpen ? <Modal handleSubmit={this.handleSubmit} closeModal = {this.closeModal}/> : null}

        <Switch>
          <Route exact path='/' component={Header} />
          <Route path='/Contacts'
          render ={(props) => (<Contacts {...props} data={this.state.initial} />)}
          />

          <Route path='/ToDo' component={ToDo} />
        </Switch>
      </>

    </BrowserRouter>
  );
}
}

export default Root;