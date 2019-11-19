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
  componentDidMount() { }
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
      height: "500px",
      borderRadius: '8px',
      boxShadow: "0px 0px 40px rgb(46, 43, 43)"
      
    };
    const footerStyle = {
      // height: "305px",
      width: "98%",

    }
    const imgStyling = { //! This is for 3 column box styling
      height: "80px",
      width: "130px",
      margin: "0",
    }
    const imgStylingA = {
      height: "80px",
      width: "90px",
      margin: "0",
    }
    const imgStylingB = {
      marginTop: "10px",
      // marginBottom: "10px",
      height: "80px",
      width: "80px",
      margin: "0",
    }
    return (
      <div className="homePages">
        <div className="jumboPic">
          <div className="tag">RentEasy<i className="fas fa-key"></i></div>
          <div className="text-under-title">
            Visiting City of Chicago and looking for Apartments that you like to stay in?
            Then this web application we provide is the best fit for you!
            Find your cozy Apartment to stay for the night.
          </div>
          <img
            style={imageStyle}
            alt="home"
            //? This is for jumbotron image. style above
            src={require('./Styles/Images/chi.jpg')}
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

        <div className="row">
          <div className="column">
            <img
              style={imgStyling}
              src={require('./logo/Rent.png')}
            />
            <h5>Rent a home</h5>
            <p>We’re creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.</p>
            <button className="Btn-s"><a href="https://www.airbnb.com/host/homes">Find rentals</a></button>
          </div>
          <div className="column">
          <img
              style={imgStylingA}
              src={require('./logo/Sell.png')}
            />
            <h5>Sell a home</h5>
            <p>Whether you sell with new Zillow Offers™ or take another approach, we’ll help you navigate the path to a successful sale.</p>
            <button className="Btn-s"><a href="https://www.zillow.com/sell/">See your options</a></button>
          </div>
          <div className="column">
          <img
              style={imgStylingB}
              src={require('./logo/Buy.png')}
            />
            <h5>Buy a home</h5>
            <p>Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.</p>

            <button className="Btn-s"><a href="https://www.trulia.com/IL/Chicago/">Search homes</a></button>
          </div>
        </div>

        <div>
          <img
            style={footerStyle}
            src={require('./Styles/Images/Footer-City.png')}
          />
          <div className="footerImage">
          RentEasy! Take a deep dive and browse original neighborhood photos, drone footage, resident reviews and local insights to see if the homes for sale are right for you. We are continuously working to improve the accessibility of our web experience for everyone, and we welcome feedback and accommodation requests.
            </div>
        </div>
      </div>
    );
  }
}

export default Home;
