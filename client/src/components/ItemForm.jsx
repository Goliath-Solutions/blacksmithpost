import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from 'react';
import $ from 'jquery';


class ItemForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      class:'',
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


    var itemData = {
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
      url: '/api/itemForm',
 //     dataType: 'json',
      type: 'POST',
      data: itemData,
      success: function(data) {
          alert("your post is now live")
      },
      error: function(err){
        console.log('errror in ajax', err);
      }
    });

  };


    render () {
      return (
        <div className="ItemForm">
          <h1>The Black Smith Post</h1>
          <form>
          <div className="form-group">
          <label><h5>Item's Name:</h5></label>
          <input className="form-control"
            name="type"
            type="string"
            value={this.state.type}
            onChange={e => this.change(e)} />
        </div>
        <div className="form-group">
        <label><h5>Description:</h5></label>
          <input className="form-control"
            name="description"
            type="string"
            value={this.state.description}
            onChange={e => this.change(e)} />
        </div>
        <div className="form-group">
        <label><h5>Price:</h5></label>
          <input className="form-control"
            name="cost"
            type="number"
            value={this.state.cost}
            onChange={e => this.change(e)} />
        </div>
        <div className="form-group">
        <label><h5>Condition:</h5></label>
        <input className="form-control"
            name="condition"
            type="string"
            value={this.state.condition}
            onChange={e => this.change(e)} />
        </div>
        <div className="form-group">
          <label><h5>Blacksmith:</h5></label>
          <input className="form-control"
            name="blacksmith"
            type="string"
            value={this.state.blacksmith}
            onChange={e => this.change(e)} />
        </div>
        <div className="form-group">
        <label><h5>Material:</h5></label>
          <input className="form-control"
            name="material"
            type="string"
            value={this.state.material}
            onChange={e => this.change(e)} />
            </div>
        <div className="form-group">
        <label><h5>Seller Email:</h5></label>
          <input className="form-control"
            name="email"
            type="string"
            value={this.state.email}
            onChange={e => this.change(e)} />
        </div>
        <div className="form-group">
        <label><h5>Image URL:</h5></label>
          <input className="form-control"
            name="image"
            type="string"
            value={this.state.image}
            onChange={e => this.change(e)} />
        </div>
        <h4>List thee item my lord:</h4>
        <button className="btn btn-primary btn-lg btn-block" onClick={() => this.onSubmit()}>List Item</button>
      </form>



        </div>
      );
    };

};



export default ItemForm;








