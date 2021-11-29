import React from "react";
import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabBarIcon } from "../Components";
import { Colors } from "../Themes";

//Redux
import { Provider } from "react-redux";

// Screen

import HomeScreen from "../Containers/HomeScreen/HomeScreen";
import WatchScreen from "../Containers/WatchScreen/WatchScreen";
import MarketPlaceScreen from "../Containers/MarketPlaceScreen/MarketPlaceScreen";
import GroupScreen from "../Containers/GroupScreen/GroupScreen";
import NotificationScreen from "../Containers/NotificationScreen/NotificationScreen";
import MenuScreen from "../Containers/MenuScreen/MenuScreen";

import { View } from "react-native";
// import { Router } from "./Apps/Containers/router";

import Toast from "react-native-toast-message";
import {
  FontAwesome,
  Ionicons,
  FontAwesome5,
  Feather,
} from "@expo/vector-icons";

// Auth stack

//const HomeStack = createStackNavigator();
// function HomeStacks() {
//   return (
//     <HomeStack.Navigator
//       screenOptions={{
//         headerShown: false,
//       }}
//       initialRouteName="none"
//     >
//       <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
//       <HomeStack.Screen name="DetailsScreen" component={DetailsScreen} />
//     </HomeStack.Navigator>
//   );
// }

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function BottomTab() {
  return (
    <Tab.Navigator
      // tabBarOptions={{
      //   style: {
      //     borderTopStartRadius: 25,
      //     borderTopEndRadius: 25,
      //   },
      // }}
      tabBarOptions={{
        labelStyle: { fontSize: 8 },
        showIcon: true,
        //showLabel: false,
        //activeTintColor: "red",
        //inactiveTintColor: "black",
      }}

      //tabBar={() => <View />}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        showIcon={true}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, focused }) => (
            //<TabBarIcon name={Router.Home} focused={focused} />
            <FontAwesome name="home" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Watch"
        component={WatchScreen}
        showIcon={true}
        options={{
          tabBarLabel: "Watch",
          tabBarIcon: ({ color }) => (
            //<TabBarIcon name={Router.Market} />
            <Ionicons name="tv" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Market"
        component={MarketPlaceScreen}
        showIcon={true}
        options={{
          tabBarLabel: "Marketplace",
          tabBarIcon: ({ color }) => (
            //<TabBarIcon name={Router.Shop} focused={focused} />
            <FontAwesome5 name="store" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Group"
        component={GroupScreen}
        showIcon={true}
        options={{
          tabBarLabel: "Group",
          tabBarIcon: ({ color }) => (
            //<TabBarIcon name={Router.Shop} focused={focused} />
            <FontAwesome name="users" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        showIcon={true}
        options={{
          tabBarLabel: "Notification",
          tabBarIcon: ({ color }) => (
            //<TabBarIcon name={Router.Shop} focused={focused} />
            <FontAwesome name="bell" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuScreen}
        showIcon={true}
        options={{
          tabBarLabel: "Menu",
          tabBarIcon: ({ color }) => (
            //<TabBarIcon name={Router.Shop} focused={focused} />
            <Feather name="menu" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTab;
