import React, { Component } from "react";
import HomeMap from "./HomeMap";
import SearchResultContainer from "./search/SearchResultContainer";
import { Col, Row } from "./Grid.js";
import "./Styles/Home.css";

// import IndividualPage from './search/IndividualPage';
class Home extends Component {
  state = {
    searchStuff: ""
  };

  render() {
    const imageStyle = {
      width: "70%",
      height: "30%",
      borderRadius: '8px',
      boxShadow: "0px 0px 40px rgb(46, 43, 43)"
    };

    return (
      <div className="homePages">
        <p className="tag">This is some text for now or maybe for future too</p>
        <div className="jumboPic">
          <img
            style={imageStyle}
            alt="home"
            //? This is for jumbotron image. style above
            src="https://user-images.githubusercontent.com/52087686/68824251-d7c4a200-065b-11ea-8b8e-800c4a41317b.jpg"
        />
        </div>
        <Row>
          <Col size="md-6">
            <HomeMap />
          </Col>
          <Col size="md-6">
            <SearchResultContainer />
          </Col>
        </Row>
        </div>
    );
  }
}

export default Home;
