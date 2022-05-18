
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useDrawerStatus,useDrawerProgress} from '@react-navigation/drawer';
import React, { useRef, useState ,useEffect} from 'react';
import { View } from 'react-native';
import Animated,{} from 'react-native-reanimated';
import { COLORS, icons } from '../../config/constants';
import { HomeModel, MycardModel, NotificationModel, RiderRivewModel } from '../../viewModel';
import TabbarItem from './TabbarItem';

const Tab = createBottomTabNavigator();

const Roottab = () => {

  // const isprogressdata=useDrawerProgress()

  // const scale = Animated.interpolateNode(isprogressdata, {
  //   inputRange: [0, 1],
  //   outputRange: [1, 0.9],
  // });
  // const borderRadius = Animated.interpolateNode(isprogressdata, {
  //   inputRange: [0, 1],
  //   outputRange: [0, 25],
  // });
  // const animatedStyle = {
  //   borderRadius,
  //   transform: [{ scale }],
  //   overflow: 'hidden',
  // };

  return (
    <Tab.Navigator
    
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarHideOnKeyboard:true,
        tabBarStyle:{
          height:70,
          paddingHorizontal:20,
          backgroundColor: COLORS.white2,
          
        }

      }} >
      <Tab.Screen name="HomeTab" component={HomeModel}
      
            options={{      
              tabBarIcon: ({ focused }) => (<TabbarItem focused={focused}  ICON={icons.home} label={'Home'} />)
            }} />

      <Tab.Screen name="Search" component={HomeModel}
            options={{
              
              tabBarIcon: ({ focused }) => (<TabbarItem focused={focused}  ICON={icons.search} label={'Search'} />),
            }} />

      <Tab.Screen name="Cart" component={MycardModel}
            options={{
              tabBarIcon: ({ focused }) => (<TabbarItem focused={focused}  ICON={icons.cart} label={'Cart'} />),
            }} />

      <Tab.Screen name="Favouritetab" component={RiderRivewModel}
            options={{
              tabBarIcon: ({ focused }) => (<TabbarItem focused={focused}  ICON={icons.favourite} label={'Favourite'} />),
            }} />
      <Tab.Screen name="Notification" component={NotificationModel}
            options={{
              tabBarIcon: ({ focused }) => (<TabbarItem focused={focused}  ICON={icons.notification} label={'Notification'} />),
            }} />

    </Tab.Navigator>
  );
}

export default Roottab

