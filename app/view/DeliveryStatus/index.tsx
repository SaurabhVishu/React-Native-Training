import React from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import {constants, icons} from '../../config/constants';
import styles from './style';
import {MainButton} from '../../Common';
import { ScrollView } from 'react-native-gesture-handler';

interface Inputprop {
  navigation: any;
  ScreenText: {
    DeliveryStatus: string;
    Estimated: string;
    Date: string;
    Trackorder: string;
    Code: string;
  };
  Data: {
    id: number;
    icon: any;
    title: string;
    subtitle: string;
  }[];
  id: number;
  setId: React.Dispatch<React.SetStateAction<number>>;
  touch: boolean;
  setTouch: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeliveryStatus = (props: Inputprop) => {
  const {navigation, ScreenText, Data, id, setId, touch, setTouch} = props;
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.sapceView}>
        <View>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>{ScreenText.DeliveryStatus}</Text>
          </View>

          <Text style={styles.heading}>{ScreenText.Estimated}</Text>
          <Text style={styles.date}>{ScreenText.Date}</Text>
            
          <View style={styles.mainCardView}>
            <View style={styles.uperCardContainer}>
              <Text style={styles.trackOrder}>{ScreenText.Trackorder}</Text>
              <Text style={styles.code}>{ScreenText.Code}</Text>
            </View>
            <View style={styles.seprator} />
            <View style={styles.mapContainer}>
              {Data.map((item: any, index: number) => {
                return (
                  <View key={index}>
                    <View style={styles.iconContainer}>
                      <View style={styles.iconLineContainer}>
                        <Image
                          style={
                            index <= id
                              ? styles.selectCheck
                              : styles.check
                          }
                          source={item.icon}
                        />
                        {index <= 4 && (
                          <View
                            style={
                              index <= id - 1
                                ? styles.selectDottedLine
                                : styles.dottedView
                            }
                          />
                        )}
                      </View>
                      <View style={styles.textContainer}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text>{item.subtitle}</Text>
                      </View>
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
        </View>
        
        {id <= 4 ? (
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={
                touch == false
                  ? styles.btn
                  : styles.unSelectBtn
              }
              onPress={() => setTouch(false)}>
              <Text
                style={
                  touch == false
                    ? styles.btnName
                    :styles.unselectBtnName
                }>
                {constants.Button.cancel}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                touch == true
                  ? styles.btn
                  : styles.unSelectBtn
              }
              onPress={() => {setTouch(true),navigation.navigate("MapView")}}>
              <Image
                source={icons.map}
                style={
                  touch == true
                    ? styles.mapIcon
                    : styles.selectMapIcon
                }
              />
              <Text
                style={
                  touch == true
                    ? styles.btnName
                    : styles.unselectBtnName
                }>
                {constants.Button.Map}
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <MainButton name={constants.Button.Add} 
          Press={()=>navigation.navigate("MapView")}
          />
        )}
      </View>


    </SafeAreaView>
  );
};

export default DeliveryStatus;
