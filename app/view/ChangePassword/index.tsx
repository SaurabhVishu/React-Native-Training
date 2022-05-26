import React from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import { MainButton } from '../../Common';
import Header from '../../Common/Header';
import {constants, dummyData, icons} from '../../config/constants';
import styles from './style';

interface InputProp {
  navigation: any;
}

const ChangePassword = (props: InputProp) => {
  const {navigation} = props;
  return (
    <View style={styles.mainContainer}>
      <View>
        <Header
          name={constants.screens.ChangePassword}
          leftIcon={icons.back}
          rytIcon={undefined}
          leftNavigation={()=>navigation.goBack()} 

        />
        <View style={styles.mapContainer}>
          {dummyData.ChangePassword.map((item, index) => {
            return (
              <View key={index}>
                <Text style={styles.label}>{item.label}</Text>
                <View style={styles.textinputView}>
                  <TextInput />
                  <Image source={icons.eye_close} style={styles.eye} />
                </View>
              </View>
            );
          })}
        </View>
      </View>
      <View>
          <MainButton
          name={constants.Button.ChangePassword}
          />
      </View>
    </View>
  );
};

export default ChangePassword;
