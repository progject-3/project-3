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
    console.log(this.props);
  }

  render() {
    return (
      <div className="homePage">
        <div style={{
          marginRight: "45px",
          marginLeft: "20px"
        }}>
          {" "}
          <Map
            google={this.props.google}
            center={{ lat: 41.8960926, lng: -87.6210186}}
            height="506.5px"
            zoom={15}
            userData={this.props.userData}
          />{" "}
        </div>
      </div>
    );
  }
}
export default Home;
