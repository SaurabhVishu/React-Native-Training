import React, { useState } from "react"
import { View, Text, Image } from "react-native"
import { TextInput, TouchableOpacity } from "react-native-gesture-handler"
import { HeaderLogo } from "../../Common"
import { constants, dummyData, icons } from "../../config/constants"
import styles from "./style"



interface InputProp {
    navigation: any,
    isEnabled: boolean,
    setIsEnabled: any
}


const SignUpScreen = (props: InputProp) => {
    const { navigation, isEnabled, setIsEnabled } = props

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.logo}>
                    <HeaderLogo />
                </View>

                <Text style={styles.Heading}>{dummyData.ScreenData.signUp.title}</Text>
                <Text style={styles.subhead}>{dummyData.ScreenData.signUp.subtitle}</Text>

                <View style={styles.inputContainer}>
                    <Text style={styles.emailtxt} >{constants.Form.Email}</Text>
                    <View style={styles.textinputcont}>
                        <TextInput
                            placeholder={constants.Form.EmailPlaceholder}
                            style={styles.emailTextInput}
                        />

                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.emailtxt} >{constants.Form.Username}</Text>
                    <View style={styles.textinputcont}>
                        <TextInput
                            placeholder={constants.Form.Uplaceholder}
                            style={styles.emailTextInput}
                        />
                    </View>
                </View>
                <View style={styles.inputContainer}>

                    <Text style={styles.Paswd}>{constants.Form.Password}</Text>
                    <View style={styles.textinputcont}>
                        <TextInput
                            placeholder={constants.Form.PasswordPlaceholder}
                            style={styles.emailTextInput}
                        />
                        <TouchableOpacity>
                            <Image source={icons.eye} style={styles.eyeIcon} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.SignInCon}>
                    <TouchableOpacity
                        style={styles.Button}>
                        <Text style={styles.signinTxt}>{constants.Button.Signup}</Text>
                    </TouchableOpacity>

                    <View style={styles.Signuptext}>
                        <Text style={styles.donthaveAc} >{dummyData.ScreenData.signUp.AlreadyHaveAc}</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                            <Text style={styles.SignUpBtn}>{constants.Button.Sign}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View>
                <View >
                    <TouchableOpacity
                        style={styles.FbButton}>
                        <Image source={icons.fb} style={styles.fbIcon}></Image>
                        <Text style={styles.fbBtnTxt}>{constants.Button.FbBtn}</Text>
                    </TouchableOpacity>


                    <TouchableOpacity
                        style={styles.GglBtn}>
                        <Image source={icons.google} style={styles.GglIcon}></Image>
                        <Text style={styles.GglBtnTxt}>{constants.Button.GglBtn}</Text>
                    </TouchableOpacity>

                </View>
            </View>




        </View>

    )
}


export default SignUpScreen;