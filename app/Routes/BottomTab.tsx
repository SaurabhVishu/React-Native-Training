import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as Animatable from 'react-native-animatable';
import styles from './tabbarstyle';
import { COLORS, icons } from '../config/constants';
import { HomeModel } from '../viewModel';

const Tab = createBottomTabNavigator();
const BottomTabData = [
  {
    label: 'Home',
    icon: icons.home,
    routeName: 'Home',
    component: HomeModel,
  },
  {
    label: 'Search',
    icon: icons.search,
    routeName: "Home",
    component: HomeModel,
  },
  {
    label: 'MyCart',
    icon: icons.cart,
    routeName: 'myCartTabBar',
    component: HomeModel,
  },
  {
    label: 'Favourite',
    icon: icons.favourite,
    routeName: 'Home',
    component: HomeModel,
  },
  {
    label: 'Notification',
    icon: icons.notification,
    routeName: 'TabNotify',
    component: HomeModel,
  },
];


const TabButton = (props: any) => {
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={[styles.tabButtonContainer, {flex: focused ? 1 : 0.5}]}>
      <View>
        <Animatable.View
          // ref={viewRef}
          animation="zoomIn"
          duration={1000}>
          <View
            style={[
              styles.tabViewContainer,
              {
                backgroundColor: focused ? COLORS.primary : COLORS.white,
              },
            ]}>
            <Image
              source={item.icon}
          style={{tintColor:focused ? COLORS.white : COLORS.gray,height:20,width:20}}
              
            />
            {focused && (
              <Animatable.View animation="zoomIn" duration={1000}>
                <Text style={styles.bottomLabelText}>{item.label}</Text>
              </Animatable.View>
            )}
          </View>
        </Animatable.View>
      </View>
    </TouchableOpacity>
  );
};

 interface  BottomTabDatatype {
  label: string;
  icon: any;
  routeName: string;
  component: any
}[]
const BottomTab = () => {
  return (
    <Tab.Navigator
    //  tabBar={props => <MyTabBar {...props} />}
    screenOptions={{tabBarHideOnKeyboard:true,headerShown: false}}
    >
        <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.tabContainer,
        }}>
        {BottomTabData.map((item:BottomTabDatatype, index) => {
          return (
            <Tab.Screen
              key={index}
              name={item.label}
              component={item.component}
              options={{
                tabBarLabel: item.label,
                tabBarButton: props => <TabButton {...props} item={item} />,
              }}
            />
          );
        })}
      </Tab.Navigator>
    </Tab.Navigator>
  );
};

export default BottomTab;
