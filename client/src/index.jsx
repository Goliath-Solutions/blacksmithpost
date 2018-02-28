import React from 'react';
import {render} from 'react-dom';
import { Router, Route, browserHistory} from 'react-router'
import WeaponForm from './components/weaponForm.jsx'
import WeaponView from './components/weaponView.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import DeleteWeapon from './components/DeleteWeapon.jsx'

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      weapons:[],
      deleteitem:''
    }
  }



  render () {
    return (
      <div className="App">
        <Header />
        <DeleteWeapon />
        <WeaponForm />

        <Footer />
        <WeaponView />
      </div>
    );
  };
};

//
// set up header
// set up footer
//set up router
//duplicate armor post
//set up view many item page weapon / armor
// set up single view item page weapon /armor
//setup basic login page.

//should all ajax requests be index page can they be on components?





ReactDOM.render(<App/>, document.getElementById('app'));

//routers
//conditinal rendering ,