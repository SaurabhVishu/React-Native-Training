import { StyleSheet, Dimensions } from 'react-native';  
import { COLORS, FONTS } from "../../config/constants";

const styles=StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:"white",
        padding:15
    },
    RiderImage:{
        height:89,
        width:89,
        borderRadius:12,
        
    },
    imageContainer:{
        // justifyContent:"center"
        alignItems:"center",
        marginVertical:10,
        // backgroundColor:"yellow"
    },
    name:{
        ...FONTS.h2,
        color:COLORS.black
    },
    deliveryman:{
        ...FONTS.h3,
        color:COLORS.darkGray
    },
    nameConatiner:{
        alignItems:"center",
        marginVertical:5
    },
    OrderDeliverd:{
        ...FONTS.h3,
        color:COLORS.green,
        textAlign:"center"
    },
    plsRate:{
        alignItems:"center",
        marginVertical:10,
    },
    starContainer:{
        flexDirection:"row",
        marginVertical:5
    },
    starIcon:{
        height:25,
        width:25,
        tintColor:COLORS.orange,
        marginLeft:15
    },
    unSelectedStar:{
        height:25,
        width:25,
        tintColor:COLORS.lightOrange3,
        marginLeft:15
    },
    addTips:{
        ...FONTS.h3,
        color:COLORS.black,
        marginVertical:5,
    },
    TipContainer:{
        flexDirection:"row",
        

    },
    tipdata:{
        marginHorizontal:5,
        // backgroundColor:"yellow",
        padding:10,
        borderRadius:12,
        borderColor:COLORS.lightGray1,
        borderWidth:2
    },
    tiptext:{
        fontSize:15,
        color:COLORS.lightGray1,

    },
    Truetipdata:{
        marginHorizontal:5,
     backgroundColor:COLORS.primary,
        padding:15,
        borderRadius:12,
        borderColor:COLORS.white2,
         borderWidth:2
    },
    cmntBox:{
        backgroundColor:COLORS.lightGray1,
        marginVertical:15,
        borderRadius:12,
        flex:1,
        //justifyContent:"flex-start"
        alignItems:"flex-start",
        height:200
        
        
    },
    SubmitBtn:{
        marginVertical:5
    },


})
export default styles