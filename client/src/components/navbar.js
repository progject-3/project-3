import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import logo from '../logo.svg';
import '../App.css';
import axios from 'axios';

class Navbar extends Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
  }

  logout(event) {
    event.preventDefault();
    console.log('logging out');
    axios
      .post('/user/logout')
      .then(response => {
        console.log(response.data);
        if (response.status === 200) {
          this.props.updateUser({
            loggedIn: false,
            username: null
          });
        }
      })
      .catch(error => {
        console.log('Logout error');
      });
  
  }
  

  render() {
    const loggedIn = this.props.loggedIn;
    console.log('navbar render, props: ');
    console.log(this.props);

    const logoStyle = {
      position: "absolute",
      width: "50px",
      height: "50px",
      left: "90%",
      bottom: "3px"
    }
    const logoTitle = {
      position: "absolute",
      color: "rgb(217, 179, 114)",
      textShadow:  "0px 0px 10px  red",
      top: "42px",
      left: "85.5%",
      fontSize: "8pt",
      // bottom: "3px",
    }

    return (
      <div className="backgrounds">
        <img
          style={logoStyle}
          alt="logo"
          src={require('./logo/lognav.png')}
        />
        <div style={logoTitle}>Change The World</div>
        <header className="navbar navbar-expand-sm" id="nav-container">
          <div className="navbar-brand" >
            {loggedIn ? (
              <section className="collapse navbar-collapse">
                <Link to="#" className="nav-item active" onClick={this.logout}>
                  <span className="nav-link-logout"><i className="fas fa-sign-out-alt">logout</i></span></Link>
                <Link to="/" className="nav-item active ">
                  <span className="nav-link"><i className="fas fa-home" aria-hidden="true"></i></span>
                </Link>
              </section>
            ) : (
                <section className="navbar-section">
                  <Link to="/" className="btn btn-link text-secondary">
                    <span className="text-secondary" className="coloring"><i className="fas fa-home" aria-hidden="true"></i></span>
                  </Link>
                  <Link to="/login" className="btn btn-link text-secondary">
                    <span className="text-secondary" className="coloring">login</span>
                  </Link>
                  <Link to="/signup" className="btn btn-link">
                    <span className="text-secondary" className="coloring">sign up</span>
                  </Link>
                </section>

              )}
          </div>
        </header>
      </div>

    );

  }
}

export default Navbar;
