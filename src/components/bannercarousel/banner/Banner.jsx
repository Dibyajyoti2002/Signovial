import React from "react";
import Iframe from "./imageframe/Iframe";
import Cframe from "./centreframe/Cframe";


function Banner(props){
    return(
        <div className="banner" style={{backgroundColor:props.color , transform:props.deg , borderRadius:props.rad}}>
        <Iframe />
        <Cframe />
        </div>
    )
}


export default Banner;