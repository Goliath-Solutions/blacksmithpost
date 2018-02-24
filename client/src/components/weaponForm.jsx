import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from 'react';
import $ from 'jquery';


class WeaponForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      type: '',
      description:'',
      cost: '',
      email:'',
      condition:'',
      blacksmith:'',
      material:'',
      image:'',
    };

  }


  change(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit() {


    var weaponData = {
      type: this.state.type,
      description:this.state.description,
      cost: this.state.cost,
      email:this.state.email,
      condition:this.state.condition,
      blacksmith:this.state.blacksmith,
      material:this.state.material,
      image:this.state.image,
    }

    $.ajax({
      url: '/api/weaponForm',
 //     dataType: 'json',
      type: 'POST',
      data: weaponData,
      success: function(data) {
          alert("your weapon post is now live")
      },
      error: function(err){
        console.log('errror in ajax', err);
      }
    });

  };


    render () {
      return (
        <div className="WeaponForm">
          <h1>weaponForm</h1>
          <form>
        <label>
          Weapon Name:
          <input
            name="type"
            type="string"
            value={this.state.type}
            onChange={e => this.change(e)} />
        </label>
        <br />
        <label>
          Weapon Description:
          <input
            name="description"
            type="string"
            value={this.state.description}
            onChange={e => this.change(e)} />
        </label>
        <br />
        <label>
          Weapon Price:
          <input
            name="cost"
            type="number"
            value={this.state.cost}
            onChange={e => this.change(e)} />
        </label>
        <br />
        <label>
          Weapon Condition:
          <input
            name="condition"
            type="string"
            value={this.state.condition}
            onChange={e => this.change(e)} />
        </label>
        <br />
        <label>
          Blacksmith:
          <input
            name="blacksmith"
            type="string"
            value={this.state.blacksmith}
            onChange={e => this.change(e)} />
        </label>
        <br />
        <label>
          Material:
          <input
            name="material"
            type="string"
            value={this.state.material}
            onChange={e => this.change(e)} />
        </label>
        <br />
        <label>
          Image:
          <input
            name="image"
            type="string"
            value={this.state.image}
            onChange={e => this.change(e)} />
        </label>
        <br />

        <label>
          Seller Email:
          <input
            name="email"
            type="string"
            value={this.state.email}
            onChange={e => this.change(e)} />
        </label>
        <br />
        List Weapon button:
          <button onClick={() => this.onSubmit()}>List Weapon</button>
      </form>



        </div>
      );
    };

};



export default WeaponForm;








