import React, { Component } from 'react';

import Flat from './flat';

class FlatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: props.flats
    }
  }

  render() {
    return (
      <div className="flat-list">
        {this.state.flats.map(((flat, index) => {
          return (
            <Flat flat={flat} key={index} />
          )
        }))}
      </div>
    )
  }
}

export default FlatList;
