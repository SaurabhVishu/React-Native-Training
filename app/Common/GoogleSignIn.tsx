import {GoogleSignin} from '@react-native-google-signin/google-signin';

const signIn = async () => {
  GoogleSignin.configure({
    scopes: [],
    webClientId:'742438445557-1923sbuouhle5rb0gsf6l6lorblg8db7.apps.googleusercontent.com',
    offlineAccess: true,
  });
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    console.log('userinfo', userInfo);
  } catch (error) {
    console.log("hiii==>",error);
  }
};

export default signIn;
