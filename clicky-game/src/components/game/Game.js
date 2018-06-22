import React, {Component} from 'react';
import data from "../../data.json";
import Cards from "../cards/Cards.js";
import Nav from "../nav/Nav.js";
// import cardValue from "../cards/cardValue.js";

class Game extends Component {
    state = {
        data,
        score:0,
        topScore:0
    }





handleCardClick = ()=> {
    var between1and20 = Math.floor(Math.random()*20);
    var score = between1and20;
    console.log(score);
}



render(){
    return (
        <div>
            <span>SCORE{this.score} </span>
            {this.state.data.map(item =>(
              <Cards
              key={item.id}
              pics = {item.image}
              handleClick={this.handleCardClick}
              />
            )) }
            {this.score}
        </div>

    )
}

}


export default Game;