import React from 'react';
import sampleData from './sampleData.js';
import PlaceInfo from './PlaceInfo.jsx';

const Info = (props) => {
  return (
    <div>
      <div className="nyc-info">
        <nav className="home-nav" id="city-nav-title"><h1 onClick={props.goHome}>Queertrip</h1></nav>
        <div className="city-hero">
          <div className="city-header">NYC</div>
          <div className="city-country">United States</div>
          <div className="city-filters">
            <select className="city-select" id="city-select-city">
              <option value="NYC">NYC</option>
              <option value="San Francisco">San Francisco</option>
              <option value="Wellington">Wellington</option>
              <option value="Quito">Quito</option>
            </select>
            <select className="city-select" id="city-select-identity">
              <option value="LGBTQIA+">LGBTQIA+</option>
              <option value="Lesbian">Lesbian</option>
              <option value="Gay">Gay</option>
              <option value="Bisexual">Bisexual</option>
              <option value="Trans">Trans</option>
              <option value="Queer">Queer</option>
              <option value="Questioning">Questioning</option>
              <option value="+">+</option>
              <option value="Intersex">Intersex</option>
              <option value="Asexual">Asexual</option>
              <option value="Female-Owned">Female-Owned</option>
            </select>
            <select className="city-select" id="city-select-category">
              <option value="All">All</option>
              <option value="Bars">Bars</option>
              <option value="Restaurants">Restaurants</option>
              <option value="Events">Events</option>
              <option value="Stores">Stores</option>
            </select>
          </div>
        </div>
        <div className="city-facts">
          <div id="queerdar" className="city-facts-item">
            <img src="https://s3-us-west-1.amazonaws.com/queertrip/Rainbow.png"/>
            <div id="city-queerdar">queerdar</div>
            <div>100%</div>
          </div>
          <div id="weather" className="city-facts-item">
            <img src="https://s3-us-west-1.amazonaws.com/queertrip/cloud.png"/>
            <div>weather -10C</div>
            <div>snowy AF</div>
          </div>
          <div id="cost" className="city-facts-item">
            <img src="https://s3-us-west-1.amazonaws.com/queertrip/Money.png"/>
            <div>cost per day $140 USD</div>
            <div>expensive AF</div>
          </div>
        </div>
        <div className="city-description">
        It is pretty much a non-stop party, from the saunas, darkrooms, bars, clubs, 
        cafés, festivals, balls, carnivals and celebrations a hedonist’s paradise, a sensualist’s haven, 
        an aesthete’s delight and a raver’s Mecca, all in one package. The party scene is so diverse 
        and innovative and celebrates any fetish! That is the reason fort the Folsom Europe fair in 
        September and the Lesbian and Gay City Festival every June, Europe’s largest street party of its kind, 
        being held in the traditional gay area around Nollendorfplatz in Schöneberg since 1993.
        </div>
        <div className="city-next-button">^</div>

      </div>
      <div className="city-places-container">
        {sampleData.map((place, index) => {
          return <PlaceInfo key={index + 1} place={place}/>
        })}
      </div>
    </div>
  )
};

export default Info;
