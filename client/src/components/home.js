
import React, { Component } from 'react';
import './Styles/Home.css';
import SearchResultContainer from "../components/search/SearchResultContainer";

class Home extends Component {


    render() {
        const imageStyle = {
            width: 400
        }
        return (
            <div>
                <p>It's good to be home</p>
                <img style={imageStyle} alt="home" src="https://i.ytimg.com/vi/N1icEHtgb3g/maxresdefault.jpg" />
                <SearchResultContainer />;
            </div>
        )

    }
}

export default Home
