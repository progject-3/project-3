import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import './Styles/Login.css';

class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            redirectTo: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit')

        axios
            .post('/user/login', {
                username: this.state.username,
                password: this.state.password
            })
            .then(response => {
                console.log('login response: ');
                console.log(response);
                console.log(response.status);
                
                if (response.status === 200) {
                    // update App.js state
                    this.props.updateUser({
                        loggedIn: true,
                        username: response.data.username,
                        firstName: response.data.firstName
                    })
                    // update the state to redirect to home
                    this.setState({
                        redirectTo: '/'
                    })
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);

            })
    }
    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <div className="wrapperl">
                    <br></br>
                    <h4 className="login-1">Login</h4>
                    <form>
                        <div className="form-wrapperl">
                                <label className="form-labell" htmlFor="username">Username</label>
                                <input className="form-inputl"
                                    type="text"
                                    id="username"
                                    name="username"
                                    placeholder="Username"
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                />
                            
                                <label className="form-labell" htmlFor="password">Password</label>
                                <input className="form-inputl"
                                    placeholder="Password"
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                            
                            <button
                                className="btn-btn-btn"

                                onClick={this.handleSubmit}
                                type="submit">Login</button>
                            
                            </div>
                    </form>
                </div>
            )
        }
    }
}

export default LoginForm
                            
                           
                        
                        
                            
                           
                            
                        
                        
