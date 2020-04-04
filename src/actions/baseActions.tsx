import {
  DELETE_VALUE,
  FETCH_MOVIES,
  VALUE_CHANGED,
  FETCH_MOVIES_FAILED,
  FETCH_MOVIES_SUCCEEDED
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
    url: "/yitu-d5am.json",
    onSuccess: FETCH_MOVIES_SUCCEEDED,
    onFailure: FETCH_MOVIES_FAILED
  }
});