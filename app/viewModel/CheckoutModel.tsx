import React ,{useState}from "react";
import {View,Text} from "react-native"
import { dummyData } from "../config/constants";
import CheckoutScreen from "../view/Checkout";

interface InputProp{
    navigation:any
}

const CheckoutModel =(props:InputProp)=>{
    const{navigation}=props
    const [modalVisible, setModalVisible] = useState(false);
    return(
<CheckoutScreen
{...{
    navigation,
    myCard:dummyData.myCards,
    text:dummyData.ScreenData.CheckoutScreen,
    modalVisible,
    setModalVisible,
}}
/>

    )
}

export default CheckoutModel