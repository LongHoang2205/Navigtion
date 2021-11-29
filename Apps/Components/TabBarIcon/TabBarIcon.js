import React from "react";
import { Image, Text, View } from "react-native";
import { Router } from "../../Containers/router";
import styles from "./Styles/TabBarIconStyle";
import { Images, Colors, Metrics } from "../../Themes";

export default function TabBarIcon({ color, name, focused, ...props }) {
  return (
    <View style={styles.root}>
      {/* {name === Router.Home && (
        <Image
          source={Images.home}
          style={{
            width: 30,
            height: 25,
            resizeMode: "contain",
          }}
        />
      )} */}
      {name === Router.Shop && (
        <Image
          source={focused ? Images.home : Images.home1}
          style={{ width: 30, height: 25, resizeMode: "contain" }}
        />
      )}
      {/* {name === Router.Market && (
        <Image
          source={Images.market}
          style={{ width: 30, height: 25, resizeMode: "contain" }}
        />
      )} */}
    </View>
  );
}
