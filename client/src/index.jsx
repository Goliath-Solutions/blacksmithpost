import React from 'react';
import {render} from 'react-dom';
import { Router, Route, browserHistory} from 'react-router'
import WeaponForm from './components/weaponForm.jsx'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      weapons:[]
    }
  }




  render () {
    return (
      <div className="App">
            <h1>Black Smith Post</h1>
        <WeaponForm />

      </div>
    );
  };
};



//should all ajax requests be index page can they be on components?





ReactDOM.render(<App/>, document.getElementById('app'));

//routers
//conditinal rendering ,