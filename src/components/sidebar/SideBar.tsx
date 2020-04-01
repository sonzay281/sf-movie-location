import React, { useState } from "react";
import SearchBar from "./searchbar/SearchBar";
import SearchDetail from "./searchdetail/SearchDetail";
import { useDispatch, useSelector } from "react-redux";
import { valueChanged } from "actions/baseActions";

const SideBar = () => {
  const dispatch = useDispatch();
  const [showDetail, setShowDetail] = useState(false);

  const { movies, selectedMovie, selectedMovieTitle } = useSelector(
    (state: any) => ({
      movies: state.base.get("movieTitles"),
      selectedMovie: !!state.base.get("selectedMovieTitle")
        ? Object.values(
            state.base
              .getIn(["movies", state.base.get("selectedMovieTitle")])
              .toJS()
          )
        : [],
      selectedMovieTitle: state.base.get("selectedMovieTitle")
    })
  );

  const onMovieSelect = (value: string) => {
    setShowDetail(true);
    dispatch(valueChanged("selectedMovieTitle", value));
  };

  const onMovieClear = () => {
    setShowDetail(false);
    dispatch(valueChanged("selectedMovieTitle", ""));
  };

  return (
    <div className="sidebar">
      {!!showDetail ? (
        <SearchDetail
          onCollapse={() => setShowDetail(false)}
          data={selectedMovie}
        />
      ) : (
        ""
      )}
      <SearchBar
        movies={movies}
        selectedMovieTitle={selectedMovieTitle}
        onSelect={onMovieSelect}
        onClear={onMovieClear}
      />
    </div>
  );
};

export default SideBar;
