import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import API from "../../utils/API";
class ResultList extends Component {
  constructor(){
    super();
    this.state = {
      redirectTo: null

    }
  }
  renderPage = (e) =>{
    console.log(e.target.id);

        console.log("deleting");
    console.log("results: "+JSON.stringify(this.props.results)); 
    API.search(e.target.id)
    .then(id => this.setState({
      redirectTo: '/specificPage/'+id })) }


  render() {
    if(this.state.redirectTo){
      return <Redirect to={{pathname: this.state.redirectTo, state:[this.state.results] }} />
    }
    else{
      return (
        <ul className="list-group">
          {this.props.results.map(result => (
            <li className="list-group-item" key={result.recordid}>
              <p>{result.fields.host_location}</p>
              <p>{result.fields.zipcode}</p>
              <p>{result.fields.price}</p>
              <img alt={result.fields} className="img-fluid" src={result.fields.picture_url} onClick={this.renderPage} />
            </li>
          ))}
        </ul>
      );

    }
  }

}

export default ResultList;
