import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./Style/Result.css"
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
  renderPage = (id, location,url,zipcode) => {
    console.log("clicked on image")
    console.log("url: " +url);
    console.log(id);
    this.setState({
      redirectTo:"/specificPage",
      id:id,
      location: location,
      imageURL: url,
      zipcode: zipcode
    })
    // console.log("deleting");
    // console.log("results: " + JSON.stringify(this.props.results));
    // API.search(id)
    //   .then(id => this.setState({
    //     redirectTo: '/specificPage' 
    //   }))
  }


  render() {
    if (this.state.redirectTo) {
      return (
      <Redirect to={{ pathname: this.state.redirectTo, state: [this.state.id,this.state.location,this.state.imageURL,this.state.zipcode] }} />
      )

    } else {
      return (
        <div className="wrapper">
          <ul className="list-group">

            {this.props.results.map(result => (
              <li className="list-group-item box" key={result.recordid}>
                <div className="img-container">
                <img alt={result.fields}  className="card-img-top card-height" src={result.fields.picture_url} onClick={() => {this.renderPage(result.recordid, result.fields.host_location,result.fields.picture_url,result.fields.zipcode)} }/>
                </div>
                <p>{result.fields.host_location}</p>
                <p>{result.fields.zipcode}</p>
                <p>{result.fields.price}</p>


              </li>
            ))}
          </ul>
        </div>
      );

    }
  }

}

export default ResultList;
