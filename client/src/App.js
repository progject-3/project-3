import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// components
import Signup from './components/sign-up'
import LoginForm from './components/login-form'
import Navbar from './components/navbar'
import Home from './components/home'
import IndividualPage from './components/search/IndividualPage';
import NoMatch from "./components/search/NoMatch";

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null,
      firstName: null, //? this for first name to show up
     style: "dark"
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser(userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log(response.data.user);
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username,
          // user: response.data.user.firstName
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          {/* {
            if (this.state.style === "dark") (
            <style>
            {dstyles}
            </style>
          ) else (
          <style>
            {lstyles}
          </style>
          )} */}

        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        {/* greet user if logged in: */}
        {this.state.loggedIn &&
          <p className="tagName">Join the party, {this.state.firstName}!</p>
        }
        {/* Routes to different components */}
        <Switch>
        <Route
          exact path="/"
          component={Home} />
          {/* <SearchResultContainer />; */}
        <Route
          path="/login"
          render={() =>
            <LoginForm
              updateUser={this.updateUser}
            />}
        />
        <Route
          path="/signup"
          render={() =>
            <Signup />}
        />
 
            <Route exact path ="/specificPage" component={IndividualPage} />
            <Route component={NoMatch} />
            </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
