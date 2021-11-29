import { StyleSheet } from "react-native";
import { Images, Colors, Metrics } from "../../../Themes";

export default StyleSheet.create({
  root: {
    alignItems: "center",
    borderRadius: 25,
    paddingVertical: 4,
  },
  text: {
    fontSize: 20,
    color: Colors.pinkLight,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});
