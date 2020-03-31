import React from "react";

import SideBar from "components/sidebar/SideBar";
import MapContainer from "components/mapcontainer/MapContainer";

const LandingPage = () => {
  return (
    <div className="container">
      <SideBar />
      <MapContainer />
    </div>
  );
};
export default LandingPage;
