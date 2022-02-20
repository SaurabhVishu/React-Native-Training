import React from "react"
import { View, Text, Image } from "react-native"
import { TextInput, TouchableOpacity } from "react-native-gesture-handler"
import { HeaderLogo } from "../../Common"
import { constants, icons } from "../../config/constants"
import styles from "./style"

interface InputProp {
    navigation: any
    data: {
        title: string;
        subtitle: string;
    }
    constantFormData: {
        Email: string;
    }
}

const PassRcvScreen = (props: InputProp) => {
    const { navigation, data, constantFormData } = props
    return (

        <View style={styles.container}>
            <View>
                <View style={styles.logo}>
                    <HeaderLogo />
                </View>
                <View style={styles.subheadcon}>
                    <Text style={styles.Heading}>{data.title}</Text>
                    <Text style={styles.subhead}>{data.subtitle}</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.emailtxt} >{constantFormData.Email}</Text>
                    <View style={styles.textinputcont}>
                        <TextInput
                            // placeholder={constantFormData.EmailPlaceholder}
                            style={styles.emailTextInput}
                        />
                        <TouchableOpacity>
                            <Image source={icons.check} style={styles.Icon} />
                        </TouchableOpacity>

                    </View>
                </View>
            </View>

            <View style={styles.SignInCon}>
                <TouchableOpacity
                    style={styles.Button}>
                    <Text style={styles.signinTxt}>{constants.Button.SendEmail}</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
export default PassRcvScreen