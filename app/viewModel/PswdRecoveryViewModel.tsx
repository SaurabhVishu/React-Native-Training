import React from "react";
import {View} from "react-native"
import { constants, dummyData } from "../config/constants";
import PassRcvScreen from "../view/PasswordRecovery";

interface InputProp{
navigation:any
}


const PassRcvModel=(props:InputProp)=>{
    const {navigation}=props
    return(
      <PassRcvScreen
      navigation={navigation}
      data={dummyData.ScreenData.PswdRcvScreen}
      constantFormData={constants.Form}
      />

    )
}

export default PassRcvModel