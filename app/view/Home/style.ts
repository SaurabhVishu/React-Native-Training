import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../config/constants';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15,
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
  },
  DownArrowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
    paddingHorizontal: 18,
    paddingTop: 15,
    paddingBottom: 5,


    //  flexDirection:"row"
  },
  uperRenderView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  caloriesView: {
    flexDirection: 'row',
  },
  caloriesIcon: {
    height: 35,
    width: 35,
  },
  caloriesText: {
    fontSize: 12,
    color: COLORS.darkGray,
  },
  RenImageContainer: {
    alignItems: 'center',
    marginVertical: 5,
  },

  RenderSecondImage: {
    height: 140,
    width: 120,
  },
  price: {
    color: COLORS.black,
    ...FONTS.h2,
  },
  itemDescription: {
    color: COLORS.darkGray,
  },
  Favourite: {
    height: 25,
    width: 25,
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
    marginLeft:15
  },
  mapContainer:{
    flexDirection:"row",
    
  },
});
export default styles;
