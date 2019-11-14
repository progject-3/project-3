import React from "react";
import HomeMap from "../HomeMap";
import "./Style/Result.css";
function SearchForm(props) {
  return (
    <form className="everything">
      <div className="form-group">
        <label htmlFor="search"></label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search By ZipCode"
          recordid="search"
          id="ZIP"
          size="5"
          // maxlength="5"
        /> <button onClick={props.handleFormSubmit} className="buttonss ">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
// google={this.props.google}
// center={{ lat: 41.9245071073, lng: -87.6938524022 }}
// height='300px'
// zoom={15}
