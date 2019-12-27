import { all, fork, put, takeEvery } from "redux-saga/effects";
import { push } from "connected-react-router";
import { UserActionTypes } from "./types";

// ----------------------------------------------------------------
// Description: List - Get all Users
// NOTE: Need correct information in QS
// ----------------------------------------------------------------
// const url = `${process.env.REACT_APP_API_URL}?type=users`;
function* handleLogin(action: any) {
  yield true;
}

// This is our watcher function. We use `take*()` functions to watch Redux for a specific action
// type, and run our saga, for example the `handleFetch()` saga above.
function* watchLoginRequest() {
  yield takeEvery(UserActionTypes.FETCH_USER_LOGIN, handleLogin);
}

// ----------------------------------------------------------------
// Log user out
function* handleLogout(action: any) {
  window.sessionStorage.removeItem("AUTH_TOKEN");
  window.sessionStorage.removeItem("USERNAME");
  yield put(push("/login"));
}
function* watchLogoutRequest() {
  yield takeEvery(UserActionTypes.FETCH_USER_LOGOUT, handleLogout);
}
// ----------------------------------------------------------------
// We can also use `fork()` here to split our saga into multiple watchers.
export function* userSaga() {
  yield all([fork(watchLoginRequest), fork(watchLogoutRequest)]);
}
