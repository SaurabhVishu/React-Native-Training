import { StyleSheet } from "react-native";
import { COLORS ,FONTS} from '../../config/constants/theme';

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:COLORS.white,
        padding:15,
    
    },
    CardCont:{
          backgroundColor:COLORS.lightGray2,
          flexDirection:"row",
          padding:12,
          justifyContent:"space-between",
          marginVertical:10,
          borderRadius:12,
          alignItems:"center",
    },
    notificationIcon:{
        height:25,
        width:25,
        tintColor:COLORS.primary,
        alignSelf:"center",
        resizeMode:"contain"
    },
    heading:{
    ...FONTS.h3,
    color:"black",
    },
    subheading:{
        ...FONTS.body4,
        color:COLORS.gray
    },
    

})
export default styles