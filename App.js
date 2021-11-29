import { StatusBar } from "expo-status-bar";
import React from "react";
import { useColorScheme, View, Text } from "react-native";
import { Colors } from "./Apps/Themes";
import { NavigationContainer } from "@react-navigation/native";
import Toast from "react-native-toast-message";

import AppNavigation from "./Apps/Containers/BottomTab";

import RootStackScreen from "./Apps/Containers/RootStackScreen";
import { Provider } from "react-redux";
import store from "./Apps/Redux/Store/store";

const App = () => {
  const isDarkMode = useColorScheme() === "dark";
  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <AppNavigation />
    </View>
  );
};
export default () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStackScreen />
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </NavigationContainer>
    </Provider>
  );
};
