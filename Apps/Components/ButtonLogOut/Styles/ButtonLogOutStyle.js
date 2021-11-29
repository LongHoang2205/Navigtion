import React from "react";
import { StyleSheet } from "react-native";
import { Colors } from "../../../Themes";

export default StyleSheet.create({
  btnLogOutContainer: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  btn: {
    backgroundColor: Colors.pinkLight,
  },
  btnLogOut: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  txt: {
    textAlign: "center",
    fontSize: 15,
    color: "blue",
    // paddingLeft: 100,
    fontWeight: "bold",
  },
});
