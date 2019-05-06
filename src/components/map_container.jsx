import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import MapMarker from './map_marker';

class Map extends Component {
  constructor(props){
    super(props);
  };

  render() {
    return (
     // Important! Always set the container height explicitly
      <div className="map-container">
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
           bootstrapURLKeys={{ key: 'AIzaSyBmlHNLD3-qWdW2_SIMOnvz3GFg7QmMZ_A' }}
           defaultCenter={{
             lat: this.props.selectedFlat.lat,
             lng: this.props.selectedFlat.lng
           }}
           defaultZoom={11}
          >
            <MapMarker
              lat={this.props.selectedFlat.lat}
              lng={this.props.selectedFlat.lat}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}


export default Map;
