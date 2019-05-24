import React from 'react';
import Search from './Search.jsx';
import CityList from './CityList/CityList.jsx';

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
 
  render() {
    const url = 'https://s3-us-west-1.amazonaws.com/queertrip/';
    return (
      <div id='details-body'>
        <div id='details-top'>
          <div className='details-heading'>  Helping queerdos <br/> travel queerer. </div>
          <Search handleSubmit={this.props.handleSubmit}/>
          <img 
            className='details-img'
            id='contact'
            src={`${url}contact.png`}
            />
          <img className='details-img' id='collabo' src={`${url}collabo.png`} />
          <img className='details-img' id='why' src={`${url}why.png`} />
          <div className='buffer'></div>
        </div>
        <CityList cities={this.props.cities} handleCityClick={this.props.handleCityClick}/>
      </div>
    )
  }
};

export default Details;