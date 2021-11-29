import React from "react";
import { Image, View } from "react-native";
import styles from "./Styles/IconStyle";

export default function Icon({ img }) {
  return (
    <View style={styles.root}>
      <Image source={img} />
    </View>
  );
}
