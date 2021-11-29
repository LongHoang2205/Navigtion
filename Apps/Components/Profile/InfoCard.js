import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./Styles/InfoCardStyle";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Icon } from "../Icon";
import { showToast } from "../Layouts/Message";

export default function InfoCard({ name, text, ...props }) {
  return (
    <TouchableOpacity
      style={{ elevation: 0 }}
      onPress={() => {
        showToast({ title: text, type: "info", message: text });
      }}
    >
      <View style={styles.root}>
        {/* <Icon img={img} /> */}
        <Text style={styles.txt}>{text}</Text>
        <MaterialIcons
          name="keyboard-arrow-right"
          size={30}
          style={styles.icon}
        />
      </View>
    </TouchableOpacity>
  );
}
