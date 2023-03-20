import React from "react";
import Button1 from "./Button1";
import Button2 from "./Button2";

function But_frame(props) {
  return (
    <div className="bframe">
        <Button1 value={props.value} setValue={props.setValue}/>
        <Button2 />
    </div>
  );
}


export default But_frame;