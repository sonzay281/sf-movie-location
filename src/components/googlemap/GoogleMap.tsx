import React from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

interface MapProps {
  center?: any;
  zoom?: number;
  addressList?: any;
}
console.log(process.env.REACT_APP_MAP_API_KEY)
const GoogleMap = ({
  center = { lat: 27.6855, lng: 85.3458 },
  zoom = 10,
  addressList
}: MapProps) => (
  <GoogleMapReact
    bootstrapURLKeys={{
      key: process.env.REACT_APP_MAP_API_KEY || ""
    }}
    defaultCenter={center}
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
      <Marker
        key={address.id}
        lat={address.address?.lat}
        lng={address.address?.lng}
      >
        {/* <div className="map-marker--infowindow">
                  <b>{address.title}</b>
                  <br />
                  Email:{address.email}
                  <br />
                  Phone:{address.phone}
                </div> */}
      </Marker>
    ))}
  </GoogleMapReact>
);
export default GoogleMap;
