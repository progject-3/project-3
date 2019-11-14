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

        return (
            <div className="backgrounds">

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

        /* <header className="navbar navbar-expand-sm" id="nav-container">
          <div className="navbar-brand" >
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
            {loggedIn ? (
              <section className="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">

                <Link to="#" className="nav-item active" onClick={this.logout}>
                  <span className="nav-link-logout"><i className="fas fa-sign-out-alt">logout</i></span></Link>
                </ul>


              </section>
            ) : (
                <section className="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                  <Link to="/" className="nav-item active ">
                    <span className="nav-link"><i className="fas fa-home" aria-hidden="true"></i></span>
                  </Link>
                  <Link to="/login" className="nav-item active">
                    <span className="nav-link">Login <i className="fas fa-sign-in-alt"></i></span>
                  </Link>
                  <Link to="/signup" className="nav-item active">
                    <span className="nav-link">Sign up <i className="fas fa-user-plus"></i></span>
                  </Link>
                  </ul>
                </section> */
              )}
          </div>
        </header>
      </div>

    );

  }
}

export default Navbar;
