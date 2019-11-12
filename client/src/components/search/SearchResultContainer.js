import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
// import NoMatch from "./NoMatch";
import API from "../../utils/API";
import "./Style/Result.css"
class SearchResultContainer extends Component {
  state = {
    search: "",
    results: []
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    this.searchGiphy("60602");
   
  }

  searchGiphy = query => {
    API.search(query)
      .then(res => this.setState({ results: res.data.records }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    if(!this.isNumber(this.state.search)){
      alert('*** Please enter a valid zip code.');
    }else{
    this.searchGiphy(this.state.search);
    }
    this.setState(
      
     { search: "",}
      
  )
  };

  isNumber(string) {
    if (isNaN(string) || string < 60202 || string > 60827) {
      return false;
    }
    else {
      return true;
    }
  }
  // validZip = zip =>{
  //   if (zip.match(/^[0-9]{5}$/)) {
  //     return true;
  //   }
  //   zip = zip.toUpperCase();
  //   if (zip.match(/^[A-Z][0-9][A-Z][0-9][A-Z][0-9]$/)) {
  //     return true;
  //   }
  //   if (zip.match(/^[A-Z][0-9][A-Z].[0-9][A-Z][0-9]$/)) {
  //     return true;
  //   }
  // //   alert('*** Please enter a valid zip code.');
  // //   return false;
  //  }

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          validZip={this.validZip}
        />
        <ResultList results={this.state.results} />
      </div>
    );
  }
}

export default SearchResultContainer;
