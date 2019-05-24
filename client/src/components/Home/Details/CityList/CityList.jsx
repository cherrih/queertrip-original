import React from 'react';
import City from './City.jsx';

const CityList = (props) => {
  return(
    <div id="city-list">
      <div id="city-title">
        <h2>Queerest Cities</h2>
      </div>
      <div>{props.cities.map((city, i) => {
        return <City key={i} city={city} index={i + 1} handleCityClick={props.handleCityClick}/>
      })}
      </div>
    </div>
  )
}

export default CityList;