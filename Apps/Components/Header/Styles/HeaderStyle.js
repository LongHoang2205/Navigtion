import { Platform, StyleSheet } from "react-native";

export default StyleSheet.create({
  root: {
    flexDirection: "row",
    paddingTop: Platform.OS === "ios" ? 40 : 0,
    backgroundColor: "blue",
    paddingBottom: 10,
    alignItems: "center",
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    opacity: 1,
    position: "absolute",
    width: "100%",
    zIndex: 1,
  },
  left: {
    flex: 0.4,
    alignItems: "flex-start",
  },
});
