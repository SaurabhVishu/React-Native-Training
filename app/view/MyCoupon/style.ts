import { StyleSheet, Dimensions} from "react-native";
import { color } from "react-native-reanimated";
import { COLORS, FONTS } from '../../config/constants/theme';
let {height,width}=Dimensions.get('window')
const styles=StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:COLORS.white,
        padding:15,
    },
    btnContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginVertical:10,
    },
    availableBtn:{
        backgroundColor:COLORS.lightOrange3,
         padding:5,
        borderRadius:12,
        width:width*0.48,
        alignItems:"center",
        justifyContent:"center"
    },
    availableTxt:{
        ...FONTS.h3,
         color:COLORS.primary,
         padding:5,
        
         
    },
    usedBtn:{
        backgroundColor:COLORS.lightOrange3,
         width:160,
         borderRadius:12,
         justifyContent:"center",
         alignItems:"center"
        
    },
    renderContainer:{
        backgroundColor:COLORS.lightGray1,
        padding:3,
        borderRadius:10,
        flexDirection:"row",
        // justifyContent:"center"
        alignItems:"center"

    },
    itemSep:{
        marginVertical:5
    },
    icon:{
        height:65,
        width:65,
        resizeMode:"contain",
        marginHorizontal:18
    },
    line:{
        height:100,
        borderLeftWidth:3,
           borderColor:"white",
        // backgroundColor:"red",
        borderStyle:"dotted",
        marginRight:15
    },
    title:{
        ...FONTS.h3,
        color:COLORS.darkGray
    },
    Subtitle:{
        ...FONTS.h2,
        color:COLORS.black
    },
    valid:{
        fontSize:15,
        color:COLORS.darkGray
    },
    titleContainer:{
        marginHorizontal:15
    },
    rightHalfCircle:{
        height: 30,
        width: 30,
        backgroundColor: 'white',
        borderRadius:90,
        right: -width*.09,
 
    },
    leftHalfCirce:{
        height: 30,
        width: 30,
        backgroundColor: 'white',
        borderRadius: 90,
        left: -width*.05,
      },
      title_CircleContainer:{
        justifyContent: 'space-between', flexDirection: 'row'
      },



})
export default styles