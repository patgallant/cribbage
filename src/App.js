import "./App.css";

import React          from "react";
import { Component }  from "react";

import GameArea       from "./components/GameArea";
import PlayerAreas    from "./components/PlayerAreas";

class App extends Component {
  constructor(props) {
    super(props);

    // TODO: Re-tool the state object.  I think this could be modeled better as right now
    // the playerOne and playerTwo objects are being passed to both GameArea and PlayerAreas
    // which seems to violate DRY.
    this.state = {
      playerOne: {
        name: "",
        leadPeg: 0,
        rearPeg: 0,
        hand: [],
        crib: []
      },
      playerTwo: {
        name: "",
        leadPeg: 0,
        rearPeg: 0,
        hand: [],
        crib: []
      },
      game: {
        deck: [],
        faceUpCard: {}
      }
    };
  }

  render() {
    return (
      <div className="App">
        <GameArea 
          game={this.state.game}
          playerOne={this.state.playerOne}
          playerTwo={this.state.playerTwo} />
        <PlayerAreas 
          playerOne={this.state.playerOne}
          playerTwo={this.state.playerTwo} />
      </div>
    );
  }
}

export default App;
