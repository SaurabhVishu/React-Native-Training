import React, { useState } from "react";
import { View, Text, Image, Button } from "react-native"
import { Switch, TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { HeaderLogo } from "../../Common";
import { constants, dummyData, icons } from "../../config/constants";
import styles from "./style";





interface InputProp {
    navigation: any,
    isEnabled: boolean
    setIsEnabled: any
}

const SignInScreen = (props: InputProp) => {
    const { navigation, isEnabled, setIsEnabled } = props
    return (


        <View style={styles.container}>
            <View>
            <View>
                <View style={styles.logo}>
                    <HeaderLogo />
                </View>

                <Text style={styles.Heading}>{dummyData.ScreenData.signScreen.title}</Text>

                <Text style={styles.subhead}>{dummyData.ScreenData.signScreen.Subtitle}</Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.emailtxt} >{constants.Form.Email}</Text>
                    <View style={styles.textinputcont}>
                        <TextInput
                            placeholder={constants.Form.EmailPlaceholder}
                            style={styles.emailTextInput}
                        />

                    </View >
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
                <View style={styles.TogleBtnCont}>
                    <View style={styles.switchBtn}>
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                        />
                        <Text>{constants.Form.SaveMe}</Text>
                    </View>
                    <View style={styles.fgtBtn}>
                        <TouchableOpacity>
                            <Text>{constants.Button.ForgetPassword}</Text>
                        </TouchableOpacity>

                    </View>
                </View>


                <TouchableOpacity
                    style={styles.Button} onPress={()=>navigation.navigate('Drawer')}>
                    <Text style={styles.signinTxt}>{constants.Button.Sign}</Text>
                </TouchableOpacity>

                <View style={styles.Signuptext}>
                    <Text style={styles.donthaveAc} >{dummyData.ScreenData.signScreen.Donthaveanaccount}</Text>
                    <TouchableOpacity  onPress={() => navigation.navigate('SignUp')}>
                        <Text style={styles.SignUpBtn}>{constants.Button.Signup}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            </View>

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


    )
}

export default SignInScreen;