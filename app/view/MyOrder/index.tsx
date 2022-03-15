import React from 'react';
import {View, Text, TouchableOpacity, SectionList, Image} from 'react-native';
import Header from '../../Common/Header/header';
import {constants, icons} from '../../config/constants';
import styles from './style';
import HistoryItem from './HistoryItem';
import UpcomingItem from './UpComingItem';
import { COLORS } from '../../config/constants/theme';

interface InputProp {
  navigation: any;
  selected: boolean;
  setSelected: React.Dispatch<React.SetStateAction<boolean>>;
  HistoryData: {
    title: string;
    data: {
      title: string;
      time: string;
      subtitle: string;
      image: any;
      price: string;
      button1: string;
      button2: string;
    }[];
  }[];
  UpcomingData: {
    title: string;
    data: (
      | {
          title: string;
          time: string;
          subtitle: string;
          image: any;
          price: string;
          button1: string;
          button2: string;
        }
      | {
          title: string;
          time: string;
          subtitle: string;
          image: any;
          price: number;
          button1: string;
          button2: string;
        }
    )[];
  }[];
  touch:any,
  setTouch:any
}

const MyOrder = (props: InputProp) => {
  const {navigation, selected, setSelected, UpcomingData, HistoryData,touch,setTouch} = props;

  return (
    <View style={styles.mainContainer}>
      <Header
        name={constants.screens.MyOrders}
        leftIcon={icons.back}
        rytIcon={icons.profile}
      />
      <View style={styles.btnContainer}>
        <TouchableOpacity
          onPress={() => setSelected(false)}
          style={
            [
              styles.availableBtn,
              {
                backgroundColor:
                  selected == false ? COLORS.primary : COLORS.lightOrange3,
              },
            ]
          }>
          <Text
            style={
                 [styles.availableTxt, {color:selected==false? COLORS.white:COLORS.primary}]
            }>
            {constants.Button.History}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelected(true)}
          style={
            [styles.usedBtn,{backgroundColor:selected == true ? COLORS.primary : COLORS.lightOrange3,}]
          }>
          <Text
            style={
                [styles.availableTxt,{color:selected==true?COLORS.white:COLORS.primary}]
                
            }>
            {constants.Button.Upcoming}
          </Text>
        </TouchableOpacity>
      </View>
      <SectionList
        sections={!selected ? HistoryData : UpcomingData}
        renderItem={({item, index}) =>
          selected ? (
            <HistoryItem item={item} index={index} touch={touch} setTouch={setTouch} />
          ) : (
            <UpcomingItem item={item} index={index} touch={touch} setTouch={setTouch} />
          )
        }
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>{title}</Text>
        )}
        ItemSeparatorComponent={() => {
          return <View style={styles.itemSep}></View>;
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default MyOrder;
