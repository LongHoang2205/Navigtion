import React, { useEffect, useState } from "react";
import axios from "axios";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

import styles from "./Styles/HomeScreenStyles";
//data
// import data from "../../Data/iphone.js";
//components
import { ProductList } from "../../Components";
import { SafeAreaView } from "react-native-safe-area-context";

import { useDispatch, useSelector } from "react-redux";
import { removeIphoneAction } from "../../Redux/Actions";

import MenuScreen from "../MenuScreen/MenuScreen";
import NotificationScreen from "../NotificationScreen/NotificationScreen";

import { getInformationRequestAction } from "../../Redux/Actions/InformationAction";

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const changeHeartState = useSelector((state) => state.phone);
  const data = changeHeartState.iphone;

  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 20 }}>
      <FlatList
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        numColumns={2}
        data={data}
        renderItem={({ item }) => <ProductList item={item} />}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
