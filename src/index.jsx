import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

import Flats from '../data/flats';

import FlatList from './components/flat_list';
import Map from './components/map_container';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: Flats,
      selectedFlat: {
        lat: 48.885707,
        lng: 2.343543
      }
    };
  }

  selectFlat = (flat) => {
    this.setState({selectedFlat : {
      lat: flat.lat,
      lng: flat.lng
    }});
    // console.log(`lat:${flat.lat} lng:${flat.lng}`);
  }

  render() {
    return (
      <div>
        <FlatList flats={this.state.flats} selectFlat={this.selectFlat} />
        <Map selectedFlat={this.state.selectedFlat} />
      </div>
    )
  }
};

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<App />, root);
}
