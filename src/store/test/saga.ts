import { all, call, put, fork, takeEvery } from "redux-saga/effects";
import { IActionTypeParam } from "../../api/models/base.model";
import TestModel from "../../api/models/test.model";
import { TestActionTypes } from "./types";
import {fetchTestSuccess, fetchTestError} from "./actions";

// ----------------------------------------------------------------
// Description: List - Get test questions
// NOTE: Need correct information in QS
// ----------------------------------------------------------------
function* handleFetchTest(action: IActionTypeParam) {
  try {
    const res = yield call(TestModel.fetchTest);
    if (res.error) {
      console.error(res.error);
      yield put(fetchTestError(res.error));
    } else {
      yield put(fetchTestSuccess(res.data.results));
    }
  } catch (err) {
    console.error(err);
    yield put(fetchTestError(err));
  }
}

function* watchFetchTestRequest() {
  yield takeEvery(TestActionTypes.FETCH_TEST, handleFetchTest);
}

// ----------------------------------------------------------------
// We can also use `fork()` here to split our saga into multiple watchers.
export function* testSaga() {
  yield all([fork(watchFetchTestRequest)]);
}
