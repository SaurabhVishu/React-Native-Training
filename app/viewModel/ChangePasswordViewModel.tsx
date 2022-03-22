import React from "react";
import ChangePassword from "../view/ChangePassword";

interface InputProp{
    navigation:any
}

const ChangePasswordModel=(props:InputProp)=>{
    const{navigation}=props
    return(
        <ChangePassword
        {...{
            navigation
        }}
        
        />
    )
}

export default ChangePasswordModel