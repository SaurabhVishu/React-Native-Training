import React from 'react';
import {View, Text} from 'react-native';
import { dummyData } from '../config/constants';
import SuccessScreen from '../view/Success';
interface InputProp{
    navigation:any
}

const SuccessModel = (props:InputProp) => {
    const{navigation}=props
  return(
<SuccessScreen
{...{
    navigation,
    data:dummyData.ScreenData.SuccessScreen
}}
/>
  )
}
export default SuccessModel;
