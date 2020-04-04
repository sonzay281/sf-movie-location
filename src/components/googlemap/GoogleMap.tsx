import React from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

/**
 *
 * @param center default center point of map
 * @param zoom default zoom value
 * @param addressList list of markers to show in map
 */
const GoogleMap = ({
  center = { lat: 37.7826469, lng: -122.4866979 },
  zoom = 12,
  addressList = [],
}: MapProps) => {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{
        key: process.env.REACT_APP_MAP_API_KEY || "",
      }}
      defaultCenter={center}
      defaultZoom={zoom}
      yesIWantToUseGoogleMapApiInternals
      options={{
        panControl: true,
        mapTypeControl: true,
        fullscreenControl: true,
        zoomControl: true,
      }}
    >
      {addressList?.map((address: any) => (
        <Marker key={address.location} lat={address?.lat} lng={address?.lng}>
          <div className="info-window">
            <span className="close">
              <FontAwesomeIcon icon={faTimes} />
            </span>
            {address.location}
          </div>
        </Marker>
      ))}
    </GoogleMapReact>
  );
};

export default GoogleMap;

interface MapProps {
  center?: any;
  zoom?: number;
  addressList?: any;
}
