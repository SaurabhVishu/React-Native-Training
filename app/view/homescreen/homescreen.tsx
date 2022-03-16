import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  ActivityIndicator,
  Modal,
  Alert,
  ImageBackground,
} from 'react-native';
import styles from './style';
import {useSelector, useDispatch} from 'react-redux';
import { changeSate, IncNum } from '../../Redux/Action/Demoaction';
import { icons, images } from '../../config/constants';

interface InputProp {
  navigation: any;
  data: Array<any>;
  IsLoading: boolean;
  INCREMENT:any,

}

const HomeScreen = (props: InputProp) => {
  const counter1 = useSelector((state: any) => state.ChangeValue.counter);
   const value=useSelector((state: any)=>state.ChangeValue.isShow)
  const dispatch = useDispatch();
  console.log(dispatch)
  console.log("value is:",value);

  const {navigation, data, IsLoading,INCREMENT} = props; //break the data
  return (
    <View style={styles.container}>
      <Text style={{fontSize:25,fontWeight:"bold",color:"black"}}>{counter1}</Text>

      <TouchableOpacity style={styles.btn}
       onPress={()=>dispatch(IncNum(counter1*2))}
      > 
        <Text style={{fontSize:18,color:"white"}}>Add</Text>
      </TouchableOpacity>



      <TouchableOpacity style={styles.btn}
       onPress={()=>dispatch(changeSate(!value))}
      >
        <Text style={{fontSize:18,color:"white"}}>state</Text>
      </TouchableOpacity>
      <View style={value==true?styles.textView:[styles.textView,{backgroundColor:"yellow"}]}>
        {value?<Text style={{fontSize:18,fontWeight:"bold"}}>Burger</Text>:<Text style={{fontSize:18,fontWeight:"bold"}}>Apple</Text>}
      </View>
     
     <Image source={value?icons.burger:icons.apple} style={{height:70,width:70,marginVertical:10,resizeMode:"contain"}}/>
  </View>
  );
};

export default HomeScreen;

