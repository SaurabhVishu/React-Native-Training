import React from 'react';
import {View, Text,Image,TouchableOpacity} from 'react-native';
import { constants, icons } from '../../config/constants';
import styles from './style';
import Header from '../../Common/Header';

interface Inputprop {
  navigation: any;
  data:{
    id: number;
    title: string;
    icon: any;
}[],
}

const SettingsScreen = (props: Inputprop) => {
  const {navigation,data} = props;
  return (
      <View style={styles.mainContainer}>
         <Header
          name={constants.screens.Settings}
          leftIcon={icons.back}
          rytIcon={undefined}
        />
        <View style={styles.mapContainer}>
            {data.map((item,index)=>{
                return(
                    <View key={index} >
                        <TouchableOpacity  style={index==9?styles.Btn:[styles.Btn,styles.border]}>
                        <Image source={item.icon} style={styles.icon}/>
                        <Text style={styles.title}>{item.title}</Text>
                        </TouchableOpacity>

                    </View>
                )
            })}
        </View>
      </View>
  )
};
export default SettingsScreen;
