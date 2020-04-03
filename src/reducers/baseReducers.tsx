import Immutable from "immutable";
import { VALUE_CHANGED, DELETE_VALUE, FETCH_MOVIES_SUCCEEDED } from "actions";

const initialState = Immutable.fromJS({});

const baseReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case VALUE_CHANGED:
      return state.setIn(
        [...action.payload.field.split(".")],
        Immutable.fromJS(action.payload.value)
      );

    case DELETE_VALUE:
      return state.deleteIn([...action.payload.field.split(".")]);

    case FETCH_MOVIES_SUCCEEDED:
      return state.withMutations((s: any) => {
        let movieTitles: string[] = [];
        action.response.forEach((m: any) => {
          movieTitles.push(m.title);
          s.setIn(["movies", m.title, m.locations], Immutable.fromJS(m));
        });
        s.set("movieTitles", Array.from(new Set(movieTitles)));
      });

    default:
      return state;
  }
};

export default baseReducer;

export const getSelectedMovieDetail = (state: any) => {
  return (
    !!state.base.get("selectedMovieTitle") &&
    Object.values(
      state.base.getIn(["movies", state.base.get("selectedMovieTitle")]).toJS()
    )
  );
};

export const getSelectedMovieLocations = (state: any) => {
  return !!state.base.get("selectedMovieTitle")
    ? Object.keys(
        state.base
          .getIn(["movies", state.base.get("selectedMovieTitle")])
          .toJS()
      )
    : [];
};
