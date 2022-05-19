import {StyleSheet} from 'react-native';
import {COLORS} from '../../config/constants';
const styles = StyleSheet.create({
  mainConatiner:{
    flex: 1,
     backgroundColor: 'white'
  },
  container: {
    flex: 1,
   
  },
   upperView:{
     padding:15,
   },

  logo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Heading: {
    textAlign: 'center',
    fontSize: 25,
    color: COLORS.black,
    fontWeight: 'bold',
     marginTop: 15,
  },
  subhead: {
    textAlign: 'center',
    fontSize: 20,
    color: COLORS.darkGray,
  },
  emailtxt: {
   // margin: 5,
  },
  textinputcont: {
    backgroundColor: COLORS.lightGray2,
    flexDirection: 'row',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginVertical:5
  },
  emailTextInput: {
  
    width: '100%',
    paddingHorizontal: 10,
  },
  passwordTextInput: {
  
    width: '92%',
    borderRadius: 10,
  },
  suggestionText:{
    color:"red"
  },
  inputContainer: {
    // marginVertical: 5,
    //flexDirection:"row"
  },
  passwordText: {
   // margin: 5,
  },
  eyeIcon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    tintColor:COLORS.gray,
  },
  signuInButton: {
    fontSize: 20,
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 10,
   // paddingVertical: 10,
    alignItems: 'center',
    marginVertical: 5,
  },
  signinTxt: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  Signuptext: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5,
  },
  donthaveAc: {
    textAlign: 'center',
    fontSize: 18,
    color: 'black',
  },
  SignUpBtn: {
    textAlign: 'center',
    fontSize: 18,
    color: COLORS.orange,
    marginLeft: 5,
  },
  FacebookButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: COLORS.blue,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 5,
  },
  fbIcon: {
    height: 25,
    width: 25,
    marginLeft: 5,
  },
  fbBtnTxt: {
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
    marginLeft: 10,
    fontWeight: 'bold',
  },

  googleButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: COLORS.gray3,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 5,
  },
  googleIcon: {
    height: 25,
    width: 25,
    marginLeft: 5,
  },
  GglBtnTxt: {
    textAlign: 'center',
    color: 'black',
    fontSize: 15,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  SignInCon: {
    marginVertical: 15,
  },
});
export default styles;
