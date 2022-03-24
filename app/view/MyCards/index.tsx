import React from 'react';
import {View, Text, Image,ScrollView,TouchableOpacity} from 'react-native';
import Header from '../../Common/Header';
import {constants, icons} from '../../config/constants';
import styles from './style';
import MainButton from '../../Common/MainButton';

interface InputProp {
  navigation: any
  myCard: {
    id: number;
    name: string;
    icon: any;
    card_no: string;
}[]
allCard: {
  id: number;
  name: string;
  icon: any;
}[]
}
  

const MyCardScreen = (props: InputProp) => {
  const {navigation,myCard,allCard} = props;
  return (
    <View style={styles.Container}>
      <Header
        name={constants.screens.MY_CARD}
        leftIcon={icons.back}
        rytIcon={undefined}
      />

      <ScrollView>
      <View style={styles.CardContainer}>
        {myCard.map((item, index) => {
          return (
            <View style={styles.CardViewContainer}>
              <View style={styles.ImgTxtContainer}>
                <View  style={styles.iconView} >
                <Image source={item.icon} key={index} style={styles.icon} />
                </View>
                <Text style={styles.iconName}>{item.name}</Text>
              </View>
              <View>
                <Image source={icons.check_off} style={styles.checkoff} />
              </View>
            </View>
          );
        })}

        <View>
          <Text style={styles.txtAddCard}>{constants.screens.AddCard}</Text>
          {allCard.map((item, index) => {
            return (
              <View style={styles.CardViewContainer}>
                <View style={styles.ImgTxtContainer}>
                  <View style={styles.iconView}>
                    <Image source={item.icon} key={index} style={styles.icon} />
                  </View>

                  <Text style={styles.iconName}>{item.name}</Text>
                </View>
                <TouchableOpacity >
                  <Image source={icons.check_off} style={styles.checkoff} />
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </View>
      </ScrollView>
      <MainButton 
      name={constants.Button.Add}
      />
    </View>
  );
};
export default MyCardScreen;
