import React from 'react';
import data from "../../data.json"

const Cards = props =>(
   <img src={props.pics}  onClick={props.handleClick}/> 
) 

export default Cards;