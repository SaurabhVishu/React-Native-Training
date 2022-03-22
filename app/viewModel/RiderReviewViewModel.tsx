import React,{useState} from "react";
import {View,Text} from "react-native"
import { dummyData } from "../config/constants";
import RiderReview from "../view/RiderReview";

interface InputProp{
    navigation:any
}

const RiderRivewModel=( props:InputProp)=>{
    const[selected,setSelected]=useState(0)
    const[rate,setRate]=useState(0)
    const{navigation}=props
    return(
             <RiderReview
             {...{
                 navigation,
                 data:dummyData.ScreenData.RiderRivewScreen,
                 selected,
                 setSelected,
                 rate,
                 setRate
             }}
             
             />
    )
}

export default RiderRivewModel