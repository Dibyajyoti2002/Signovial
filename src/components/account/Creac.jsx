import React from "react";


function Creac({loginCheck,setLogin}) {
  return (
    <div className="ca">
       <h1>Not member ? <span onClick={()=>setLogin(true)} style={{'color': 'rgba(8, 88, 247, 1)'}}>Create account</span></h1>
    </div>
  );
}


export default Creac;
