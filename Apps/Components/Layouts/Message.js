import Toast from "react-native-toast-message";

export const showToast = ({ message, type, title }) => {
  Toast.show({
    type: type,
    position: "top",
    text1: title,
    text2: message,
    visibilityTime: 4000,
    autoHide: true,
    topOffset: 150,
    bottomOffset: 40,
    //onShow:()=>{},
    //onHide:()=>{},
    onPress: () => {},
  });
};
