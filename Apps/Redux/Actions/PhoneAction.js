import {
  GET_PHONE_REQUEST,
  GET_PHONE_SUCCESS,
  GET_PHONE_FAILURE,
  CHANGE_HEART,
  ADD_PHONE,
  REMOVE_PHONE,
  EDIT_PHONE,
} from "../../Constants/ReduxType";

export const getPhoneRequestAction = (payload) => ({
  type: GET_PHONE_REQUEST,
  payload,
});

export const getPhoneSuccessAction = (payload) => ({
  type: GET_PHONE_SUCCESS,
  payload,
});

export const getPhoneFailureAction = (payload) => ({
  type: GET_PHONE_FAILURE,
  payload,
});

export const changeHeartAction = (payload) => ({
  type: CHANGE_HEART,
  payload,
});

export const addPhoneAction = (payload) => ({
  type: ADD_PHONE,
  payload,
});

export const removePhoneAction = (payload) => ({
  type: REMOVE_PHONE,
  payload,
});
export const editPhoneAction = (payload) => ({
  type: EDIT_PHONE,
  payload,
});
