import React, { Component } from "react";
import HomeMap from "./HomeMap";
import maping from "./Styles/maping.css";

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
      width: "50%",
      height: "50%"
    };

    return (
      <div className="homePages">
        <p className="tag">This is some text for now or maybe for future too</p>
        {/* <img
          style={imageStyle}
          alt="home"
          src="https://i.ytimg.com/vi/N1icEHtgb3g/maxresdefault.jpg"
        /> */}
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
