import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Button } from "../../Components";
import styles from "./Styles/SplashScreenStyle";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";

import SignInScreen from "./SignInScreen";

const SplashScreen = ({ navigation }) => {
  const onPressMove = () => {
    navigation.navigate("SignInScreen");
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duraton="1500"
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQevyjHfsNYl-ocoX4TWK4b2uoBYvJ8Zr_p6A&usqp=CAU",
          }}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.title}>Stay connected with everyone!</Text>
        <Text style={styles.text}>Sign in with account</Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={onPressMove}>
            <LinearGradient
              colors={["#08d4c4", "#01ab9d"]}
              style={styles.signIn}
            >
              <Text style={styles.textSign}>Get Started</Text>
              <MaterialIcons name="navigate-next" color="#fff" size={20} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};
export default SplashScreen;
