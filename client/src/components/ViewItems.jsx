
import React from 'react';
import {Component} from 'react';

var ViewItems = ({items}) => (

  <div className = "card-deck">
    {items.map((item) =>
    <window.SingleItem
    item={item}
    key={item._id} />

    )}

  </div>

);


export default ViewItems;
