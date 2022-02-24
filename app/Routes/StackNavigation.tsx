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
} from '../viewModel';

type RootStackList = {
  Home: undefined;
  Profile: undefined;
};

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Notification2">
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

        <Stack.Screen name="Home" component={HomeModel} />
        <Stack.Screen name="Profile" component={ProfileModel} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
