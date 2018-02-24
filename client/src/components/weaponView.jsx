import React from 'react';
import ReactDOM from 'react-dom'
import {Component} from 'react';
import $ from 'jquery';

class WeaponView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      weapons: [],
      isLoading: false,
      singleView: false,
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
  componentDidMount(){
    this.setState({isLoading: true});

    fetch('/api/allWeapons')
    .then(response => response.json())
    .then(data => this.setState({ weapons: data, isloading:false}));
  }






   render () {
    return (
      <div className = "bigView">
        <h1>List of Weapons</h1>
        <ul>
        {this.state.weapons.map(weapon =>
          <li key={weapon._id}>
            <b>type:</b>   {weapon.type}
            <b>price:</b>   {weapon.cost}
            <b>blacksmith:</b>   {weapon.blacksmith}
            <b>description:</b>   {weapon.description} </li>)}
        </ul>

      </div>
    )
  }


}




export default WeaponView;
