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
      width: "70%",
      height: "30%",
      borderRadius: '8px',
      boxShadow: "0px 0px 40px rgb(46, 43, 43)"
    };
    const footerStyle = {
      // height: "305px",
      width: "98%",
   
 }
    return (
      <div className="homePages">
        <div className="jumboPic">
          <div className="tag">Title</div>
          <img
            style={imageStyle}
            alt="home"
            //? This is for jumbotron image. style above
            src="https://user-images.githubusercontent.com/52087686/68824251-d7c4a200-065b-11ea-8b8e-800c4a41317b.jpg"
            />
            
        </div>
        <Row>
          <Col size="md-6">
            <HomeMap userData={this.userData} />
          </Col>
          {/* {this.state.zip} */}
          <Col size="md-6">
            <SearchResultContainer zip={this.state.zip} />
          </Col>
        </Row>
        <div>
          <img
            style={footerStyle}
          src={require('./Styles/Images/Footer-City.png')}
          />
          <div className="footerImage">
            We have something comming
            </div>
        </div>
      </div>
    );
  }
}

export default Home;
