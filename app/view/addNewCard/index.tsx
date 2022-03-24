import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import {MainButton} from '../../Common';
import Header from '../../Common/Header';
import {constants, icons, images} from '../../config/constants';
import styles from './style';

interface Inputprop {
  navigation: any;
  data: {
    Byprogrammers: string;
    CardNum: string;
    Date: string;
    cardNumber: string;
    CardHolderName: string;
    ExpiryDate: string;
    CVV: string;
    RememberThisCardDetail: string;
  };
}

const AddNewCard = (props: Inputprop) => {
  const {navigation, data} = props;
  return (
    <View style={styles.mainContainer}>
      <Header
        name={constants.screens.addNewCard}
        leftIcon={icons.back}
        rytIcon={undefined}
      />
      <View style={styles.spaceView}>
        <View>
          <View style={styles.card}>
            <Image source={images.card} style={styles.imageBackground} />

            <View style={styles.iconContainer}>
              <View></View>
              <View>
                <Image source={icons.apple} style={styles.apple} />
              </View>
            </View>
            <View style={styles.CardNameConatainer}>
              <View>
                <Text style={styles.text}>{data.Byprogrammers}</Text>
                <Text style={styles.CardNumText}>{data.CardNum}</Text>
              </View>
              <View>
                <Text></Text>
                <Text style={styles.CardNumText}>{data.Date}</Text>
              </View>
            </View>
          </View>

          <View style={styles.inputMainContainer}>
            <Text style={styles.label}>{data.cardNumber}</Text>
            <View style={styles.textInputContainer}>
              <TextInput />
              <Image source={icons.correct} style={styles.eye} />
            </View>
          </View>
          <View style={styles.inputMainContainer}>
            <Text style={styles.label}>{data.CardHolderName}</Text>
            <View style={styles.textInputContainer}>
              <TextInput />
              <Image source={icons.correct} style={styles.eye} />
            </View>
          </View>

          <View style={styles.expiryDateContainer}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>{data.ExpiryDate}</Text>
              <View style={styles.inputBox}>
                <TextInput />
                <Image source={icons.correct} style={styles.eye} />
              </View>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>{data.CVV}</Text>
              <View style={styles.inputBox}>
                <TextInput />
                <Image source={icons.correct} style={styles.eye} />
              </View>
            </View>
          </View>

          <View style={styles.remeberTxtContainer}>
            <TouchableOpacity>
              <Image source={icons.check_on} style={styles.checkONN} />
            </TouchableOpacity>
            <Text style={styles.label}>{data.RememberThisCardDetail}</Text>
          </View>
        </View>
        <MainButton name={constants.Button.AddCard} />
      </View>
    </View>
  );
};
export default AddNewCard;
