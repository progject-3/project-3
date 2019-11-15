import React, { Component } from "react";
import "./Style/Individual.css";
// import New from "../Calendar/New";
import Calculate from "../Calculator/index";
import Map from "../Map";
// import "../Styles/Home.css";
import Modal from '../../components/Modal/index';
import { Col, Row } from "../../components/Grid";
import Calen from '../../components/Calendar/Calendar';

class IndividualPage extends Component {
  state = {
    search: "",
    isOpen: false,
  };
  componentDidMount() {
    this.setState({
      search: this.props.searchStuff
    });
  }

  render() {
    return (
      <div>
        <Row>
          <Col size="md-6">
            {/* <div className="all"> */}
              <div className="parent" >
                <div className="child bg-one">
                  <img src={this.props.location.state[2]} alt="picture" />
                </div>
              </div>
              <div>
             
            <button style={{
              background: "transparent",
              outline: "none",
              border: "transparent"
            }} onClick={(e) => this.setState({ isOpen: true })}>  <img src={this.props.location.state[5]} style={{ borderRadius: "50%" }} alt="picture" />
            </button>
            <Modal isOpen={this.state.isOpen} onClose={(e) => this.setState({ isOpen: false })}> <form
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
                </textarea>
              </label>
              {/* <div className="status"></div> */}
              <button
                type="subnits"
                className="subnits waves-effect waves-light btn"
              >
                send{" "}
              </button>
            </form>
            
            </Modal>
            {this.props.location.state[15]}
          </div>
           <p> <i className="fas fa-bed"></i> {this.props.location.state[10]} | <i className="fas fa-shower"></i> {this.props.location.state[11]}  | <i class="fas fa-dollar-sign"></i> {this.props.location.state[4]}</p>
           <Calculate />
            {/* </div> */}
          </Col>
         
          <Col size="md-6">
          <div className="scrols">
        <div className="after-image">
          {/* <p>{this.props.location.state[0]}</p> */}
          <br></br>
          {/* <p>location: {this.props.location.state[1]}</p> */}
          <p>street: {this.props.location.state[3]}</p>
          <p>house_rules: {this.props.location.state[8]}</p>
          <p>description: {this.props.location.state[9]}</p>
          <p>host_verifications:{this.props.location.state[12]}</p>
          <p>reviews_per_month: {this.props.location.state[13]}</p>
          <p>notes: {this.props.location.state[14]}</p>
        </div>
        <div className="calensdar"><Calen /></div>
        <div className="homePage">
          <div style={{ margin: "50px", width: "100%%", height: "700PX" }}>
            {" "}
            <Map
              google={this.props.google}
              center={{ lat: this.props.location.state[6], lng: this.props.location.state[7] }}
              height="300px"
              zoom={13}
            />{" "}
          </div>
        </div>
        </div>
        </Col>
       
        </Row>
       
      </div>
    )
  }
}

export default IndividualPage;