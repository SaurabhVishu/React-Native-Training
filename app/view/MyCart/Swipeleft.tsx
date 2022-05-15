import React from "react"
import{View,Text,SafeAreaView,TouchableOpacity,Image } from "react-native"
import { icons } from "../../config/constants"
import styles from "./style"




const Swipeleft =({index,onPress}:any)=>{
    return(
        <View style={styles.swipeView}>
        <TouchableOpacity 
        onPress={()=>onPress()}
        >
          <Image source={icons.delete_icon} style={styles.deleteIcon} />
        </TouchableOpacity>
      </View>
    )
}

export default Swipeleft