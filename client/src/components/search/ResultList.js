import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './Style/Result.css';
// import { Col, Row } from "../Grid";
import Map from "../Map";
import "../Styles/Home.css";
class ResultList extends Component {
  constructor() {
    super();
    this.state = {
      redirectTo: null,
      id: '',
      location: '',
      imageURL: '',
      street: '',
      price: '',

      host_thumbnail_url: '',
      latitude : '',
      longitude: '',
      house_rules: '',
      description: '',
      bedrooms: '',
      bathrooms: '',
      host_verifications: '',
      property_type: '',
      notes: ''

    };
  }
  state = {
    search: ""
  };
  componentDidMount() {
    this.setState({
      search: this.props.searchStuff
    });
  }
  renderPage = (id, location, url, street , price,host_thumbnail_url, latitude,longitude,house_rules,description,bedrooms, bathrooms, host_verifications,property_type, notes) => {
    // console.log("clicked on image")
    // console.log("url: " +url);
    // console.log(id); specificPage
    this.setState({
      redirectTo: "/specificPage",
      id: id,
      location: location,
      imageURL: url,
      street: street,
      price: price,
      host_thumbnail_url:host_thumbnail_url,
      latitude: latitude,
      longitude: longitude,
      house_rules: house_rules,
      description: description,
      bedrooms: bedrooms,
      bathrooms: bathrooms,
      host_verifications: host_verifications,
      property_type: property_type,
      notes: notes

      
    });
  };

  render() {
    if (this.state.redirectTo) {
      return (
        <Redirect to={{ pathname: this.state.redirectTo, state: [this.state.id, this.state.location, this.state.imageURL, this.state.street, this.state.price ,this.state.host_thumbnail_url, this.state.latitude, this.state.longitude,this.state.house_rules, this.state.description, this.state.bedrooms, this.state.bathrooms, this.state.host_verifications,this.state.property_type, this.state.notes] }} />
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
                      <img alt={result.fields} className="box-img-top box-height" src={result.fields.picture_url} onClick={() => { this.renderPage(result.recordid, result.fields.host_location, result.fields.picture_url, result.fields.street, result.fields.price,result.fields.host_thumbnail_url, result.fields.latitude,result.fields.longitude, result.fields.house_rules, result.fields.description, result.fields.bedrooms, result.fields.bathrooms, result.fields.host_verifications, result.fields.property_type, result.fields.notes) }} />
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
