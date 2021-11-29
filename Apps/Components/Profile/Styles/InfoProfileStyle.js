import React from "react";
import { StyleSheet } from "react-native";
import { Colors } from "../../../Themes";

export default StyleSheet.create({
  root: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderBottomColor: Colors.blueLight,
    borderBottomWidth: 1,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  info: {
    marginLeft: 15,
    justifyContent: "center",
    marginTop: -15,
  },
  nameAndEdit: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonEdit: {
    borderRadius: 50,
    marginLeft: 10,
  },
  name: {
    fontSize: 20,
    color: Colors.black,
  },
  title: {
    color: Colors.black,
    fontSize: 15,
  },
});
