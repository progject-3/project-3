import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './Style/Result.css';
// import { Col, Row } from "../Grid";
class ResultList extends Component {
  constructor() {
    super();
    this.state = {
      redirectTo: null,
      id: '',
      location: '',
      imageURL: '',
      zipcode: '',
      price: '',

       property_type: '',
      // bedrooms: '',
      // host_verifications:'',
      // host_about: '',
      // host_thumbnail_url: '',
      latitude : '',
      longitude: ''

    };
  }
  renderPage = (id, location, url, zipcode , price,property_type, latitude,longitude) => {
    // console.log("clicked on image")
    // console.log("url: " +url);
    // console.log(id);
    this.setState({
      redirectTo: "/specificPage",
      id: id,
      location: location,
      imageURL: url,
      zipcode: zipcode,
      price: price,
      property_type:property_type,
      latitude: latitude,
      longitude: longitude,
      
    });
  };

  render() {
    if (this.state.redirectTo) {
      return (
        <Redirect to={{ pathname: this.state.redirectTo, state: [this.state.id, this.state.location, this.state.imageURL, this.state.zipcode, this.state.price ,this.state.property_type, this.state.latitude, this.state.longitude] }} />
      )

    } else {
      return (
        <div className="overflowTest">
          <div className="mywrapper">

            <ul className="center">
              <div className="row">
                {this.props.results.map(result => (
                  <li className="list  box" key={result.recordid}>
                    <div className="img-container">
                      <img alt={result.fields} className="box-img-top box-height" src={result.fields.picture_url} onClick={() => { this.renderPage(result.recordid, result.fields.host_location, result.fields.picture_url, result.fields.zipcode, result.fields.price,result.fields.property_type, result.fields.latitude,result.fields.longitude) }} />
                    </div>
                    <p> <i className="fas fa-dollar-sign"></i> {result.fields.price} | <i className="fas fa-bed"></i> {result.fields.bedrooms} | <i className="fas fa-shower"></i> {result.fields.bathrooms}</p>
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
