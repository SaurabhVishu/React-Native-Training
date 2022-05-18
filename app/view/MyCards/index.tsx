import React, { useState } from 'react';
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
  const[selected,setSelected]=useState(0)
  console.log("selected is ===>",selected)
  return (
    <View style={styles.Container}>
      <Header
        name={constants.screens.MY_CARD}
        leftIcon={icons.back}
        rytIcon={undefined}
        leftNavigation={()=>navigation.goBack()}  
      />

      <ScrollView  showsVerticalScrollIndicator={false}>
      <View style={styles.CardContainer}>
        {myCard.map((item, index) => {
          return (
            <View style={styles.CardViewContainer} key={index}>
              <View style={styles.ImgTxtContainer}>
                <View  style={styles.iconView} >
                <Image source={item.icon} key={index} style={styles.icon} />
                </View>
                <Text style={styles.iconName}>{item.name}</Text>
              </View>
              
                <TouchableOpacity onPress={()=>setSelected(index)}>
                <Image source={icons.check_off} style={selected==index?[styles.checkoff,{tintColor:"orange"}]:styles.checkoff} />
                </TouchableOpacity>
            </View>
          );
        })}

        <View>
          <Text style={styles.txtAddCard}>{constants.screens.AddCard}</Text>
          {allCard.map((item, index) => {
            return (
              <View style={styles.CardViewContainer} key={index}>
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
      Press={()=>navigation.navigate("AddNewCard")}
      />
    </View>
  );
};
export default MyCardScreen;
function id(id: any): void {
  throw new Error('Function not implemented.');
}

