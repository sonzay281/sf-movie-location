import { put, call } from "redux-saga/effects";

import { get, post, del, patch } from "apiUtils/api";

export function* fetchData({ payload }: any) {
  try {
    const {
      data: { response }
    } = yield call(get, payload);
    yield put({ type: payload.onSuccess, response });
  } catch (error) {
    yield put({ type: payload.onFailure, error });
  }
}

export function* postData({ payload }: any) {
  try {
    const {
      data: { response }
    } = yield call(post, payload);
    yield put({ type: payload.onSuccess, response });
  } catch (error) {
    yield put({ type: payload.onFailure, error });
  }
}

export function* deleteData({ payload }: any) {
  try {
    const {
      data: { response }
    } = yield call(del, payload);
    yield put({ type: payload.onSuccess, response });
  } catch (error) {
    yield put({ type: payload.onFailure, error });
  }
}

export function* patchData({ payload }: any) {
  try {
    const {
      data: { response }
    } = yield call(patch, payload);
    yield put({ type: payload.onSuccess, response });
  } catch (error) {
    yield put({ type: payload.onFailure, error });
  }
}
