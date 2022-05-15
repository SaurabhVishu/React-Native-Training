import React, { useEffect, useState } from "react"
import {View } from "react-native"
import { constants, dummyData } from "../config/constants"
import OtpScreen from "../view/OTPScreen"





interface InputProp {
    navigation:any
}


const OtpModel = (props: InputProp) => {
    const { navigation } = props
    
    return (

        <OtpScreen
            navigation={navigation}
            data={dummyData.ScreenData.otpScreen}
            constantButtonData={constants.Button}
        />
    )
}

export default OtpModel;