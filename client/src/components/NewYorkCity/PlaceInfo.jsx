import React from 'react';

const PlaceInfo = (props) => {
  const style = {
    backgroundImage: `url(${props.place.image})`
  }
  return (
    <div className="place-container">
      <div className="place-image" style={style}>
        <div className="place-title">{props.place.name}</div>
      </div>
      <div className="place-info">
        <div className="place-address">{props.place.address}</div>
        <div className="place-details"><div><a href={props.place.website}>Website</a></div><div>Vibe: {props.place.vibe}</div><div>Queerdar: {props.place.queerdar}</div></div>
        <div className="place-description">{props.place.description}</div>
      </div>
    </div>
  )
}

export default PlaceInfo;