import React from "react";
import Circle from "./Circle";

function Bac(props) {
    return (
        <div className="bac" style={{order:props.order}}>
        <Circle />
        </div>
    );
    }


export default Bac;