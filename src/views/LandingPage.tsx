import React, { useEffect } from "react";

import SideBar from "components/sidebar/SideBar";
import MapContainer from "components/mapcontainer/MapContainer";
import { fetchAllMovies } from "actions/baseActions";
import { useDispatch } from "react-redux";

const LandingPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllMovies());
  });
  return (
    <div className="container">
      <SideBar />
      <MapContainer />
    </div>
  );
};
export default LandingPage;
