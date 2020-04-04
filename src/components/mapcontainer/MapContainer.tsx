import React, { memo } from "react";
import GoogleMap from "components/googlemap/GoogleMap";

const MapContainer = memo(({ addressList }: any) => {
  return (
    <div className="map-container">
      <GoogleMap addressList={addressList} />
    </div>
  );
});

export default MapContainer;
