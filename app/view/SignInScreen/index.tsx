import React, {useState} from 'react';
import {View, Text, Image, Button} from 'react-native';
import {
  Switch,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {HeaderLogo} from '../../Common';
import FacebookLogin from '../../Common/fbLogin';
import signIn from '../../Common/GoogleSignIn';
import {COLORS, constants, dummyData, icons} from '../../config/constants';
import styles from './style';

interface InputProp {
  navigation: any;
  isEnabled: boolean;
  setIsEnabled: any;
  setEmail: any;
  email: any;
  setPassword: any;
  Submit: any;
  setRender: any;
  render: any;
  isValidEmail: React.MutableRefObject<boolean>;
  isvalidPassword: React.MutableRefObject<boolean>;
}

const SignInScreen = (props: InputProp) => {
  const toggleSwitch = () =>
    setIsEnabled((previousState: any) => !previousState);
  const {
    navigation,
    isValidEmail,
    isEnabled,
    setIsEnabled,
    setEmail,
    email,
    setPassword,
    isvalidPassword,
    setRender,
    render,
    Submit,
  } = props;
  return (
    <View style={styles.container}>
      <View>
        <View>
          <View style={styles.logo}>
            <HeaderLogo />
          </View>

          <Text style={styles.Heading}>
            {dummyData.ScreenData.signScreen.title}
          </Text>

          <Text style={styles.subhead}>
            {dummyData.ScreenData.signScreen.Subtitle}
          </Text>
          <View style={styles.inputContainer}>
            <View style={styles.labelcontainer}>
              <Text style={styles.emailtxt}>{constants.Form.Email}</Text>
              {isValidEmail.current == false && (
                <Text style={styles.suggestionText}>Invalid Email</Text>
              )}
            </View>
            <View style={styles.textinputcont}>
              <TextInput
                placeholder={constants.Form.EmailPlaceholder}
                style={[styles.emailTextInput, {width: '95%'}]}
                onChangeText={text => setEmail(text)}
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.Paswd}>{constants.Form.Password}</Text>
              {isvalidPassword.current == false && (
                <Text style={styles.suggestionText}>
                  Password must be 9 characters
                </Text>
              )}
            </View>
            <View style={styles.textinputcont}>
              <TextInput
                placeholder={constants.Form.PasswordPlaceholder}
                style={styles.emailTextInput}
                secureTextEntry={isEnabled}
                onChangeText={text => setPassword(text)}
              />
              <TouchableOpacity
                onPress={() => {
                  isEnabled ? setIsEnabled(false) : setIsEnabled(true);
                }}>
                <Image source={icons.eye} style={styles.eyeIcon} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.TogleBtnCont}>
            <View style={styles.switchBtn}>
              <Switch
                trackColor={{false: COLORS.primary, true: COLORS.lightGray2}}
                thumbColor={isEnabled ? COLORS.primary : COLORS.lightGray2}
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
              <Text>{constants.Form.SaveMe}</Text>
            </View>
            <View style={styles.fgtBtn}>
              <TouchableOpacity onPress={() => navigation.navigate('Otp')}>
                <Text>{constants.Button.ForgetPassword}</Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            style={styles.Button}
            onPress={() => (
              Submit(), render ? setRender(false) : setRender(true)
            )}>
            <Text style={styles.signinTxt}>{constants.Button.Sign}</Text>
          </TouchableOpacity>

          <View style={styles.Signuptext}>
            <Text style={styles.donthaveAc}>
              {dummyData.ScreenData.signScreen.Donthaveanaccount}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.SignUpBtn}>{constants.Button.Signup}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View>
        <TouchableOpacity onPress={FacebookLogin} style={styles.FbButton}>
          <Image source={icons.fb} style={styles.fbIcon}></Image>
          <Text style={styles.fbBtnTxt}>{constants.Button.FbBtn}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={signIn} style={styles.GglBtn}>
          <Image source={icons.google} style={styles.GglIcon}></Image>
          <Text style={styles.GglBtnTxt}>{constants.Button.GglBtn}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignInScreen;
