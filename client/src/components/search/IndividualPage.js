import React, { Component } from 'react';
import "./Style/Individual.css";
import Datepicker from '../Calendar/Datepicker'
import New from '../Calendar/New'
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
                <h2>{this.props.location.state[0]}</h2>
                <h2>{this.props.location.state[1]}</h2>
                <h2>{this.props.location.state[3]}</h2>
                <h2><i className="fas fa-dollar-sign"></i> {this.props.location.state[4]}</h2>

                <div className="mywrapper">

                    <Datepicker />

                    <Calculate />
                    <a href="javascript:document.location.reload();"
ONMOUSEOVER="window.status='Refresh'; return true"
ONMOUSEOUT="window.status='ah... that was good'">
<img src="https://icon-library.net/images/refresh-button-icon/refresh-button-icon-13.jpg" 
width="10" height="10" border="0" /></a>

                </div>
                <New/>
                {/* <button value="Refresh Page" onClick={window.location.href=window.location.href}>boom</button> */}
                <form action="https://formspree.io/zaid.fadel89@yahoo.com" method="POST">
                    <label for="name">name</label>
                    <input type="text" className="name" name="name"  />
                    <label for="phone">phone</label>
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

