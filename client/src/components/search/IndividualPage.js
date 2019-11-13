import React, { Component } from 'react';
import "./Style/Individual.css";
import Datepicker from '../Calendar/Datepicker'
import Calculate from '../Calculator/index'
class IndividualPage extends Component {

    render() {
        return (
            <div>
                {/* {this.state.books.length ? ()} */}
                {/* <h1>IndividualPage</h1> */}
                <div className="all">
                    <div className="parent" >
                        <div className="child bg-one">
                            <img src={this.props.location.state[2]} alt="picture" />
                        </div>
                    </div>
                    <button onclick="href='/'">Continue</button>
                    <button href="/">go back</button>

                </div>
                <div className="after-image">
                    <h2>{this.props.location.state[0]}</h2>
                    <h2>{this.props.location.state[1]}</h2>
                    <h2>{this.props.location.state[3]}</h2>
                    <h2><i className="fas fa-dollar-sign"></i> {this.props.location.state[4]}</h2>
                </div>
                <div className="mywrapper">

                    <Datepicker />

                    <Calculate />

                </div>
                <form action="https://formspree.io/zaid.fadel89@yahoo.com" method="POST">
                    <label for="email">Email</label>
                    <input type="text" className="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" />
                    <label for="subject">Subject</label>
                    <input id="phonenum" type="tel" pattern="^\d{3}\d{3}\d{4}$" />
                    <label for="message">Message
                        <textarea className="message" name="message" style={{ height: "100px" }}>{this.props.location.state[1]}</textarea></label>
                    <div className="status"></div>
                    <button type="subnits" className="subnits waves-effect waves-light btn">send </button>
                </form>
            </div>
        )
    }
}

export default IndividualPage;

