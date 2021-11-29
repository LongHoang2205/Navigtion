/**
 * @author vietnguyenhoangw
 * @email [vietnguyenhoangw@gmail.com]
 * @create date 2021-04-06 10:56:51
 * @modify date 2021-04-06 10:56:51
 * @desc [description]
 */
import { StyleSheet } from "react-native";

// themes
import { Metrics, Colors } from "../../../../Themes";

export default StyleSheet.create({
  indicatorContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    height: Metrics.screenHeight,
    zIndex: 100,
  },
  loadingContainer: {
    backgroundColor: Colors.white,
    padding: 15,
    borderRadius: 100,
  },
});
