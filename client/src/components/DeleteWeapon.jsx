import React from 'react';
import {Component} from 'react';
import $ from 'jquery';


class DeleteWeapon extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      deleteitem:'',
    }

    this.handleChange = this.handleChange.bind(this);
  }



   handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  onSubmit(event){

    var deleteData = { type: this.state.deleteitem }


    $.ajax({
      url: '/api/deleteWeapon',
      type: 'POST',
      data: deleteData,
      success: function(data) {
          console.log('ajax post to delete sent')
      },
      error: function(err){
        console.log('error', err);
      }
    });


  };


  render () {
    return (
      <div className="DeleteWeapon">
        <form>
        <button onClick={() => this.onSubmit()}>>Delete</button>
        <label>
        <input
        name="deleteitem"
        type="string"
        value={this.state.deleteitem}
        onChange={event => this.handlechange(event)} />
        </label>
        </form>
      </div>
    );
  };
};


export default DeleteWeapon;








