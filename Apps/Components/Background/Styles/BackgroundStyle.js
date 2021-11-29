import { Platform, StyleSheet } from "react-native";

export default StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "ios" ? 40 : 0,
  },
  container: {
    flex: 1,
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
  },
});
