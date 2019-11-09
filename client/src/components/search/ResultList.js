import React from "react";

function ResultList(props) {
  return (
    <ul className="list-group">
      {props.results.map(result => (
        <li className="list-group-item" key={result.recordid}>
          <p>{result.fields.notes}</p>
          <img alt={result.fields} className="img-fluid" src={result.fields.medium_url} />
        </li>
      ))}
    </ul>
  );
}

export default ResultList;
