import React, { useState,useRef } from "react";
import { View } from "react-native";
import { EmailValidate, PasswordValidate, UserNameValidate } from "../config/validate";
import SignInScreen from "../view/SignInScreen";


interface InputProp {
    navigation: any
}


const SignInModel = (props: InputProp) => {
    const {navigation} = props;
  const[render,setRender]=useState(false)
  const [isEnabled, setIsEnabled] = useState(true);
  const email = useRef('');
  const password = useRef('');
  const isvalidPassword = useRef<any>(undefined);
  const isValidEmail = useRef<any>(undefined);

  const Submit = () => {
    isValidEmail.current = EmailValidate(email.current);
    isvalidPassword.current = PasswordValidate(password.current);
    return isValidEmail.current == true &&
      isvalidPassword.current == true 
      ? navigation.navigate('Drawer')
      : null;

  };


    return (

        <SignInScreen 
        {...{
            navigation,
            isEnabled,
            setIsEnabled,
            email,
            setEmail: (text: string) => (email.current = text),
            setPassword: (text: string) => (password.current = text),
            Submit,
            isValidEmail,
            isvalidPassword,
            setRender,
            render
          }}
            
        
        />
    )
}
export default SignInModel;