import {
  VALUE_CHANGED,
  DELETE_VALUE,
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCEEDED,
  FETCH_MOVIES_FAILED
} from "actions";

export const valueChanged = (field: string, value: any) => ({
  type: VALUE_CHANGED,
  payload: { field, value }
});

export const deleteValue = (field: string) => ({
  type: DELETE_VALUE,
  payload: { field }
});

export const fetchAllMovies = () => ({
  type: FETCH_MOVIES,
  payload: {
    // url: "/yitu-d5am.json",
    url: "movies.json",
    onSuccess: FETCH_MOVIES_SUCCEEDED,
    onFailure: FETCH_MOVIES_FAILED
  }
});

export const createAction = (data: any) => ({
  /*
    type: CREATE,
    payload: {
      url: '/create',
      data,
      onSuccess: CREATE_SUCCEEDED,
      onFailure: CREATE_FAILED
    }
  */
});
