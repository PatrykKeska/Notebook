import React from 'react';
import '../Root/Root.css'
import Navigation from '../Navigation/Navigation'
import Header from '../Header/Header'
import Contacts from '../Contacts/Contacts'
import ToDo from '../ToDo/ToDo'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


function Root() {
  return (
    <BrowserRouter>
      <>
        <Navigation />
        <Switch>
          <Route exact path='/' component={Header} />
          <Route path='/Contacts' component={Contacts} />
          <Route path='/ToDo' component={ToDo} />
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default Root;