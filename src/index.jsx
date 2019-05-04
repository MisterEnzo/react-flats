import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

import FlatList from './components/flat_list';
import Map from './components/map_container';

const Hello = ({ name }) => {
  return (
    <div>
      Hello,
      {name}
    </div>
  );
};

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <FlatList />
        <Map />
      </div>
    )
  }
};

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<App />, root);
}
