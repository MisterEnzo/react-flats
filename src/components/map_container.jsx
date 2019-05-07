import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import API_KEY from '../api_key';

import MapMarker from './map_marker';

class Map extends Component {
  constructor(props){
    super(props);
  };

  render() {
    console.log(this.props.selectedFlat);
    return (
      <div className="map-container">
          <GoogleMapReact
           bootstrapURLKeys={{ key: API_KEY  }}
           defaultCenter={{
             lat: 48.885,
             lng: 2.34
           }}
           defaultZoom={11}
          >
            <MapMarker
              lat={this.props.selectedFlat.lat}
              lng={this.props.selectedFlat.lng}
            />
          </GoogleMapReact>
      </div>
    );
  }
}


export default Map;
