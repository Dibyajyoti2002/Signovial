import React from "react";

function Button1(props) {
  return (
    <div >
        <button onClick={()=>props.setValue(true)} className="button1">Next</button>
    </div>
  );
}

export default Button1;