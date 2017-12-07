import "./App.css";

import React, { Component } from "react";

import GameArea             from "./components/GameArea";
import PlayerAreas          from "./components/PlayerAreas";

class App extends Component {
  render() {
    return (
      <div className="App">
        <GameArea />
        <PlayerAreas />
      </div>
    );
  }
}

export default App;
