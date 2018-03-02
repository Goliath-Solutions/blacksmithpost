import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from 'react';




class Header extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      viewState:'weaponForm'
    }


  }




  render(){
    return (
      <div className="container">
        <nav className="navbar navbar-expand navbar-light bg-light">
        <a className="navbar-brand" href="#"></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <button className="btn btn-outline-primary" onClick={() => this.buyItem()}>Browse</button>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-primary" onClick={() => this.sellWeap()}>Sell</button>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
        </div>
        </nav>
      </div>
    )
  }
}

export default Header;