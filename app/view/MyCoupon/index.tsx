import React from 'react';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import Header from '../../Common/Header';
import {COLORS, constants, dummyData, icons} from '../../config/constants';
import styles from './style';

interface InputProp {
  navigation: any;
  selected: boolean;
  setSelected: React.Dispatch<React.SetStateAction<boolean>>;
  Filterdata: {
    id: string;
    title: string;
    Subtitle: string;
    coupon: boolean;
    icondata: any;
    valid: string;
  }[];
}

const MyCoupon = (props: InputProp) => {
  const {navigation, setSelected, selected, Filterdata} = props;
  const elements = ['one', 'two', 'three'];

  return (
    <View style={styles.mainContainer}>
      <Header
        name={constants.screens.Mycoupon}
        leftIcon={icons.back}
        rytIcon={icons.profile}
        leftNavigation={()=>navigation.goBack()} 
      />
      <View style={styles.btnContainer}>
        <TouchableOpacity
          onPress={() => setSelected(false)}
          style={
            selected == !true
              ? [styles.availableBtn, {backgroundColor: COLORS.orange}]
              : styles.availableBtn
          }>
          <Text
            style={
              selected == !true
                ? [styles.availableTxt, {color: COLORS.white}]
                : styles.availableTxt
            }>
            {constants.Button.Available}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            selected == true
              ? [styles.usedBtn, {backgroundColor: COLORS.orange}]
              : styles.usedBtn
          }
          onPress={() => setSelected(true)}>
          <Text
            style={
              selected == true
                ? [styles.availableTxt, {color: COLORS.white}]
                : styles.availableTxt
            }>
            {constants.Button.Used}
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={Filterdata}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <View style={styles.renderContainer}>
              <View
                style={styles.leftHalfCirce}></View>
              <Image style={styles.icon} source={item.icondata} />
              <View style={styles.line}></View>
              <View
                style={styles.title_CircleContainer}>
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.Subtitle}>{item.Subtitle}</Text>
                  <Text style={styles.valid}>{item.valid}</Text>
                </View>
                <View>
                  {elements.map((value, index) => {
                    return (
                      <View style={styles.rightHalfCircle} key={index}></View>
                    );
                  })}
                </View>
              </View>
            </View>
          );
        }}
        ItemSeparatorComponent={() => {
          return <View style={styles.itemSep}></View>;
        }}
      />
    </View>
  );
};
export default MyCoupon;
