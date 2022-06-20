import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../config/constants';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15,
  },
  crossimageconatainer: {
    borderWidth: .5,
    borderRadius: 5,
    padding: 5,
    borderColor: COLORS.lightGray1
},
searchcontainer:{
  marginBottom:20
},
filterItemContainer:{
  flexDirection:"row",
  justifyContent:"space-between",
  marginVertical:10
},
filterItem:{
  fontSize: 18,
  fontWeight: 'bold',
  color: 'black',
  marginTop: 10,
},
cancelFilter:{
  fontSize: 18,
            fontWeight: 'bold',
            color: 'red',
            marginTop: 10,

},
cancel:{
  height:20,
  width:20,
  resizeMode:"contain",
  tintColor:"black"
  //marginRight:5,
},
starIcon:{
  height:25,
  width:25,
  resizeMode:"contain",
  marginHorizontal:8,
  tintColor:COLORS.gray
},
activeStarIcon:{
  height:25,
  width:25,
  resizeMode:"contain",
  marginHorizontal:8,
  tintColor:COLORS.primary
},
filterButtonText:{
  color: "white",
  fontSize: 18,
  fontWeight: "bold"
},
filterButton:{
  fontSize: 20,
  backgroundColor: COLORS.primary,
  padding: 2,
  borderRadius: 10,
  paddingVertical: 15,
  alignItems: "center",
},
rateText:{
  fontSize:16,
  fontWeight:"300",

},

activeStyle: {
  backgroundColor: COLORS.primary,
  borderRadius: 10,
  width: "30%"
},
inactiveStyle: {
  borderColor: COLORS.gray2,
  borderWidth: 1,
  borderRadius: 10,
  width: "30%",
  backgroundColor:COLORS.lightGray2,
},
activeTextStyle: {
  color: COLORS.white,
  fontSize: 16,
  padding: 10,
  textAlign: "center"
},
inactiveTextStyle: {
  color: COLORS.gray2,
  fontSize: 16,
  padding: 10,
  textAlign: "center"
},
  searchIcon: {
    height: 20,
    width: 20,
    tintColor: 'black',
    justifyContent: 'center',
  },
  TextinputIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  filterIcon: {
    height: 20,
    width: 20,
    tintColor: 'black',
  },
  TextInputContainer: {
    backgroundColor: COLORS.lightGray2,
    borderRadius: 12,
  },
  Deliveryto: {
    marginVertical: 10,
    color: COLORS.red,
    ...FONTS.body3,
  },
  DownArrow: {
    height: 20,
    width: 20,
    marginHorizontal:10
  },
  modalcross: {
    height: 25,
    width: 25,
    resizeMode: "contain",
    alignSelf: "center",
    tintColor: COLORS.lightGray1
},
  DownArrowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainsmallcontainer:{
flex:1,
  },
  smallcontainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10
},
  description: {
    ...FONTS.h3,
    color: COLORS.black,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  RenderIcon: {
    height: 50,
    width: 50,
    resizeMode:"contain"
  },
  RenderTitle: {
    ...FONTS.body3,
    color: COLORS.darkGray,
    fontWeight: '800',
    marginRight: 5,
  },
  itemSep: {
    margin: 8,
  },
  RenderFirstContainer: {
    marginVertical: 15,
  },
  FirstRenderItemContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.lightGray2,
    borderRadius: 10,
    padding: 5,
    alignItems: 'center',
  },
  TrueFirstRenderItemContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    padding: 5,
    alignItems: 'center',
    justifyContent:"center"
  },
  TrueRenderTitle: {
    ...FONTS.body3,
    color: COLORS.white,
    fontWeight: '800',
    marginRight: 5,
  },
  PopularTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    alignItems:"center"
  },
  RendersecondContainer: {
     backgroundColor: COLORS.lightGray2,
    borderRadius: 12,
    width:Dimensions.get('window').width*0.5,
    padding:10,
    
  },
  uperRenderView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },
  customtipsBarStyle: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: 'row',
    marginTop: 5,

},
  caloriesView: {
    flexDirection: 'row',
    alignSelf:"center"
    // backgroundColor:"yellow"
  },
  caloriesIcon: {
    height: 30,
    width: 30,
    resizeMode:"contain"
  },
  caloriesText: {
    fontSize: 12,
    color: COLORS.darkGray,
  },
  RenImageContainer: {
    alignItems: 'center',
   // marginVertical: 5,
  },

  RenderSecondImage: {
    height: 140,
    width: 120,
    resizeMode:"contain",
   // backgroundColor:"red",

  },
  price: {
    color: COLORS.black,
    ...FONTS.h3,
  },
  itemDescription: {
    color: COLORS.darkGray,
  },
  Favourite: {
    height: 25,
    width: 25,
    resizeMode:'contain'
    // tintColor:"red"
  },
  TrueLove: {
    height: 25,
    width: 25,
    tintColor: 'red',
  },
  RecommendedContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:"center",
    marginVertical: 5,
  },
  map:{
    marginLeft:5,
    marginRight:12
  },
  mapContainer:{
    
    flexDirection:"row",
    marginVertical:10,
    
  },
  modalView: {
    flex: 1,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    backgroundColor: COLORS.white2,
    padding: 20,
    justifyContent: "space-between"

},
modalTextcontainer: {
    flexDirection: "row",

    justifyContent: "space-between"
},
distancecontainer: {
    marginVertical: 10
},
modalText: {
    fontSize: 22,
    color: COLORS.black,
    fontWeight: "600",

},
ModalSubText: {
    fontSize: 18,
    color: COLORS.black,
    fontWeight: "bold",

},
ratingContainer:{
  //backgroundColor:"yellow",
  flexDirection:"row",
  margin:5
},

ModalTextSeperator: {
    borderWidth: .5,
    borderColor: COLORS.gray2,
    width: "100%",
    marginVertical: 10
},
rateButton:{
  flexDirection:"row",
  paddingVertical:10,
  backgroundColor:COLORS.lightGray2,
  margin:10,
  justifyContent:"center",
  alignItems:"center",
  borderRadius:9,
  paddingHorizontal:10,
  borderWidth:2,
  borderColor:COLORS.lightGray1
},
view: { flex: .3, backgroundColor: "rgba(0,0,0,0.2)" },
});
export default styles;
