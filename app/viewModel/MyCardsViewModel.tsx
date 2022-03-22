import React from "react";
import {View} from "react-native"
import { dummyData } from "../config/constants";
import MyCardScreen from "../view/MyCards";




interface Inputprop{
    navigation:any
}

const MycardModel=(props:Inputprop)=>{
    const{navigation}=props

    return(

        <MyCardScreen
        {...{
            navigation,
            myCard:dummyData.myCards,
            allCard:dummyData.allCards
        }}
        
        
        />
    )
}
export default MycardModel