import React from 'react';
import {View, Text, Image, Switch} from 'react-native';
import styles from './style';
import Header from '../../Common/Header';
import {constants, icons} from '../../config/constants';

interface InputProp {
  navigation: any;
  data: {
    notifi: string;
    proNotifi: string;
    youwill: string;
  };
  isEnabled: any;
  setIsEnabled: any;
}

const NotificationScreen = (props: InputProp) => {
  const {navigation, data, isEnabled} = props;
  return (
    <View style={styles.container}>
      <Header
        name={constants.screens.notifi}
        leftIcon={icons.back}
        rytIcon={undefined}
      />
      <View style={styles.CardCont}>
          <Image source={icons.notification} style={styles.notificationIcon} />
        
        <View>
          <Text style={styles.heading}>{data.notifi}</Text>
          <Text style={styles.subheading}>{data.youwill}</Text>
        </View>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        />
      </View>
      <View style={styles.CardCont}>
          <Image source={icons.notification} style={styles.notificationIcon} />
        <View>
          <Text style={styles.heading}>{data.proNotifi}</Text>
          <Text style={styles.subheading}>{data.youwill}</Text>
        </View>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        />
      </View>
    </View>
  );
};
export default NotificationScreen;
