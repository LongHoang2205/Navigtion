import { Platform, StyleSheet } from "react-native";
import { Colors } from "../../../Themes";

export default StyleSheet.create({
  root: {
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: Colors.white,
    paddingTop: Platform.OS === "ios" ? 44 : 0,
  },
});
