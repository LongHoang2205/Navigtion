import React from "react";
import { Text, View, Image, TouchableOpacity, Alert } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import styles from "./Styles/ProductListStyle";
import { Colors } from "../../Themes";
import { NavigationHelpersContext } from "@react-navigation/core";
import MenuScreen from "../../Containers/MenuScreen/MenuScreen";
import {
  removePhoneAction,
  changeHeartAction,
} from "../../Redux/Actions/PhoneAction";
import { useDispatch, useSelector } from "react-redux";

const ProductList = ({ item, onPressBtn, onPressIcon, color }) => {
  const dispatch = useDispatch();
  const phoneSelector = useSelector((state) => state);
  const onPressDelete = (item) => {
    dispatch(removePhoneAction({ item }));
  };
  const onPressChange = (heart) => {
    dispatch(changeHeartAction({ heart }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <TouchableOpacity
          onPress={() => onPressChange(item)}
          style={[
            styles.icon,
            {
              backgroundColor: Colors.pink,
              // ? "rgba(245,42,42,0)"
              // : "rgba(0,0,0,2",
            },
          ]}
        >
          <MaterialIcons
            color={item.like ? Colors.red : Colors.green}
            name="favorite"
            size={18}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.vimg}>
        <Image style={styles.img} source={item.img} />
      </View>
      <Text style={styles.name}>{item.name}</Text>
      <View style={styles.vprice}>
        <Text style={styles.price}>${item.price}</Text>
        <TouchableOpacity
          style={styles.vadd}
          onPress={() => onPressDelete(item)}
        >
          <Text style={styles.add}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductList;
