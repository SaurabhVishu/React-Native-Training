import React, { useState } from "react";
import { View } from "react-native";
import SignInScreen from "../view/SignInScreen";


interface InputProp {
    navigation: any
}


const SignInModel = (props: InputProp) => {

    const { navigation } = props
    const [isEnabled, setIsEnabled] = useState(false);
    return (

        <SignInScreen navigation={navigation}
            isEnabled={isEnabled}
            setIsEnabled={setIsEnabled}
        />
    )
}
export default SignInModel;