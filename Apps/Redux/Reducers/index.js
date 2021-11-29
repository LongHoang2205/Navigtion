import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import PhoneReducer from "./PhoneReducer";
import InformationReducer from "./InformationReducer";
export default combineReducers({
  login: LoginReducer,
  phone: PhoneReducer,
  information: InformationReducer,
});
