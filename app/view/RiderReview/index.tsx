import React from 'react';
import {View, Text, Image, TouchableOpacity,TextInput} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { MainButton } from '../../Common';
import Header from '../../Common/Header';
import {COLORS, constants, dummyData, icons, images} from '../../config/constants';
import styles from './style';

interface InputProp {
  navigation: any;
  data:{
    title: string;
    name: string;
    DeliveryMan: string;
    OrderDeliverd: string;
    pleaseRateService: string;
    addTips: string;
} ;
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
  rate:number
  setRate:React.Dispatch<React.SetStateAction<number>>
}

const RiderReview = (props: InputProp) => {
  const {navigation, data,setSelected,selected,rate,setRate} = props;
  return (
    <View style={styles.mainContainer}>
      <Header
        name={constants.screens.RIDERRIVIEW}
        leftIcon={icons.back}
        rytIcon={undefined}
        leftNavigation={()=>navigation.goBack()} 

      />
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.imageContainer}>
        <Image source={images.profile} style={styles.RiderImage} />
      </View>
      <View style={styles.nameConatiner}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.deliveryman}>{data.DeliveryMan}</Text>
      </View>

      <Text style={styles.OrderDeliverd}>{data.OrderDeliverd}</Text>
      <View style={styles.plsRate}>
        <Text style={styles.deliveryman}>{data.pleaseRateService}</Text>
        <View style={styles.starContainer}>
          {dummyData.StarData.map((item, index) => {
            return (
              <View  key={index}>
                <TouchableOpacity onPress={()=>setRate(index)}>
                <Image source={item.icon} style={rate >=index ? styles.starIcon:styles.unSelectedStar} />
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </View>
      <Text style={styles.addTips}>{data.addTips}</Text>
      <View style={styles.TipContainer}>
        {dummyData.TipsData.map((item, index) => {
          return (
            <TouchableOpacity  onPress={()=>setSelected(index)} key={index}>
                <View style={selected==index?styles.Truetipdata: styles.tipdata}>
              <Text style={ selected==index ? [styles.tiptext,{color:'white'}]:styles.tiptext}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={styles.cmntBox}>
          <TextInput
          placeholder='Add a comment'
          placeholderTextColor={"gray"}
           style={{width:"90%"}}
           />
      </View>
      </ScrollView>
      <View style={styles.SubmitBtn}>
      <MainButton
      name={constants.Button.SubmitReview}
      Press={()=>navigation.navigate('HomeTab')}
      />
      </View>
    </View>
  );
};
export default RiderReview;
