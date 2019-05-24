import React from 'react';
import Search from './Search.jsx';
import Featured from './Featured.jsx';
import CityList from './CityList/CityList.jsx';
import Modal from 'react-responsive-modal';

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      contact: {
        pos1: 0, 
        pos2: 0, 
        pos3: 0, 
        pos4: 0,
        isDrag: false,
        top: null,
        left: null,
      }
    }
  }

  triggerModal() {
    this.setState({ open: !this.state.open });
  };

  dragMouseDown(e) {
    e.preventDefault();
    const id = e.target.id;
    console.log(this.state[id].isDrag)
    this.state[id].pos3 = e.clientX;
    this.state[id].pos4 = e.clientY;
    this.state[id].isDrag = true;
    console.log(this.state[id].isDrag)
  }

  closeDragElement(e) {
    console.log('mouseup')
    const id = e.target.id;
    // stop moving when mouse button is released;
    this.state[id].isDrag = false;
  }

  elementDrag(e) {
    console.log('mouse is movin')
    e.preventDefault();
    const id = e.target.id;
    // calculate the new cursor position:
    this.state[id].pos1 = this.state[id].pos3 - e.clientX;
    this.state[id].pos2 = this.state[id].pos4 - e.clientY;
    this.state[id].pos3 = e.clientX;
    this.state[id].pos4 = e.clientY;
    // set the element's new position:
    //set top
    this.state[id].top = document.getElementById(id).offsetTop - this.state[id].pos2;
    //set left
  }
 
  render() {
    return (
      <div id="details-body">
        <div id="details-top">
          <div className="details-heading">  Helping queerdos <br/> travel queerer. </div>
          <Search handleSubmit={this.props.handleSubmit}/>
          <img 
            className="details-img" 
            id="contact" 
            src="https://s3-us-west-1.amazonaws.com/queertrip/contact.png" 
            onMouseDown={this.dragMouseDown.bind(this)} 
            onMouseUp={this.closeDragElement.bind(this)}
            onMouseMove={this.state["contact"].isDrag ? this.elementDrag.bind(this) : null}
            style={{top: `${this.state["contact"].top}px`, left: `${this.state["contact"].left}px`}}
            />
          <img className="details-img" id="collabo" src="https://s3-us-west-1.amazonaws.com/queertrip/collabo.png" />
          <img className="details-img" id="why" src="https://s3-us-west-1.amazonaws.com/queertrip/why.png" />
          <div className="buffer"></div>
        </div>
        <CityList cities={this.props.cities} handleCityClick={this.props.handleCityClick}/>
      </div>
    )
  }
};

export default Details;