import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./Styles/InfoProfileStyle";
import { Colors, Images, Metrics } from "../../Themes";
import { Ionicons } from "@expo/vector-icons";
import { InfoCard } from "../../Components";

export default function InfoProfile({ nameIcon, name, ...props }) {
  return (
    <View style={styles.root}>
      <Image
        source={{
          //   uri: "https://i.pinimg.com/736x/76/07/5c/76075c11bfe509ee9a11d9baa991c40d.jpg",
          uri: "https://product.hstatic.net/1000105776/product/159139279_880083652775240_4168158933203558627_n_c5e2e94d4a314801b8a8f38ec648c796.jpg",
        }}
        resizeMethod="resize"
        resizeMode="cover"
        style={styles.avatar}
      />
      <View style={styles.info}>
        <View style={styles.nameAndEdit}>
          <Text style={styles.name}>Long</Text>
          <TouchableOpacity
            color={Colors.pinkLight}
            style={styles.buttonEdit}
            onPress={() => console.log("Edit my info")}
          >
            <Ionicons
              name="ios-pencil-outline"
              size={20}
              color={Colors.pinkLight}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
