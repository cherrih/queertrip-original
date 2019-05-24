import React from 'react';
import GoogleMapReact from 'google-map-react';
import apiKey from '../../../../../api.config.js';
import sampleData from '../sampleData.js';
import PlaceMarker from './PlaceMarker.jsx';

// const customStyles = require('./GoogleMapStyles.json');

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: 40.725211,
        lng: -73.962430
      },
      zoom: 13
    }
  }
  render () {
    return (
      <div id="map-container">
        <GoogleMapReact
          bootstrapURLKeys={{key: apiKey}}
          defaultCenter={ this.state.center }
          defaultZoom={ this.state.zoom }
          // options={{
          //   styles: customStyles
          // }}
          >
          {sampleData.map((place, index) => {
            return <PlaceMarker data={place} text={index + 1} lat={place.lat} lng={place.lng} key={index + 1}/>
          })}
        </GoogleMapReact>
      </div>
    )
  }
};

export default MapContainer;
