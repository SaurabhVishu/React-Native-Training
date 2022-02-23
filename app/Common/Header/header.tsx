import React from "react"
import {View,Text,TouchableOpacity,Image} from "react-native"
import { constants, icons } from "../../config/constants"
import styles from "./style"

const Header=( props:any)=>{
    // console.log(props)
    return(
     <View>
         <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.headerIconCont} >
                    <Image source={props.leftIcon} style={styles.headerIcon} />
                </TouchableOpacity>
                <Text style={styles.headerText} >{props.name}</Text>
                <TouchableOpacity style={props.rytIcon==undefined? null:styles.headerIconCont}>
                    <Image source={props.rytIcon} 
                     style={styles.headerIcon} />
                </TouchableOpacity>
            </View>
     </View>
    )
}

export default Header