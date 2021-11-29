// types
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../../Constants/ReduxType";

const initialState = {
  userData: null,

  isLoadingLogin: false,
  errorLogin: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoadingLogin: true,
        errorLogin: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        userData: action.data,
        isLoadingLogin: false,
        errorLogin: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoadingLogin: false,
        errorLogin: action.error,
      };
    default:
      return {
        ...state,
      };
  }
}
