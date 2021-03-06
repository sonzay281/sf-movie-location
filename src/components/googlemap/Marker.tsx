import React, { useState } from "react";

import MarkerImage from "assets/icons/marker.png";
/**
 *
 * @param children children element i.e info window
 */
const Marker = ({ children, isInfoVisible = false }: any) => {
  const [showDetail, setShowDetail] = useState(isInfoVisible);
  return (
    <div
      className="map-marker"
      onMouseUp={() => {
        setShowDetail(!showDetail);
      }}
      onMouseOut={() => () => setShowDetail(false)}
    >
      <img src={MarkerImage} alt="" height="20" />
      {showDetail ? children : ""}
    </div>
  );
};
export default Marker;
