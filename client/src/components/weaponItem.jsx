import React from 'react';
import ReactDOM from 'react-dom'
import {Component} from 'react';
import $ from 'jquery';

const weaponList = (props) => {
  const list = props.weapons.map(element => (
    <weaponCard
    src={weapon.image.src}
    name={weapon.name}
    type={waepon.type}
    price={weapon.price}
    />
  ));
  return <div>{list}</div>
}








