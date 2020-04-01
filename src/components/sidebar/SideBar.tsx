import React, { useState } from "react";
import SearchBar from "./searchbar/SearchBar";
import SearchDetail from "./searchdetail/SearchDetail";
import { useDispatch, useSelector } from "react-redux";
import { valueChanged } from "actions/baseActions";

const SideBar = () => {
  const dispatch = useDispatch();
  const [showSideBar, setShowSideBar] = useState(true);

  const { movies, selectedMovie, selectedMovieTitle } = useSelector(
    (state: any) => ({
      movies: state.base.get("movieTitles"),
      selectedMovie:
        !!state.base.get("selectedMovieTitle") &&
        Object.values(
          state.base
            .getIn(["movies", state.base.get("selectedMovieTitle")])
            .toJS()
        ),
      selectedMovieTitle: state.base.get("selectedMovieTitle")
    })
  );

  const onMovieSelect = (value: string) => {
    dispatch(valueChanged("selectedMovieTitle", value));
  };

  const onMovieClear = () => {
    dispatch(valueChanged("selectedMovieTitle", ""));
  };

  return (
    <div className={`sidebar ${showSideBar ? "" : "collapsed"}`}>
      {!!selectedMovie ? (
        <SearchDetail
          onCollapse={() => setShowSideBar(!showSideBar)}
          data={selectedMovie}
          isCollapsed={showSideBar}
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
