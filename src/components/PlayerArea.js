import React    from "react";

import Hand     from "./Hand";
import Crib     from "./Crib";
import Score    from "./Score";

var PlayerArea = (props) => {
    return (
        <div>
            Player ID: {props.id}
            <Hand />
            <Crib />
            <Score />
        </div>
    );
};

export default PlayerArea;