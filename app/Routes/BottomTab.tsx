import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyTabBar from '../components/CustomBottomTab';
import {HomeModel, Navigation2Model} from '../viewModel';
import MyCartViewModel from '../viewModel/MyCartView';
import NotificationModel from '../viewModel/NotificationViewModel';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props}
    screenOptions={{tabBarHideOnKeyboard:true}}
    />}>
      <Tab.Screen
        name="Home"
        component={HomeModel}
        options={{headerShown: false}}
      />
       <Tab.Screen
        name="TabNotify"
        component={Navigation2Model}
        options={{headerShown: false}}
      />
      
    </Tab.Navigator>
  );
};

export default BottomTab;
