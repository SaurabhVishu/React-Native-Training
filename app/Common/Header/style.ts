import { StyleSheet } from "react-native";
import { COLORS,FONTS } from '../../config/constants/theme';

const styles=StyleSheet.create({
    headerContainer:{
        flexDirection:"row",
         justifyContent:"space-between",
        marginBottom:15
    },
    headerIconCont:{
        backgroundColor:COLORS.white,
         padding:5,
        borderRadius:10,
        borderWidth:1,
        borderColor:COLORS.lightGray2,
    
        
    },
    headerIcon:{
        height: 25,
        width: 25,
        resizeMode:"contain"
    },
    headerText:{
    ...FONTS.h2,
        color:COLORS.black,
        textAlignVertical:"center",
    },
    

    

})
export default styles