import {
  GET_PHONE_REQUEST,
  GET_PHONE_SUCCESS,
  GET_PHONE_FAILURE,
} from "../../Constants/ReduxType";
import { put, takeEvery } from "redux-saga/effects";

// api
import { getPhoneApi } from "../../Services";

function* fetchPhoneList() {
  try {
    // gọi request gettodoapi
    const response = yield getPhoneApi();

    // nếu trả về 200 thì dispatch get todo success
    // nếu trả về mã khác thì get todo thất bại (mã lỗi khác 404, 403, ....)
    if (response.status === 200) {
      // sau khi lấy thành công, truyền vào data đã lấy cho redux type thành công (reducer xử lí)
      yield put({ type: GET_PHONE_SUCCESS, data: response.data });
    } else {
      yield put({ type: GET_PHONE_FAILURE, error: "that bai" });
    }
  } catch (e) {
    yield put({ type: GET_PHONE_FAILURE, error: "that bai" });
  }
}

// function* fetchInformationList() {
//   try {
//     // gọi request gettodoapi
//     const response = yield getInformationApi();

//     // nếu trả về 200 thì dispatch get todo success
//     // nếu trả về mã khác thì get todo thất bại (mã lỗi khác 404, 403, ....)
//     if (response.status === 200) {
//       // sau khi lấy thành công, truyền vào data đã lấy cho redux type thành công (reducer xử lí)
//       yield put({ type: GET_INFORMATION_SUCCESS, data: response.data });
//     } else {
//       yield put({ type: GET_INFORMATION_FAILURE, error: "that bai" });
//     }
//   } catch (e) {
//     yield put({ type: GET_INFORMATION_FAILURE, error: "that bai" });
//   }
// }

// chạy root saga
// tìm ReduxType tương ứng
// function* rootSaga() {
//   yield takeEvery(GET_PHONE_REQUEST, fetchPhoneList);
//   //   yield takeEvery(GET_INFORMATION_REQUEST, fetchInformationList);
// }

// export default rootSaga;

export { fetchPhoneList };
