import React, { Component } from "react";
import "./Style/Individual.css";
// import Datepicker from '../Calendar/Datepicker'
import New from "../Calendar/New";
import Calculate from "../Calculator/index";

import Map from "../Map";
import "../Styles/Home.css";

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
          <div className="parent">
            <div className="child bg-one">
              <img src={this.props.location.state[2]} alt="picture" />
            </div>
          </div>
        </div>
        <div className="after-image">
          <h2>{this.props.location.state[0]}</h2>
          <h2>{this.props.location.state[1]}</h2>
          <h2>{this.props.location.state[3]}</h2>

          <h2>
            <i className="fas fa-dollar-sign"></i>{" "}
            {this.props.location.state[4]}
          </h2>
          <h1>{this.props.location.state[5]}</h1>
          <h2>{this.props.location.state[6]}</h2>
          <h2>{this.props.location.state[7]}</h2>
        </div>
        <div className="mywrapper">
          <Calculate />
        </div>
        <New />
        <div className="homePage">
          <div style={{ margin: "50px" }}>
            {" "}
            <Map
              google={this.props.google}
              center={{
                lat: this.props.location.state[6],
                lng: this.props.location.state[7]
              }}
              height="300px"
              zoom={15}
            />{" "}
          </div>
        </div>
        {/* <button value="Refresh Page" onClick={window.location.href=window.location.href}>boom</button> */}
        <form
          action="https://formspree.io/zaid.fadel89@yahoo.com"
          method="POST"
        >
          <label for="name">name</label>
          <input type="text" className="name" name="name" />
          <label for="phone">phone</label>
          <input id="phonenum" type="tel" pattern="^\d{3}\d{3}\d{4}$" />
          <label for="message">
            Message
            <textarea
              className="message"
              name="message"
              style={{ height: "100px" }}
            >
              {this.props.location.state[1]}
            </textarea>
          </label>
          <div className="status"></div>
          <button
            type="subnits"
            className="subnits waves-effect waves-light btn"
          >
            send{" "}
          </button>
        </form>
      </div>
    );
  }
}

// export default IndividualPage;

export default IndividualPage;
