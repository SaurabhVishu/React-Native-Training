import React,{useState} from "react"
import {View} from "react-native"
import SignUpScreen from "../view/SignUp";


interface InputProp{
    navigation:any
}


const SignUpModel=(props:InputProp)=>{
    const {navigation} = props
    const [isEnabled, setIsEnabled] = useState(false);

    return(
<SignUpScreen  navigation={navigation}
isEnabled={isEnabled}
setIsEnabled={setIsEnabled}
/>
    )
}
export default SignUpModel;