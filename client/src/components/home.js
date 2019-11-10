import React, { Component } from 'react';
import HomeMap from './HomeMap';
import SearchResultContainer from './search/SearchResultContainer';
import { Col, Row } from "./Grid.js";
// import IndividualPage from './search/IndividualPage';
class Home extends Component {
  render() {
    const imageStyle = {
      width: '50%',
      height: '50%'
    };
    return (
      <div> 
        <p>It's good to be home</p>
        <img
          style={imageStyle}
          alt='home'
          src='https://i.ytimg.com/vi/N1icEHtgb3g/maxresdefault.jpg'
        />
         <Row>
          <Col size="md-6">

          <HomeMap />
      </Col >
      <Col size="md-6">
     
        <SearchResultContainer /> 
        </Col >
        </Row>
      </div>
    );
  }
}

export default Home;

// // import React, { Component } from 'react';
// import './Styles/Home.css';
// // import SearchResultContainer from '../components/search/SearchResultContainer';

// class Home extends Component {
//   render() {
//     const imageStyle = {
//       width: 400
//     };
//     return (
//       <div>
//         <p>It's good to be home</p>
//         <img
//           style={imageStyle}
//           alt='home'
//           src='https://i.ytimg.com/vi/N1icEHtgb3g/maxresdefault.jpg'
//         />
//
//       </div>
//     );
//   }
// }
