import React,{useState} from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import { COLORS } from '../../config/constants/theme';
import { color } from 'react-native-reanimated';

interface Inptprop{
  
    item :{
      title: string;
      time: string;
      subtitle: string;
      image: any;
      price: string;
      button1: string;
      button2: string;
  } | {
      title: string;
      time: string;
      subtitle: string;
      image: any;
      price: number;
      button1: string;
      button2: string;
  }
  
    index:number,
    touch:boolean,
    setTouch:any
}

const HistoryItem =( props: Inptprop)=>{
  
    const {item, index,touch,setTouch} =props;
    console.log(index);
    return(
        <View style={styles.mainRenderView}>
        <View style={styles.uperView}>
          <View style={styles.iconContainer}>
            <Image source={item.image} style={styles.iconImage} />
          </View>
          <View >
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.time}> {item.time} </Text>
            <Text style={index==2?[styles.subtitle,{color:COLORS.red}]:styles.subtitle}>{item.subtitle}</Text>
          </View>
          <View>
            <Text style={styles.price}>${item.price}</Text>
          </View>
        </View>
        <View style={styles.rateButtonContainer}>
        <TouchableOpacity 
        onPress={()=>setTouch(false)}
        style={[styles.reorderBtn,{backgroundColor:touch==false?COLORS.primary:COLORS.lightOrange3}]}
        >
            <Text style={[styles.btName,{color:touch==false?COLORS.white:COLORS.primary}]}>{item.button1}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ [styles.rateBtn,{backgroundColor:touch==true?COLORS.primary:COLORS.lightOrange3}]}
        onPress={()=>setTouch(!false)}
        >
            <Text style={[styles.btName,{color:touch==true?COLORS.white:COLORS.primary}]}>{item.button2}</Text>
        </TouchableOpacity>
        </View>
      </View>

    )

}

export default HistoryItem;