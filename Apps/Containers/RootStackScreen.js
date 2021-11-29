import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

//Screen
import AppNavigation from "../Containers/BottomTab";

import SplashScreen from "./AuthScreen/SplashScreen";
import SignInScreen from "./AuthScreen/SignInScreen";
import SignUpScreen from "./AuthScreen/SignUpScreen";

const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="SplashScreen" component={SplashScreen} />
    <RootStack.Screen name="SignInScreen" component={SignInScreen} />
    <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
    <RootStack.Screen name="AppNavigation" component={AppNavigation} />
  </RootStack.Navigator>
);

export default RootStackScreen;
