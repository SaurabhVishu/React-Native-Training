import { LoginManager } from "react-native-fbsdk";
 
const FacebookLogin=async()=>{

let result;
try {
  LoginManager.setLoginBehavior('web_only');
  result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
} catch (error) {
LoginManager.setLoginBehavior('web_only');
  result = await LoginManager.logInWithPermissions(['public_profile', 'email'])
}
}

export default FacebookLogin;