import React from 'react';
import {View, Text,Image} from 'react-native';
import { MainButton } from '../../Common';
import { constants, images } from '../../config/constants';
import styles from './style';

interface InputProp {
  navigation: any
  data:{
    congratulation: string;
    paymentWasSucess: string;
},
}

const SuccessScreen = (props: InputProp) => {
  const {navigation,data} = props;
  return (
    <View style={styles.MainContainer}>
      <View style={styles.UpperView}>
        <Image source={images.success } style={styles.SuccessImg} />
           <Text style={styles.Congratulation}>{data.congratulation}</Text>
           <Text style={styles.PaymentSuccessText}>{data.paymentWasSucess}</Text>
      </View>
      <View style={styles.LowerView}></View>
            <MainButton
            name={constants.Button.Done}
            Press={()=>navigation.navigate("Drawer")}
            />
    </View>
  );
};
export default SuccessScreen;
