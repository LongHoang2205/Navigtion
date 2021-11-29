import React, { memo } from "react";
import { TouchableOpacity, View } from "react-native";

import styles from "./Styles/ButtonStyle";

const Button = ({ mode, style, children, ...props }) => {
  return (
    <TouchableOpacity
      style={[styles.btn, style]}
      labelStyle={styles.txt}
      mode={mode}
      {...props}
    >
      {children}
    </TouchableOpacity>
  );
};

export default memo(Button);
