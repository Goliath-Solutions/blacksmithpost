import React from 'react';
import ReactDOM from 'react-dom'
import {Component} from 'react';
import $ from 'jquery';

class WeaponView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      weapons: [],
    }


  }
/*
  componentDidMount(){
    $.ajax({
      url: '/api/allWeapons',
      type:'GET',
      dataType: 'json',
      contentType: 'application/json',
      success: function(data) {
          this.setState({weapons : data})
      }.bind(this)
      error: function(err){
        console.log('errror in ajax', err);
      }.bind(this)
    })
  };
*/






   render () {
    return (
        <h1>List of Weapons</h1>
        <ul>
        {this.state.weapons.map(weapon =>
          key={weapon._id}
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src={weapon.image} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">{weapon.name}</h5>
              <p class="card-text">{weapon.description}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">{weapon.cost}</li>
              <li class="list-group-item">{weapon.blacksmith}</li>
            </ul>
            <div class="card-body">
              <a href="#" class="card-link">{weapon.email}</a>
            </div>
          </div>

    )
  }


}




export default WeaponView;
