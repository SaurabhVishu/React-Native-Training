import React,{useState} from "react"
import {View,Text} from "react-native"
import { dummyData } from "../config/constants"
import NotificationScreen from "../view/Notification"

interface InputProp{
    navigation:any
}

const NotificationModel=(props:InputProp)=>{
    const[isEnabled,setIsEnabled]=useState(false)
    const {navigation}=props;
    return(
       <NotificationScreen
       {...{
           navigation,
         data: dummyData.ScreenData.NotificationScreen,
         isEnabled,
         setIsEnabled,
       }}
       /> 
    )
}
export default NotificationModel