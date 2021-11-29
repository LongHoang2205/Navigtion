import { takeEvery } from "redux-saga/effects";

// types
import * as ActionTypes from "../../Constants";

// sagas
import { loginSaga } from "./LoginSaga";
import { fetchInformationList } from "./InformationSaga";

function* rootSaga() {
  yield takeEvery(ActionTypes.LOGIN_REQUEST, loginSaga);
  yield takeEvery(ActionTypes.GET_INFORMATION_REQUEST, fetchInformationList);
}

export default rootSaga;
