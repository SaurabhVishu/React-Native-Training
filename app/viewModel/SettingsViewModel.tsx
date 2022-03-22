import React from "react";
import { dummyData } from "../config/constants";
import SettingsScreen from "../view/Settings";

interface Inputprop{
    navigation:any
}

const SettingsModel=(props:Inputprop)=>{
    const{navigation}=props
    return(
    <SettingsScreen
    {...{
        navigation,
        data:dummyData.Settings
    }}
    />
    )
}
export default SettingsModel