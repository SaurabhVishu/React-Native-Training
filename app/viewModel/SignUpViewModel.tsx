import React, {useRef, useState} from 'react';
import {
  EmailValidate,
  PasswordValidate,
  UserNameValidate,
} from '../config/validate';
import SignUpScreen from '../view/SignUp';

interface InputProp {
  navigation: any;
}

const SignUpModel = (props: InputProp) => {
  const {navigation} = props;
  const[render,setRender]=useState(false)
  const [isEnabled, setIsEnabled] = useState(false);
  const email = useRef('');
  const userName = useRef('');
  const password = useRef('');
  const isvalidusername = useRef<any>(undefined);
  const isvalidPassword = useRef<any>(undefined);
  const isValidEmail = useRef<any>(undefined);

  const Submit = () => {
    isValidEmail.current = EmailValidate(email.current);
    isvalidPassword.current = PasswordValidate(password.current);
    isvalidusername.current = UserNameValidate(userName.current);
    return isValidEmail.current == true &&
      isvalidPassword.current == true &&
      isvalidusername.current == true
      ? navigation.navigate('Drawer')
      : null;

  };

  //console.log('Email :', email);
  //var check=EmailValidate(email);
  //console.log(check);

  return (
    <SignUpScreen
      {...{
        navigation,
        isEnabled,
        setIsEnabled,
        email,
        setEmail: (text: string) => (email.current = text),
        setUserName: (text: string) => (userName.current = text),
        setPassword: (text: string) => (password.current = text),
        Submit,
        isValidEmail,
        isvalidPassword,
        isvalidusername,
        setRender,
        render
      }}
    />
  );
};
export default SignUpModel;
