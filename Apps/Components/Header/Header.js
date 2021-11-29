import { useNavigation } from "@react-navigation/native";
import React, { memo } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Icon } from "..";
import { Router } from "../../Containers/router";
import styles from "./Styles/HeaderStyle";

const Header = ({
  title,
  isBack,
  onPress,
  isBorder,
  styleRoot,
  isRight = true,
  ...props
}) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.root, styleRoot]}>
      <View style={styles.left}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          {isBack ? (
            <View
              style={[
                styles.icon,
                { marginLeft: 12 },
                isBorder ? { backgroundColor: "green" } : {},
              ]}
            >
              <Icon
                name="left"
                size={20}
                color={isBorder ? "white" : "yellow"}
              />
            </View>
          ) : (
            <View
              style={[
                styles.icon,
                { marginLeft: 12 },
                isBorder ? { backgroundColor: "green" } : {},
              ]}
            >
              <Icon
                name="clockcircleo"
                size={20}
                color={isBorder ? "white" : "yellow"}
              />
            </View>
          )}
        </TouchableOpacity>
      </View>
      <Text style={[styles.center, { color: isBorder ? "blue" : "yellow" }]}>
        {title}
      </Text>
      <View style={styles.right}>
        {isRight && (
          <TouchableOpacity onPress={() => navigation.navigate(Router.Message)}>
            <View
              style={[
                styles.icon,
                { marginRight: 8 },
                isBorder ? { backgroundColor: "green" } : {},
              ]}
            >
              <Icon
                name="message1"
                size={20}
                color={isBorder ? "white" : "yellow"}
              />
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
export default memo(Header);
