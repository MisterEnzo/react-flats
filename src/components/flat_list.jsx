import React, { Component } from 'react';

import Flat from './flat';

class FlatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: [
        1,2,3,4,5,6
      ]
    }
  }

  render() {
    return (
      <div className="flat-list">
        {this.state.flats.map((flat => {
          return (
            <Flat />
          )
        }))}
      </div>
    )
  }
}

export default FlatList;
