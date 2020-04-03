import React from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

interface MapProps {
  center?: any;
  zoom?: number;
  addressList?: any;
}

const GoogleMap = ({
  center = { lat: 27.6855, lng: 85.3458 },
  zoom = 10,
  addressList = []
}: MapProps) => {
  const defaultCenter = center;
  center =
    addressList.length && addressList[0].lat ? addressList[0] : undefined;
  return (
    <GoogleMapReact
      bootstrapURLKeys={{
        key: process.env.REACT_APP_MAP_API_KEY || ""
      }}
      defaultCenter={defaultCenter}
      center={center}
      defaultZoom={zoom}
      yesIWantToUseGoogleMapApiInternals
      options={{
        panControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
        zoomControl: false
      }}
    >
      {addressList?.map((address: any) => (
        <Marker key={address.location} lat={address?.lat} lng={address?.lng} />
      ))}
    </GoogleMapReact>
  );
};

export default GoogleMap;
