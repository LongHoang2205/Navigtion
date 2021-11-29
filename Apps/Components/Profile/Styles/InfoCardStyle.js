import React from "react";
import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  root: {
    flexDirection: "row",
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingLeft: 15,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  txt: {
    marginTop: 10,
    color: "black",
    fontSize: 14,
  },
  icon: {
    alignSelf: "center",
    color: "gray",
  },
});
