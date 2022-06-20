import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useDrawerStatus, useDrawerProgress} from '@react-navigation/drawer';
import React, {useRef, useState, useEffect} from 'react';
import {View} from 'react-native';
import Animated from 'react-native-reanimated';
import {COLORS, icons} from '../../config/constants';
import {
  HomeModel,
  MycardModel,
  Navigation2Model,
  NotificationModel,
  RiderRivewModel,
} from '../../viewModel';
import {TabButton} from './tabBarButton';
import MyCartViewModel from '../../viewModel/MyCartView';

const Tab = createBottomTabNavigator();

const Roottab = () => {


  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: 70,
          paddingHorizontal: 10,
          backgroundColor: COLORS.white,
        },
      }}>
      <Tab.Screen
        name="HomeTab"
        component={HomeModel}
        options={{
          tabBarButton: props => (
            <TabButton {...props} icon={icons.home} label={'Home'} />
          ),
        }}
      />

      <Tab.Screen
        name="Search"
        component={HomeModel}
        options={{
          tabBarButton: props => (
            <TabButton {...props} icon={icons.search} label={'Search'} />
          ),
        }}
      />

      <Tab.Screen
        name="Cart"
        component={MyCartViewModel}
        options={{
          tabBarButton: props => (
            <TabButton {...props} icon={icons.cart} label={'Cart'} />
          ),
        }}
      />

      <Tab.Screen
        name="Favouritetab"
        component={RiderRivewModel}
        options={{
          tabBarButton: props => (
            <TabButton {...props} icon={icons.favourite} label={'Favourite'} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Navigation2Model}
        options={{
          tabBarButton: props => (
            <TabButton
              {...props}
              icon={icons.notification}
              label={'Notification'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Roottab;
