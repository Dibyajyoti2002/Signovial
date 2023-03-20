import React from "react";
import Hframe from "./headerframe/Hframe";
import Lframe from "./lowerframe/Lframe";

function Cframe(){
    return(
        <div className="cframe">
            <Hframe />
            <Lframe />
        </div>
    );
}

export default Cframe;