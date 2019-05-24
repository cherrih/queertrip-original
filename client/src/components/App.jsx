import React from 'react';
import Home from './Home/Home.jsx';
import NewYorkCity from './NewYorkCity/NewYorkCity.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      cities: null,
      isHome: true,
      isNewYorkCity: false
    }
  }

  handleSubmitCity (event) {
    event.preventDefault();
    this.setState({
      isHome: !this.state.isHome,
      isNewYorkCity: !this.state.isNewYorkCity
    })
  }
  handleHomeClick (event) {
    this.setState({
      isHome: true,
      isNewYorkCity: false
    })
  }
  handleCityClick (event) {
    this.setState({
      isHome: !this.state.isHome,
      isNewYorkCity: !this.state.isNewYorkCity
    })
  }

  componentDidMount () {
    fetch('/cities')
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      this.setState({
        cities: myJson
      });
    });
  }

  render () {
    return (
    <div>
      <div>{ this.state.isHome ? <Home cities={this.state.cities} handleSubmit={this.handleSubmitCity.bind(this)} goHome={this.handleHomeClick.bind(this)} handleCityClick={this.handleCityClick.bind(this)}/> : <div></div> }</div>
      <div>{ this.state.isNewYorkCity ? <NewYorkCity goHome={this.handleHomeClick.bind(this)} /> : <div></div>}</div>
    </div>)
  }
}

export default App;