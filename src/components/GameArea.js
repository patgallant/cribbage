import "./GameArea.css";

import React        from "react";

import Deck         from "./Deck";
import FaceUpCard   from "./FaceUpCard";
import Board        from "./Board";

var GameArea = () => {
    return (
        <div className="game-area-container">
            <Deck />
            <FaceUpCard />
            <Board />
        </div>
    );
};

export default GameArea;