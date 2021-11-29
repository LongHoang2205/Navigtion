import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../../Constants/ReduxType";

export const loginRequestAction = (payload) => ({
  type: LOGIN_REQUEST,
  payload,
});

export const loginSuccessAction = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginFailureAction = (payload) => ({
  type: LOGIN_FAILURE,
  payload,
});
