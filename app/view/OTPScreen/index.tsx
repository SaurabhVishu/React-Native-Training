import React from "react"
import { View, Text, KeyboardAvoidingView, Platform } from "react-native"
import { TextInput, TouchableOpacity } from "react-native-gesture-handler"
import { HeaderLogo } from "../../Common"
import styles from "./style"

interface InputProp {
    navigation: any
    data:any
    constantButtonData:any
}



const OtpScreen = (props: InputProp) => {
    const { navigation ,data,constantButtonData} = props
    return (
    
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        {/* <View style={styles.container}> */}
            <View>
                <View style={styles.logo}>
                    <HeaderLogo />
                </View>
                <View style={styles.subheadcon}>
                <Text style={styles.Heading}>{data.title}</Text>
                <Text style={styles.subhead}>{data.subtitle}</Text>
                </View>
                <View style={styles.TextinputContainer}>
                    <TextInput style={styles.inputbox} />
                    <TextInput style={styles.inputbox} />
                    <TextInput style={styles.inputbox} />
                    <TextInput style={styles.inputbox} />
                </View>
                <View style={styles.DidntContainer}>
                    <Text style={styles.DidTxt}>{data.didntRCVcode}</Text>
                    <TouchableOpacity>
                        <Text style={styles.Resend}>{constantButtonData.Resend}</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
                <View>
                    <TouchableOpacity
                        style={styles.Button}
                        onPress={()=>navigation.navigate("Home")}
                        >
                        <Text style={styles.continue}>{constantButtonData.continue}</Text>
                    </TouchableOpacity>
                    <Text style={styles.SignMsg}>{data.SignMsg}</Text>
                    <TouchableOpacity>
                        <Text style={styles.Terms}>{constantButtonData.Terms}</Text>
                    </TouchableOpacity>
                </View>
                </KeyboardAvoidingView>

    )
}

export default OtpScreen;