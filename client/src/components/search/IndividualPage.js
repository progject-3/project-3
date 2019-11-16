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
  constructor(props) {
    super(props);
  this.state = {
    search: "",
    isOpen: false,
    quantity: 1,
    show: true,
    max: 100,
    min: 0
  }
}
IncrementItem = () => {
  this.setState(prevState => {
    if(prevState.quantity < 360) {
      return {
        quantity: prevState.quantity + 1
      }
    } else {
      return null;
    }
  });
}
DecreaseItem = () => {
this.setState(prevState => {
  if(prevState.quantity > 0) {
    return {
      quantity: prevState.quantity - 1
    }
  } else {
    return null;
  }
});
}
ToggleClick = () => {
this.setState({
  show: !this.state.show
});
}
handleChange = (event) => {
this.setState({quantity: event.target.value});
}
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
              <div className="" style={{ height: "850px"}}>
              <div>
              <h3> {this.props.location.state[20]}</h3>
<hr></hr>
              <button style={{
              background: "transparent",
              outline: "none",
              border: "transparent"
            }} onClick={(e) => this.setState({ isOpen: true })}>  <img src={this.props.location.state[5]} style={{ borderRadius: "50%" }} alt="picture" />
            </button><br></br>
           
            {this.props.location.state[15]}<br></br>
              <p>host about: {this.props.location.state[16]}</p>
              <hr></hr>
              <div  style={{ height: "200px" }} className="framing-calc">
           
           <p> <i className="fas fa-bed"></i> {this.props.location.state[10]} | <i className="fas fa-shower"></i> {this.props.location.state[11]}  | <i class="fas fa-dollar-sign"></i> {this.props.location.state[4]}</p>
<br></br>
          price:<button onClick={this.IncrementItem}>+</button>
    <input className="inputne" value={this.state.quantity * this.props.location.state[4]} onChange={this.handleChange}/><br></br>
    days: <button onClick = {this.DecreaseItem}>-</button>
    <input className="inputne" value={this.state.quantity } onChange={this.handleChange}/>
     </div>
     </div>
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
            
          </div>
           
            {/* </div> */}
          </Col>
         
          <Col size="md-6">
          <div className="scrols">
        <div className="after-image">
          {/* <p>{this.props.location.state[0]}</p> */}
          <br></br>
          {/* <p>location: {this.props.location.state[1]}</p> */}
          <p>street: {this.props.location.state[3]}</p>
          <hr></hr>
          <p>house_rules: {this.props.location.state[8]}</p>
          <hr></hr>
          <p>description: {this.props.location.state[9]}</p>
          <hr></hr>
          <p>amenities:{this.props.location.state[12]}</p>
          <hr></hr>
          <p>reviews_per_month: {this.props.location.state[13]}</p>
          <hr></hr>
          <p>notes: {this.props.location.state[14]}</p>
          <hr></hr>
          <p>neighborhood_overview:{this.props.location.state[17]} </p>
          <hr></hr>
          <p>interaction: {this.props.location.state[18]}</p>
          <hr></hr>
          <p>space: {this.props.location.state[19]}</p>
          <hr></hr>
        </div>
        <div className="calensdar"><Calen /></div>
        <hr></hr>
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
