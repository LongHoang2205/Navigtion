import React, { memo } from "react";
import { KeyboardAvoidingView, Platform, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./Styles/BackgroundStyle";

const Background = ({
  children,
  isButton = false,
  naviation,
  relative = false,
}) => {
  return (
    <View style={styles.background}>
      <Header
        isBack={true}
        isBorder={true}
        isRight={false}
        styleRoot={{ backgroundColor: "transparent" }}
      />
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior="position"
          keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ alignItems: "center" }}>{children}</View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};
export default memo(Background);
