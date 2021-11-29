import React, { memo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./Styles/ButtonLogOutStyle";
import { Button } from "../../Components";
import { Colors } from "../../Themes";
import { NavigationHelpersContext } from "@react-navigation/core";

const ButtonLogOut = ({ navigation }) => {
  return (
    <View style={styles.btnLogOutContainer}>
      <Button
        style={styles.btn}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <View style={styles.btnLogOut}>
          <Feather name="log-out" size={25} color="blue" />
          <Text style={styles.txt}>Log Out</Text>
          <Feather />
        </View>
      </Button>
    </View>
  );
};
export default memo(ButtonLogOut);
