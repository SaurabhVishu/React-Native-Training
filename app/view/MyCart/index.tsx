import React from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import {Header, MainButton} from '../../Common';
import {constants, icons} from '../../config/constants';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import styles from './style';
import Swipeleft from './Swipeleft';
import {ScrollView} from 'react-native-gesture-handler';

interface Inputprop {
  navigation: any;
  data: {
    id: number;
    title: string;
    icon: any;
    price: string;
    add: any;
    minus: any;
    count: number;
  }[];
  setData: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        title: string;
        icon: any;
        price: string;
        add: any;
        minus: any;
        count: number;
      }[]
    >
  >;
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  text: {
    DelAdds: string;
    LocDetail: string;
    CA: string;
    addCoupan: string;
    CouponCode: string;
    subTotal: string;
    ShipingFee: string;
    Price1: string;
    Price2: string;
    Total: string;
    totPrice: string;
  };
  DecrementCount: (count: any, index: number) => void;
  IncrementCount: (count: any, index: number) => void;
}

const MyCart = (props: Inputprop) => {
  const {
    navigation,
    data,
    setData,
    text,
    modalVisible,
    setModalVisible,
    DecrementCount,
    IncrementCount,
  } = props;

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header
        name={constants.screens.MY_CART}
        leftIcon={icons.back}
        rytIcon={icons.cart}
      />
      <ScrollView>
        <View>
          {data.map((item: any, index: number) => {
            return (
              <View style={styles.mainMapView} key={index}>
                <Swipeable
                  renderRightActions={() => <Swipeleft />}
                  rightThreshold={0.5}>
                  <View style={styles.renderView} key={index}>
                    <Image source={item.icon} style={styles.image} />

                    <View>
                      <Text style={styles.title}>{item.title}</Text>
                      <Text style={styles.price}>{item.price}</Text>
                    </View>
                    <View style={styles.addContainer}>
                      <TouchableOpacity
                        onPress={() => (
                          DecrementCount(item.count, index),
                          setModalVisible(true)
                        )}>
                        <Image source={item.minus} style={styles.add} />
                      </TouchableOpacity>
                      <Text style={styles.count}>{item.count}</Text>
                      <TouchableOpacity
                        onPress={() => (
                          IncrementCount(item.count, index),
                          setModalVisible(true)
                        )}>
                        <Image source={item.add} style={styles.add} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </Swipeable>
              </View>
            );
          })}
        </View>

        <View style={styles.ModalViewContainer}>
          <View style={styles.ModalPriceTextCont}>
            <View>
              <Text style={styles.title}>{text.subTotal}</Text>
              <Text style={styles.title}>{text.ShipingFee}</Text>
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
          <MainButton name={constants.Button.placeYourOrder} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyCart;
