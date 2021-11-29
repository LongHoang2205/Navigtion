import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, FlatList } from "react-native";
import { InfoCard, InfoProfile, ButtonLogOut } from "../../Components";

import { Images } from "../../Themes";
import styles from "./Styles/MenuScreenStyle";

const MenuScreen = ({ navigation }) => {
  const arrInfoCard = [
    { text: "Uu dai" },
    { text: "Goi Hoi Vien" },
    { text: "Thu thach" },
    { text: "Member" },
    { text: "Da dat truoc" },
    { text: "Dia diem da luu" },
    { text: "So lien he S.O.S" },
    { text: "Ho so doanh nghiep" },
    { text: "Trung tam tro giup" },
    { text: "Cai dat" },
    { text: "Chia se phan hoi" },
    { text: "Lai xe cung Grab" },
  ];
  return (
    <View style={styles.root}>
      <FlatList
        data={arrInfoCard}
        renderItem={({ item }) => {
          return <InfoCard text={item.text} />;
        }}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={InfoProfile}
        ListFooterComponent={ButtonLogOut}
      />
    </View>
  );
};
export default MenuScreen;
