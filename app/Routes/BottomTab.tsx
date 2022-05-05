import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyTabBar from '../components/CustomBottomTab';
import {HomeModel} from '../viewModel';
import MyCartViewModel from '../viewModel/MyCartView';
import NotificationModel from '../viewModel/NotificationViewModel';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen
        name="Home"
        component={HomeModel}
        options={{headerShown: false}}
      />
      
    </Tab.Navigator>
  );
};

export default BottomTab;
