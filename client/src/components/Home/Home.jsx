import React from 'react';
import Details from './Details/Details.jsx';
import About from './About/About.jsx';

const Home = (props) => {
  return (
    <div>
      <nav className="home-nav"><h1 onClick={props.goHome}>Queertrip</h1></nav>
      <div className="main-container">
        { props.cities ?
        <Details cities={props.cities} handleSubmit={props.handleSubmit} handleCityClick={props.handleCityClick}/>
        :
        <section className="rainbow-loader">
          <div className="rainbow">
            <div className="bow"></div>
            <div className="bow"></div>
            <div className="bow"></div>
            <div className="bow"></div>
            <div className="bow"></div>
            <div className="bow"></div>
          </div>
        </section>
        }
      </div>
    </div>
  )
}

export default Home;