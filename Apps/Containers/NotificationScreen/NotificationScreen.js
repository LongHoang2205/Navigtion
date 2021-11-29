import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";

// styles
import styles from "./Styles/NotificationScreenStyle";

// components
import {
  SMIconButton,
  SMHeader,
  SMTextInput,
  SMButton,
} from "../../Components";

// Themes
import { Images } from "../../Themes";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { getInformationRequestAction } from "../../Redux/Actions/InformationAction";

export default function NotificationScreen({ navigation }) {
  const dispatch = useDispatch();
  const informationState = useSelector((state) => state.information);

  const onPressBack = () => {
    navigation.goBack();
  };

  const onPressGetInformation = () => {
    // dispatch tới todo request - redux
    dispatch(getInformationRequestAction());
  };

  const renderItem = (item) => {
    return (
      <View
        style={{
          height: 120,
          backgroundColor: "grey",
          marginBottom: 20,
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* <Text style={{ margin: 10, color: "white" }}>
          Name: {item.item.name}
        </Text>
        <Text style={{ margin: 10, color: "white" }}>
          Email: {item.item.email}
        </Text>
        <Text style={{ margin: 10, color: "white" }}>
          Phone: {item.item.phone}
        </Text> */}
        <Text style={{ margin: 10, color: "white" }}>
          Name: {item.item.name}
        </Text>
        <Text style={{ margin: 10, color: "white" }}>
          Email: {item.item.price}
        </Text>
        <Text style={{ margin: 10, color: "white" }}>
          Street: {item.item.about}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        {/* <SMHeader
          title={"Information"}
          titleStyle={styles.titleheader}
          leftIconSource={Images.back}
          leftIconPress={onPressBack}
        /> */}
        {informationState.informationError ? (
          <Text style={{ margin: 40 }}>Không có data</Text>
        ) : (
          <FlatList
            data={informationState.informationList}
            keyExtractor={(item, index) => item + index.toString()}
            renderItem={(item) => renderItem(item)}
          />
        )}
        <TouchableOpacity onPress={onPressGetInformation}>
          <Text>Press</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
