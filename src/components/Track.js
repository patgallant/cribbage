import React    from "react";

import Hole     from "./Hole";

var Track = (props) => {
    let holes = [];
    for (let i = 0; i < 121; i++) {
        holes.push(<Hole />);
    }
    return (
        <div>
            Track: {props.id}
            {holes}
        </div>
    );
};

export default Track;