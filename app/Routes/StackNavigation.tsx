import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { HomeModel, ProfileModel, SignInModel,OnBoardingModel } from "../viewModel";

type RootStackList = {
    Home: undefined,
    Profile : undefined
}

const Stack = createStackNavigator()

const StackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SignIn">
                <Stack.Screen name="OnBoarding" component={OnBoardingModel} options={{headerShown:false}}/> 
                <Stack.Screen name="SignIn" component={SignInModel} options={{headerShown:false}} />

                <Stack.Screen name="Home" component={HomeModel} />
                <Stack.Screen name="Profile" component={ProfileModel} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator