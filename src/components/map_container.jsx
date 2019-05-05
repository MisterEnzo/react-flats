import React from 'react';
import GoogleMapReact from 'google-map-react';

const Map = (props) => {
  return(
    <div className="map-container">Map
      <p>Coordinates:{props.selectedFlat.lat} {props.selectedFlat.lng}</p>
    </div>
  )
}

export default Map;
