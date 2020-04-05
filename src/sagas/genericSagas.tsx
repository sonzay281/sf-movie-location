import { put, call } from "redux-saga/effects";

import { get } from "apiUtils/api";

export function* fetchData({ payload }: any) {
  try {
    const { data } = yield call(get, payload);
    yield put({ type: payload.onSuccess, response: data });
  } catch (error) {
    yield put({ type: payload.onFailure, error });
  }
}
