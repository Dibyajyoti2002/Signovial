import React from "react";
import Text_frame from "./Textframe";
import Form from "./form/Form";
import But_frame from "./framebut/But_frame";


function Signsecond(props) {
    return (
        <div className="signsecond">
        <Text_frame />
        <Form />
        <But_frame value={props.value} setValue={props.setValue}/>
        </div>
    );
}


export default Signsecond;