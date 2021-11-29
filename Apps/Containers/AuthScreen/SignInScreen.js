import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StatusBar, Alert } from "react-native";
import styles from "./Styles/SignInScreenStyle";
import { MaterialIcons, FontAwesome, Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";
import { TouchableOpacity } from "react-native-gesture-handler";

//Screen
import AppNavigation from "../../Containers/BottomTab";
// import HomeScreen from "../../Containers/HomeScreen/HomeScreen";
// import SignUpScreen from "./SignUpScreen";

//components
import { FPALoading } from "../../Components";

// redux
import { useSelector, useDispatch } from "react-redux";
import { loginRequestAction } from "../../Redux/Actions/LoginAction";

// functions
import { AppFunctions } from "../../Functions";

const SignInScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.login);

  // props
  const isLoadingLogin = loginState.isLoadingLogin;
  const previousIsLoadingLogin = AppFunctions.usePrevious(isLoadingLogin);
  const errorLogin = loginState.errorLogin;
  const userData = loginState.userData;

  useEffect(() => {
    if (previousIsLoadingLogin && !isLoadingLogin) {
      if (userData) {
        navigation.navigate("AppNavigation");
      } else {
        Alert.alert("Thông báo", `Login thất bại: ${errorLogin}`);
      }
    }
  }, [isLoadingLogin]);

  // const onChangeTextName = (text) => {
  //   setNameInput(text);
  // };

  // const onChangeTextPassword = (text) => {
  //   setPassWordInput(text);
  // };

  const onPressHome = () => {
    dispatch(
      loginRequestAction({
        username: "vnh@gmail.com",
        password: "123123123",
      })
    );
  };

  const renderLoading = () => {
    return isLoadingLogin && <FPALoading />;
  };

  const [data, setData] = useState({
    email: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
  });

  const textInputChange = (value) => {
    if (value.length !== 0) {
      setData({
        ...data,
        email: value,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: value,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = (value) => {
    setData({
      ...data,
      password: value,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const onPressMove = () => {
    navigation.navigate("SignUpScreen");
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#099387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#05375a" size={20} />
          <TextInput
            placeholder="Your email"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(value) => textInputChange(value)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
        <View style={styles.action}>
          <FontAwesome name="lock" color="#05375a" size={20} />
          <TextInput
            placeholder="Your Password"
            style={styles.textInput}
            autoCapitalize="none"
            secureTextEntry={data.secureTextEntry ? true : false}
            onChangeText={(value) => handlePasswordChange(value)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={onPressHome}>
          <LinearGradient colors={["#08d4c4", "#01ab9d"]} style={styles.signIn}>
            <Text style={[styles.textSign, { color: "#fff" }]}>Sign In</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPressMove}
          style={[
            styles.signIn,
            {
              borderColor: "#009387",
              borderWidth: 1,
              marginTop: 15,
            },
          ]}
        >
          <Text style={[styles.textSign, { color: "#009387" }]}>Sign Up</Text>
        </TouchableOpacity>
      </Animatable.View>
      {renderLoading()}
    </View>
  );
};
export default SignInScreen;
