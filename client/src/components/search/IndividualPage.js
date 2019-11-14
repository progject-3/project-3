import React, { Component, useState } from 'react';
import "./Style/Individual.css";
// import Datepicker from '../Calendar/Datepicker'
import New from '../Calendar/New';
import Calculate from '../Calculator/index'

import Map from "../Map";
import "../Styles/Home.css";
// import React, { useState } from 'react';
class IndividualPage extends Component {


  state = {
    search: ""
  };
  componentDidMount() {
    this.setState({
      search: this.props.searchStuff
    });
  }

  render() {
    return (
      <div>
        {/* {this.state.books.length ? ()} */}
        {/* <h1>IndividualPage</h1> */}
        <div className="all">
          <div className="parent" >
            <div className="child bg-one">
              <img src={this.props.location.state[2]} alt="picture" />
            </div>
          </div>


        </div>
        <div className="after-image">
          {/* <p>{this.props.location.state[0]}</p> */}
          <p>location: {this.props.location.state[1]}</p>
          <p>street: {this.props.location.state[3]}</p>


          <img src={this.props.location.state[5]} alt="picture" />
          <p>house_rules: {this.props.location.state[8]}</p>
          <p>description: {this.props.location.state[9]}</p>
         <p> <i className="fas fa-bed"></i> {this.props.location.state[10]}</p>
         <p> <i className="fas fa-shower"></i> {this.props.location.state[11]}</p>
        <p>host_verifications:{this.props.location.state[12]}</p>
        <p>reviews_per_month: {this.props.location.state[13]}</p>
        <p>notes: {this.props.location.state[14]}</p>
        </div>
        <div className="">
          <form action="https://formspree.io/zaid.fadel89@yahoo.com" method="POST">
            <h2><i className="fas fa-dollar-sign"></i> {this.props.location.state[4]}</h2>
            <label for="name">name</label>
            <input type="text" className="name" name="name" />
            <label for="phone">phone</label>
            <input id="phonenum" type="tel" pattern="^\d{3}\d{3}\d{4}$" />
            <label for="message">Message
                        <textarea className="message" name="message" style={{ height: "100px" }}>{this.props.location.state[1]}</textarea></label>
            <div className="status"></div>
            <button type="subnits" className="subnits waves-effect waves-light btn">send </button>
          </form>
        </div>

        <Calculate />


       


        <div className="homePage">
          <div style={{ margin: "50px", width: "50%", height: "300px" }}>
            {" "}
            <Map
              google={this.props.google}
              center={{ lat: this.props.location.state[6], lng: this.props.location.state[7] }}
              height="300px"
              zoom={13}
            />{" "}
          </div>
        </div>
        <New />
      </div>
    )
  }
}

// export default IndividualPage;

export default IndividualPage;
