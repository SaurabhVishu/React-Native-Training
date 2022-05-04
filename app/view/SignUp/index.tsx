import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {HeaderLogo} from '../../Common';
import {constants, dummyData, icons} from '../../config/constants';
import styles from './style';
import signIn from '../../Common/GoogleSignIn';
import FacebookLogin from '../../Common/fbLogin';
 

interface InputProp {
  navigation: any;
  isEnabled: boolean;
  setIsEnabled: any;
  setEmail: any;
  email: any;
  setUserName: any;
  setPassword: any;
  Submit: any;
  setRender: any;
  render:any;
  isValidEmail: React.MutableRefObject<boolean>;
  isvalidPassword: React.MutableRefObject<boolean>;
}

const SignUpScreen = (props: InputProp) => {
  const {
    navigation,
    Submit,
    isValidEmail,
    isEnabled,
    setIsEnabled,
    setEmail,
    email,
    setUserName,
    setPassword,
    isvalidPassword,
    setRender,
    render
  } = props;

  return (
    <SafeAreaView style={styles.mainConatiner}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.upperView}>
          <View>
            <View style={styles.logo}>
              <HeaderLogo />
            </View>

            <Text style={styles.Heading}>
              {dummyData.ScreenData.signUp.title}
            </Text>
            <Text style={styles.subhead}>
              {dummyData.ScreenData.signUp.subtitle}
            </Text>

            <View style={styles.inputContainer}>
              <View style={styles.labelContainer}>
                <Text style={styles.emailtxt}>{constants.Form.Email}</Text>
                {isValidEmail.current == false && (
                  <Text style={styles.suggestionText}>Invalid Email</Text>
                )}
              </View>
              <View style={styles.textinputcont}>
                <TextInput
                  placeholder={constants.Form.EmailPlaceholder}
                  keyboardType={'email-address'}
                  onChangeText={text => setEmail(text)}
                  style={styles.emailTextInput}
                />
              </View>
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.labelContainer}>
                <Text style={styles.emailtxt}>{constants.Form.Username}</Text>
              </View>
              <View style={styles.textinputcont}>
                <TextInput
                  placeholder={constants.Form.UserNameplaceholder}
                  keyboardType={'default'}
                  onChangeText={text => setUserName(text)}
                  style={styles.emailTextInput}
                />
              </View>
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.labelContainer}>
                <Text style={styles.passwordText}>
                  {constants.Form.Password}
                </Text>
                {isvalidPassword.current == false && (
                  <Text style={styles.suggestionText}>
                    Password must be 9 characters
                  </Text>
                )}
              </View>
              <View style={styles.textinputcont}>
                <TextInput
                  placeholder={constants.Form.PasswordPlaceholder}
                  secureTextEntry={isEnabled}
                  keyboardType="name-phone-pad"
                  onChangeText={text => setPassword(text)}
                  style={styles.passwordTextInput}
                />
                <TouchableOpacity
                  onPress={() => {
                    isEnabled ? setIsEnabled(false) : setIsEnabled(true);
                  }}>
                  <Image source={icons.eye} style={styles.eyeIcon} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.SignInCon}>
              <TouchableOpacity
                style={styles.signuInButton}
                onPress={() => (Submit(), render ? setRender(false) : setRender(true))}>
                <Text style={styles.signinTxt}>{constants.Button.Signup}</Text>
              </TouchableOpacity>

              <View style={styles.Signuptext}>
                <Text style={styles.donthaveAc}>
                  {dummyData.ScreenData.signUp.AlreadyHaveAc}
                </Text>
                <TouchableOpacity onPress={() =>navigation.navigate('SignIn')}>
                  <Text style={styles.SignUpBtn}>{constants.Button.Sign}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View>
            <View>
              <TouchableOpacity style={styles.FacebookButton}
              onPress={FacebookLogin}>
                <Image source={icons.fb} style={styles.fbIcon}></Image>
                <Text style={styles.fbBtnTxt}>{constants.Button.FbBtn}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.googleButton} onPress={()=>signIn()} >
                <Image source={icons.google} style={styles.googleIcon}></Image>
                <Text style={styles.GglBtnTxt}>{constants.Button.GglBtn}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
