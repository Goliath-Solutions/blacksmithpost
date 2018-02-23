import React from 'react';
import ReactDOM from 'react-dom'
import {Component} from 'react';
import $ from 'jquery';

class WeaponView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weapons: []
    }



    if(this.props.weapons){
      singleWeapon = this.props.weapons.map()
    }
  }
/*
  componentWillMount() {

        $.ajax({
      url: '/api/allWeapons',
      type:"GET"
      dataType: 'json',
      contentType: 'application/json',
      success: function(data) {
          this.setState({previous: data})
      }.bind(this),
      error: function(err){
        console.log('errror in ajax', err);
      }
    });
  };


*/





   render () {
    return (
      <div className = "bigView">
        <h1>List of Weapons</h1>
        <p>{this.state.weapons}</p>

      </div>)
  }


}




export default WeaponView;
