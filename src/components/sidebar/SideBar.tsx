import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { valueChanged, deleteValue } from "actions/baseActions";
import { getSelectedMovieDetail } from "reducers/baseReducers";

import SearchBar from "./searchbar/SearchBar";
import SearchDetail from "./searchdetail/SearchDetail";

const SideBar = () => {
  const dispatch = useDispatch();
  const [showSideBar, setShowSideBar] = useState(true);

  const { movies, selectedMovieDetail, selectedMovieTitle } = useSelector(
    (state: any) => ({
      movies: state.base.get("movieTitles"),
      selectedMovieDetail: getSelectedMovieDetail(state),
      selectedMovieTitle: state.base.get("selectedMovieTitle")
    })
  );

  const onMovieSelect = (value: string) => {
    onMovieClear();
    dispatch(valueChanged("selectedMovieTitle", value));
  };

  const onMovieClear = () => {
    dispatch(deleteValue("selectedMovieTitle"));
  };

  return (
    <div className={`sidebar ${showSideBar ? "" : "collapsed"}`}>
      {!!selectedMovieDetail ? (
        <SearchDetail
          onCollapse={() => setShowSideBar(!showSideBar)}
          data={selectedMovieDetail}
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
