import { StyleSheet, Dimensions, ImageBackground } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../config/constants/theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        padding: 15,
        //backgroundColor:"red"
    },
    ViewCard: {
        backgroundColor: "red",
    },
    countContainer:{
        backgroundColor: 'orange',
              borderRadius: 5,
              paddingHorizontal: 3,
              marginLeft: 5,
              bottom:5
    },
    count:{
        fontSize:14,
        color:COLORS.white
        
    },
    styleHeader: {
        // flex:0.2,
        backgroundColor: COLORS.lightGray2,
        height: Dimensions.get('screen').height * 0.25,
        borderRadius: SIZES.radius,

    },
    Topcard: {
        flexDirection: "row",
        justifyContent: "space-between",
       // padding: 5,
    },
    calories: {
        height: 35,
        width: 35,
    },
    favourite: {
        height: 25,
        width: 25,
        tintColor:"red",
        marginHorizontal:10,
        marginTop:10
    },
    text: {
        color: COLORS.darkGray,
        ...FONTS.body4
    },
    hamburger: {
        height: "85%",
        width: "55%",
        resizeMode: "contain",
        //marginTop:10
    },
    bugerContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    upeerLeft: {
        flexDirection: "row",
        marginTop:8
    },
    title: {
        ...FONTS.h2,
        color: COLORS.black,
        marginVertical: 10,

    },
    description: {
        ...FONTS.body3,
        color: COLORS.darkGray2
    },
    DeatailCont: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10,
    },
    starCont: {
        flexDirection: "row",
        backgroundColor: COLORS.primary,
        borderRadius: 5,
        padding: 5,


    },
    star: {
        height: 20,
        width: 20,
        resizeMode:"contain"
    },
    startxt: {
        ...FONTS.h3,
        color: "white",
        marginLeft: 10,
    },
    clock: {
        height: 25,
        width: 25,
    },
    t3: {
        ...FONTS.h3,
        color: COLORS.black,
    },
    dollor: {
        height: 25,
        width: 25,
    },
    sizesContainer: {
        flexDirection: "row",
          justifyContent: "space-between",
        alignItems: "center",
        // marginTop:5,

    },
    renderItem: {
         paddingVertical: 10,
         paddingHorizontal:12,
        borderRadius: 12,
        // borderWidth: 1,
        backgroundColor:COLORS.primary,
        // borderColor:COLORS.darkGray2,
        justifyContent:"center",
        alignItems:"center"
        

    },
    renderText:{
        ...FONTS.body2,
        // textAlignVertical:"center"
        // marginVertical:10,
        // color:COLORS.white
    },
    renderTextoff:{
         ...FONTS.body2,
        color:COLORS.lightGray1
    },
    toggle: {
        // padding: 10,
        paddingVertical: 10,
         paddingHorizontal:12,
        borderWidth: 1,
        borderRadius: 12,
        borderColor:COLORS.lightGray1,



    },
    itemSep:{
        margin:5,
    },
    ratingCont:{
        alignItems:'center',
        // backgroundColor:"yellow",
        marginVertical:15,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor:COLORS.lightGray1,
        flexDirection:"row",
    },
    profile:{
        height:40,
        width:43,
        borderRadius:SIZES.radius,
         marginVertical:5,
    },
    ratingTextCon:{
      margin:10,
    },
    profileCon:{
        flexDirection:"row",
    },
    starSize:{height:20,
        width:20,
        tintColor:"orange"
    },
    addbtn:{
        padding:10,
        flexDirection:"row",
        backgroundColor:COLORS.lightGray2,
        justifyContent:"space-around",
        // backgroundColor:"red",
        height:"100%",
        alignItems:'center',
        width:"40%",
        borderRadius:SIZES.radius

    },
    one:{
        ...FONTS.h2,
        color:"black",
    },
    pricebtn:{
        padding:15,
        flexDirection:"row",
        backgroundColor:COLORS.primary,
        // height:"100%",
        // width:"50%",
        borderRadius:SIZES.radius,
        justifyContent:"space-between",
        alignItems:"center"
    
    },
    btmBtnCont:{
        flexDirection:"row",
    //height:"10%",
    justifyContent:"space-between",
    alignItems:"center"
},
headerText:{
    ...FONTS.h2,
    color:COLORS.black
},
headerContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginBottom:15
},
headerIconCont:{
    backgroundColor:COLORS.white,
    padding:5,
    borderRadius:10,
    borderWidth:2,
    //spaddingHorizontal:10,
    borderColor:COLORS.lightGray2
    
    
},
cartIconContainer:{
    backgroundColor:COLORS.white,
    padding:5,
    borderRadius:10,
    //borderWidth:2,
    paddingHorizontal:10,
    borderColor:COLORS.lightGray2,
    
},
headerIcon:{
    height: 25,
    width: 25,
    //position:"absolute"
},

cartIcon:{
    height: 25,
    width: 25,
    position:"absolute",
    //resizeMode:"stretch"
},






})

export default styles