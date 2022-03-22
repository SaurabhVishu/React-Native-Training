import { StyleSheet } from "react-native";
import { COLORS } from '../../config/constants/theme';

const styles=StyleSheet.create({
    mainContainer:{
        flex:1,
        padding:15,
        backgroundColor:"white"
    },
    icon:{
        height:25,
        width:25,
        tintColor:COLORS.primary,
        marginHorizontal:10,
        marginVertical:5

        
    },
    Btn:{
        flexDirection:"row",
         padding:5,
      // marginVertical:5
    },
    mapContainer:{
        backgroundColor:COLORS.lightGray2,
        padding:15,
        borderRadius:12,
        marginVertical:5
    },
    border:{
        borderBottomWidth:2,
        borderColor:COLORS.gray,
        marginTop:12
    
    },
    title:{
        fontSize:15,
        fontWeight:"bold",
        color:COLORS.darkGray,
        marginHorizontal:10,
        marginVertical:5
    },
})
export default styles