import React    from "react";

import Hole     from "./Hole";
import Peg      from "./Peg";

var Track = (props) => {
    let holes = [];
    for (let i = 0; i < 121; i++) {
        holes.push(<Hole />);
    }
    return (
        <div>
            Track: {props.id}
            <Peg />
            <Peg />
            {holes}
        </div>
    );
};

export default Track;