import React,{useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import {MainButton} from '../../Common';
import Header from '../../Common/Header';
import {constants, icons} from '../../config/constants';
import { Mycard, Textdata } from '../../Models';
import styles from './style';
import { COLORS } from '../../config/constants/theme';

interface InputProp {
  navigation: any,
  myCard:{
    id: number;
    name: string;
    icon: any;
    card_no: string;
  }[];
  text: Textdata,
  modalVisible:any,
  setModalVisible:any,

}

const CheckoutScreen = (props: InputProp) => {
  const {navigation, myCard, text,modalVisible,setModalVisible} = props;
  const[data,setData]=useState(0)
  
  return (
    <View style={styles.mainContainer}>
      <Header
        name={constants.screens.Checkout}
        leftIcon={icons.back}
        rytIcon={undefined}
        leftNavigation={() => navigation.goBack()}

      />

      {myCard.map((item, index:number) => {
        return (
          <TouchableOpacity onPress={() => {setModalVisible(true),setData(index)}} key={index} >
            <View style={index==data?[styles.CardViewContainer,{borderColor:COLORS.primary}]:styles.CardViewContainer}>
              <View style={styles.ImgTxtContainer}>
                <View style={styles.iconView}>
                  <Image source={ item.icon} key={index} style={styles.icon} />
                </View>
                <Text style={styles.iconName}>{item.name}</Text>
              </View>
                <TouchableOpacity>
              <Image
                source={index==data ? icons.check_on:icons.check_off}
                style={styles.checkoff}
                key={index}
              />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        );
      })}

      <Text style={styles.DelAdds}>{text.DelAdds}</Text>

      <View style={styles.locDetailView}>
        <Image source={icons.location1} style={styles.locationIcon} />
        <View>
          <Text style={styles.LocDetail}>{text.LocDetail}</Text>
          <Text style={styles.LocDetail}>{text.CA}</Text>
        </View>
      </View>

      <Text style={styles.DelAdds}>{text.addCoupan}</Text>

      <View style={styles.couponContainer}>
        <TextInput placeholder={text.CouponCode} style={styles.textInput} />
        <TouchableOpacity style={styles.discounCont}>
          <Image source={icons.discount} style={styles.discount} />
        </TouchableOpacity>
      </View>

      <View style={styles.MainModalview}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <TouchableWithoutFeedback
            onPress={() => setModalVisible(!modalVisible)}>
            <View style={styles.upperModalView}></View>
          </TouchableWithoutFeedback>

          <View style={styles.ModalViewContainer}>
            <View style={styles.ModalPriceTextCont}>
              <View>
                <Text style={styles.ModalText}>{text.subTotal}</Text>
                <Text style={styles.ModalText}>{text.ShipingFee}</Text>
              </View>
              <View>
                <Text style={styles.ModalText}>{text.Price1}</Text>
                <Text style={styles.ModalText}>{text.Price2}</Text>
              </View>
            </View>
            <View style={styles.ToatalContainer}>
              <Text style={styles.Totaltext}>{text.Total}</Text>
              <Text style={styles.Totaltext}>{text.totPrice}</Text>
            </View>

            <MainButton
            Press={()=>navigation.navigate("Success")}
            name={constants.Button.placeYourOrder} />
          </View>
        </Modal>
      </View>
    </View>
  );
};
export default CheckoutScreen;
