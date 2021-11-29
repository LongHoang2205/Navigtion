import { put } from "redux-saga/effects";

// types
import * as ActionTypes from "../../Constants";

// api
import { LoginApi } from "../../Services/LoginService";

function* loginSaga(action) {
  try {
    // gọi request
    const response = yield LoginApi(action);
    // nếu trả về 200 thì dispatch success
    // nếu trả về !200 thì thất bại (404, 403, ....)
    if (response.status === 200) {
      // sau khi lấy thành công, pass vào data đã lấy cho redux type thành công (reducer xử lí)
      yield put({ type: ActionTypes.LOGIN_SUCCESS, data: response.data });
    } else {
      yield put({ type: ActionTypes.LOGIN_FAILURE, error: response.data });
    }
  } catch (e) {
    yield put({ type: ActionTypes.LOGIN_FAILURE, error: e.error });
  }
}

export { loginSaga };
