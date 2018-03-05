import React from 'react';
import {Component} from 'react';



const SingleItem = ({item}) => (

  <div className="card" style={{flex: 1, minWidth:300, maxWidth:400}}>
    <img className="card-img-top" src={item.image} alt="Card image cap" />
    <div className="card-body">
    <h5 className="card-title">{item.type} { item.cost}</h5>
    <p className="card-text">{item.description}</p>
    </div>
  </div>

)

window.SingleItem = SingleItem



