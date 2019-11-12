import React, { Component } from 'react';
import "./Style/Individual.css";
import Datepicker from '../Calendar/Datepicker'
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
                    <button onclick="href='/'">Continue</button>
                            <button href="/">go back</button>

                </div>
                <h2>{this.props.location.state[0]}</h2>
                <h2>{this.props.location.state[1]}</h2>
                <h2>{this.props.location.state[3]}</h2>
                <h2><i class="fas fa-dollar-sign"></i> {this.props.location.state[4]}</h2>
                <Datepicker/>
            </div>
        )
    }
}

export default IndividualPage;

