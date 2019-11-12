import React, { Component } from "react";
import Map from "./Map";
import "./Styles/Home.css";
// import resultList from './search/';
class Home extends Component {
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
      <div className="homePage">
        <div style={{ margin: "50px" }}>
          {" "}
          <Map
            google={this.props.google}
            center={{ lat: 41.9245071073, lng: -87.6938524022 }}
            height="300px"
            zoom={15}
          />{" "}
        </div>
      </div>
    );
  }
}
export default Home;
