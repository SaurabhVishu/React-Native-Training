import React from "react";
import {View,Image,StyleSheet} from "react-native";
import { SIZES } from "../../config/constants";
import styles from "../../view/profileScreen/style";




const HeaderLogo =()=>{
    return(
<View >
    <Image style={{height:SIZES.height*0.1,width:SIZES.width*0.5,resizeMode:"contain"}} source={require('../../assets/images/logo_02.png')}/>
</View>
    )
}

export default HeaderLogo;