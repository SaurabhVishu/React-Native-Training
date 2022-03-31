import {StyleSheet} from 'react-native';
import {COLORS} from '../../config/constants/theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 15,
  },
  mapContainer: {
    marginVertical: 5,
    backgroundColor: COLORS.lightGray2,
    padding: 15,
    borderRadius: 12,
  },
  label: {
    fontSize: 15,
    color: COLORS.gray,
    marginVertical: 5,
    fontWeight: 'bold',
  },
  textinputView: {
    backgroundColor: 'white',
    borderRadius: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  btnIcon: {
    height: 20,
    width: 20,
    marginRight: 10,
    tintColor: COLORS.gray,
    position:"absolute",
    right:5,

  },
});
export default styles;
