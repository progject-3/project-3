import React from "react";
import "./Style/Result.css"
function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for a zipcode"
          recordid="search"
          id="ZIP" size="6" maxlength="5"
        />
        <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3 alert">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
