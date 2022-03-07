import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../config/constants/theme';

export default StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: COLORS.primary,
    padding: 15,
    justifyContent: 'space-between',
  },
  profileicon: {
    height: 50,
    width: 50,
    borderRadius: 12,
  },
  cross:{
    tintColor: 'white', 
    height: 35,
     width: 35
  },
  ProfileContainer: {
    flexDirection: 'row',
    marginVertical: 5,
    alignItems: 'center',
  },
  byProgrammerView:{
     marginLeft:10, 
  },
  ByProgrammer: {
    ...FONTS.h3,
    color: 'white',
  },

  ViewProfile: {
    color: COLORS.white,
    fontSize:15
  },
  mapIcon: {
    height: 20,
    width: 20,
  },
  LineSeprator: {
    borderBottomWidth: 1,
    borderColor:COLORS.lightGray1,
    marginVertical: 5,
  },
mapItemView:{

        flexDirection: 'row',
        marginVertical: 5,
        borderRadius: 8,
        padding: 8,
    
},
mapItemViewTrue:{
    flexDirection: 'row',
        marginVertical: 5,
        borderRadius: 8,
        padding: 8,
        backgroundColor:"rgb(226,83,45)"
},
ButtonName:{
    color:COLORS.white2,
    fontSize:16,
    fontWeight:"bold",
    marginLeft:15,
},
mapContainer:{
    marginVertical:10,
},


});
