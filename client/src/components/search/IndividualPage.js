import React, { Component } from 'react';
import "./Style/Individual.css";
class IndividualPage extends Component {

    render() {
        return (
            <div>
                {/* {this.state.books.length ? ()} */}
                {/* <h1>IndividualPage</h1> */}
                <div class="all">
                    <div class="parent" >
                        <div class="child bg-one">
                            <img src={this.props.location.state[2]} alt="picture" />
                        </div>
                    </div>

                </div>
                <h2>{this.props.location.state[0]}</h2>
                <h2>{this.props.location.state[1]}</h2>
                <h2>{this.props.location.state[3]}</h2>
            </div>
        )
    }
}

export default IndividualPage;

