import React, {Component} from 'react';
import data from "../../data.json"
import Cards from "../cards/Cards.js"

class Game extends Component {
    state = {
        data,
        score:0,
        topScore:0
    }




handleCardClick = ()=> {
    console.log("item was clicked");
}



render(){
    return (
        <div>
            {this.state.data.map(item =>(
              <Cards
              key={item.id}
              pics = {item.image}
              handleClick={this.handleCardClick}
              />
            )) }
        </div>

    )
}

}


export default Game;