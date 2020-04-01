//you may add takeLeading as per the requirements
import { takeLatest } from "redux-saga/effects";

import * as actions from "actions";
import { fetchData } from "./genericSagas";

export default function* rootSaga() {
  yield takeLatest(actions.FETCH_MOVIES, fetchData);
}
