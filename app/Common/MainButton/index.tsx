import React from "react"
import {View,Text, TouchableOpacity} from "react-native"
import { constants } from "../../config/constants"
import styles from "./style"


const MainButton=( props:any)=>{
    return(
        <TouchableOpacity 
                    style={styles.Button}>
                    <Text style={styles.signinTxt}>{props.name}</Text>
                </TouchableOpacity>

    )
}
export default MainButton