/**
 * @author vietnguyenhoangw
 * @email [vietnguyenhoangw@gmail.com]
 * @create date 2021-04-06 10:56:48
 * @modify date 2021-04-06 10:56:48
 * @desc [description]
 */
import React from "react";
import { ActivityIndicator, View } from "react-native";

// Styles
import styles from "./Styles/FPALoadingStyle";

function FPALoading() {
  return (
    <View style={styles.indicatorContainer}>
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="small" color="#0000ff" />
      </View>
    </View>
  );
}

export default FPALoading;
