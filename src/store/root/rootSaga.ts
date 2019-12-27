/*
 *   File:           rootSaga.ts
 *   Description:    this is where the Sagas comes together
 *   Author:         RK
 */

import { all, fork } from "redux-saga/effects";

/// ADD ALL Local Sagas:
import { userSaga } from "../user/saga";
import { testSaga } from "../test/saga";



export function* rootSaga() {
  yield all([
    fork(userSaga),
    fork(testSaga)
  ]);
}
