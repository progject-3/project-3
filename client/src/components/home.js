import React, { Component } from "react";
import HomeMap from "./HomeMap";
import SearchResultContainer from "./search/SearchResultContainer";
import { Col, Row } from "./Grid.js";
import "./Styles/Home.css";
// import IndividualPage from './search/IndividualPage';
class Home extends Component {
  state = {
    searchStuff: "",
    zip: ""
  };
  componentDidMount() {}
  userData = data => {
    // console.log(zip.address.split(", ")[1].split(" ")[1]);

    this.setState({
      zip: data.address.split(", ")[1].split(" ")[1]
    });
    console.log(this.state.zip);
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
            <HomeMap userData={this.userData} />
          </Col>
          {/* {this.state.zip} */}
          <Col size="md-6">
            <SearchResultContainer zip={this.state.zip} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
