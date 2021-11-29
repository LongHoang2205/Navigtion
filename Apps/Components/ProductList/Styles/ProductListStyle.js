import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../../../Themes";

const width = Dimensions.get("window").width / 2 - 30;
export default StyleSheet.create({
  container: {
    height: 225,
    backgroundColor: Colors.white,
    width: width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },

  main: {
    alignItems: "flex-end",
  },
  icon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  vimg: {
    height: 100,
    alignItems: "center",
  },
  img: {
    flex: 1,
    resizeMode: "contain",
  },
  name: {
    fontWeight: "bold",
    fontSize: 14,
    marginTop: 10,
  },
  vprice: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
  },
  vadd: {
    height: 18,
    width: 18,
    backgroundColor: Colors.green,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  add: {
    fontSize: 12,
    color: Colors.white,
    fontWeight: "bold",
  },
});
