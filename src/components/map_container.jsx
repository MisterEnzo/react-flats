import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
     // Important! Always set the container height explicitly
     <div style={{ height: '100vh', width: '100%' }}>
       <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBmlHNLD3-qWdW2_SIMOnvz3GFg7QmMZ_A' }}
        defaultCenter={{
          lat: this.props.selectedFlat.lat,
          lng: this.props.selectedFlat.lng
        }}
        defaultZoom={11}
       >
         <AnyReactComponent
           lat={59.955413}
           lng={30.337844}
           text="My Marker"
         />
       </GoogleMapReact>
     </div>
    );
  }
}


export default Map;
