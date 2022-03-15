import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  HomeModel,
  ProfileModel,
  SignInModel,
  OnBoardingModel,
  SignUpModel,
  OtpModel,
  PassRcvModel,
  FoodDetailModel,
  NotificationModel,
  Navigation2Model,
  MycardModel,
  SuccessModel,
  CheckoutModel,
  RiderRivewModel,
  MyCouponModel,
  MyOrderModel 
} from '../viewModel';
import CustomDrawerContent from '../components/CustomDrawer';
import DrawerNavigation from './DrawerNavigation';
import BottomTab from './BottomTab';


type RootStackList = {
  Home: undefined;
  Profile: undefined;
};

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MyOrder">
        <Stack.Screen
          name="OnBoarding"
          component={OnBoardingModel}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={SignInModel}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpModel}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Otp"
          component={OtpModel}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PassRecovery"
          component={PassRcvModel}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FoodDetail"
          component={FoodDetailModel}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Notification"
          component={NotificationModel}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Notification2"
          component={Navigation2Model}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyCards"
          component={MycardModel}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Checkout"
          component={CheckoutModel}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Success"
          component={SuccessModel}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Drawer"
          component={DrawerNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeModel}
          // options={{headerShown: false}}
        />
        <Stack.Screen
          name="BottomTab"
          component={BottomTab}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RiderReview"
          component={RiderRivewModel}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyCoupon"
          component={MyCouponModel}
          options={{headerShown: false}}
        />

<Stack.Screen
          name="MyOrder"
          component={MyOrderModel}
          options={{headerShown: false}}
        />

        {/* <Stack.Screen name="HomeScreen" component={HomeModel} /> */}
        <Stack.Screen name="Profile" component={ProfileModel} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
