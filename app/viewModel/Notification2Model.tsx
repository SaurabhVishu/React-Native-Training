import React from "react";
import {View,Text} from "react-native"
import { dummyData } from "../config/constants";
import Notification2Screen from "../view/Notification2";

interface InputProp{
    navigation:any
}

const Navigation2Model=(props:InputProp)=>{
    const car={
        id:1,
        ...props.navigation
    }
    const{navigation}=props
    return(
        <Notification2Screen
        {...{
            navigation,
            DATA:dummyData.DATA,
        }}
        
        />
    )
}

export default Navigation2Model


