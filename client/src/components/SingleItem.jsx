import React from 'react';
import {Component} from 'react';



const SingleItem = ({item}) => (

  <div className="card">
    <img className="card-img-top" src={item.image}/>
    <div className="card-body">
    <h5 className="card-title">{item.type}</h5>
    <h6>{item.price}</h6>
    <p className="card-text">{item.description}</p>
    </div>
  </div>

)

window.SingleItem = SingleItem









