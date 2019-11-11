import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./Style/Result.css";
// import { Col, Row } from "../Grid";
class ResultList extends Component {
  constructor() {
    super();
    this.state = {
      redirectTo: null,
      id: "",
      location: "",
      imageURL: "",
      zipcode: ""

    }
  }
  renderPage = (id, location, url, zipcode) => {
    // console.log("clicked on image")
    // console.log("url: " +url);
    // console.log(id);
    this.setState({
      redirectTo: "/specificPage",
      id: id,
      location: location,
      imageURL: url,
      zipcode: zipcode
    })
  };


  render() {
    if (this.state.redirectTo) {
      return (
        <Redirect to={{ pathname: this.state.redirectTo, state: [this.state.id, this.state.location, this.state.imageURL, this.state.zipcode] }} />
      )

    } else {
      return (
        <div className="overflowTest">
          <div className="wrapper">

            <ul className="center">
              <div className="row">
                {this.props.results.map(result => (
                  <li className="list  box" key={result.recordid}>
                    <div className="img-container">
                      <img alt={result.fields} className="box-img-top box-height" src={result.fields.picture_url} onClick={() => { this.renderPage(result.recordid, result.fields.host_location, result.fields.picture_url, result.fields.zipcode) }} />
                    </div>
                    <p> <i class="fas fa-dollar-sign"></i> {result.fields.price} | <i class="fas fa-bed"></i> {result.fields.bedrooms} | <i class="fas fa-shower"></i> {result.fields.bathrooms}</p>
                    <p>{result.fields.street}</p>



                  </li>
                ))}</div>


            </ul>

          </div>
        </div>
      );

    }
  }

}

export default ResultList;
