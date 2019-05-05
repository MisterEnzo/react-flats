import React from 'react';

const Flat = ({flat}) => {
  return (
    <div className="card"
      style={{backgroundImage: `url(${flat.imageUrl})` }} 
    >
      <div className="card-link"></div>
      <div className="card-category">{flat.price} {flat.priceCurrency}</div>
      <div className="card-description">{flat.name}</div>
    </div>
  )
}

export default Flat;
