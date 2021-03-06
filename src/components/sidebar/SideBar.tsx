import React, { useState, memo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getSelectedMovieDetail } from "reducers/baseReducers";
import { valueChanged, deleteValue } from "actions/baseActions";

import SearchBar from "./searchbar/SearchBar";
import SearchDetail from "./searchdetail/SearchDetail";

/**
 *This component contains the Side Search Bar and Search detail container
 * @param addressList array of addresses
 */

const SideBar = memo(({ addressList }: any) => {
  const dispatch = useDispatch();
  const [showSideBar, setShowSideBar] = useState(true);

  /**
   * This selector selects the following data from redux store:
   * - prevoiusly stored movie titles
   * - selected movie title
   * - selected movie detail
   */
  const { movieTitles, selectedMovieDetail, selectedMovieTitle } = useSelector(
    (state: any) => ({
      movieTitles: state.base.get("movieTitles"),
      selectedMovieDetail: getSelectedMovieDetail(state) || [],
      selectedMovieTitle: state.base.get("selectedMovieTitle"),
    })
  );

  const onMovieSelect = (value: string) => {
    onMovieClear();
    dispatch(valueChanged("selectedMovieTitle", value));
  };

  const onMovieClear = () => dispatch(deleteValue("selectedMovieTitle"));

  const locations = selectedMovieDetail
    ?.map(({ locations }: any) => ({
      value: locations,
      isVarified: addressList.includes(locations),
    }))
    .sort();

  return (
    <div className={`sidebar ${showSideBar ? "" : "collapsed"}`}>
      {!!selectedMovieDetail.length ? (
        <SearchDetail
          onCollapse={() => setShowSideBar(!showSideBar)}
          movieDetail={selectedMovieDetail[0]}
          isCollapsed={showSideBar}
          locations={locations}
        />
      ) : (
        ""
      )}
      <SearchBar
        movieTitles={movieTitles}
        selectedMovieTitle={selectedMovieTitle}
        onSelect={onMovieSelect}
        onClear={onMovieClear}
      />
    </div>
  );
});

export default SideBar;
