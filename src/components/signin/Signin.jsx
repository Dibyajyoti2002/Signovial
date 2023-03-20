import React from "react";
import Finaltext from "./Finaltext";
import Codeframe from "./commands/codeframe/Codeframe";
import Buttonframe from "./commands/Buttonframe";

function Signin() {
    return (
        <div className="signin">
            <Finaltext />
            <Codeframe />
            <Buttonframe />
        </div>
    );
    }


export default Signin;