import "./Board.css";

import React    from "react";

import Track    from "./Track";

var Board = () => {
    return (
        <div className="board-container">
            Board
            <Track id="Track One" />
            <Track id="Track Two" />
        </div>
    );
};

export default Board;