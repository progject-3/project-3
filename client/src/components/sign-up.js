import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import './Styles/Signup.css';

// import { validateAll } from 'indicative';

class Signup extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			password_confirmation: '',
			firstName: '',
			lastName: '',
			email: '',
			phone: '',
			redirectTo: null

		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange=(event)=> {
		this.setState({
			[event.target.name]: event.target.value
		})
		
	} 
	handleSubmit = (event) => {
		console.log('sign-up handleSubmit, username: ');
		console.log(this.state.username);
		event.preventDefault();
		
		//? Validating User using indicative Package
		//? Taking the input from "state"
		// const data = this.state;
		// const rules = {
		// 	username: 'required|string',
		// 	password: 'required|string|min:6|confirmed',
		// 	password_confirmation: '',
		// 	firstName: 'required|string',
		// 	lastName: 'required|string',
		// 	email: '',
		// 	phone: '',
		// }
		// //displaying custom message for errors
		// const messages = {
		// 	required: 'This {{ field }} is required.',
		// 	'username.username': 'The email is invalid.',
		// 	'password.confirmed': 'The password does not match'
		// }

		// validateAll(data, rules, messages)
		// 	.then(() => {
		// 	console.log('success');
		// })
		// 	.catch(errors => {
		// 		console.log(errors); //show errors to user
		// 		const formattedErrors = {}
		// 		errors.forEach(error => formattedErrors[error.field] = error.message)
		// 		this.setState({ errors: formattedErrors })
		// 	})
	


		//request to server to add a new username/password
		axios.post('/user/', {
			username: this.state.username,
			password: this.state.password,
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			email: this.state.email,
			phone: this.state.phone

		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('successful signup')
					this.setState({ //redirect to login page
						redirectTo: '/login'
					})
				} else {
					console.log('username already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
	}


	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		} else {
			return (
				<div className="SignupForm">
					<h4>Sign up</h4>
					<form className="form-horizontal">
						<div className="form-group">
							<div className="col-1 col-ml-auto">
								<label className="form-label" htmlFor="username">Username</label>
							</div>
							<div className="col-3 col-mr-auto">
								<input className="form-input"
									type="text"
									id="username"
									name="username"
									placeholder="Username"
									value={this.state.username}
									onChange={this.handleChange}
								/>
							</div>
						</div>
						<div className="form-group">
							<div className="col-1 col-ml-auto">
								<label className="form-label" htmlFor="password">Password: </label>
							</div>
							<div className="col-3 col-mr-auto">
								<input className="form-input"
									placeholder="password"
									type="password"
									name="password"
									value={this.state.password}
									onChange={this.handleChange}
								/>
							</div>
						</div>
						<div className="form-group">
							<div className="col-1 col-ml-auto">
								<label className="form-label" htmlFor="password">Confirm Password: </label>
							</div>
							<div className="col-3 col-mr-auto">
								<input className="form-input"
									placeholder="Confirm Password"
									type="password"
									name="password_confirmation"
									value={this.state.password_confirmation}
									onChange={this.handleChange}
								/>
							</div>
						</div>
						<div className="form-group">
							<div className="col-1 col-ml-auto">
								<label className="form-label" htmlFor="username">First Name</label>
							</div>
							<div className="col-3 col-mr-auto">
								<input className="form-input"
									type="text"
									id="firstName"
									name="firstName"
									placeholder="First Name"
									value={this.state.firstName}
									onChange={this.handleChange}
								/>
							</div>
						</div>
						<div className="form-group">
							<div className="col-1 col-ml-auto">
								<label className="form-label" htmlFor="username">Last Name</label>
							</div>
							<div className="col-3 col-mr-auto">
								<input className="form-input"
									type="text"
									id="lastName"
									name="lastName"
									placeholder="Last Name"
									value={this.state.lastName}
									onChange={this.handleChange}
								/>
							</div>
						</div>
						<div className="form-group">
							<div className="col-1 col-ml-auto">
								<label className="form-label" htmlFor="username">Email</label>
							</div>
							<div className="col-3 col-mr-auto">
								<input className="form-input"
									type="text"
									id="email"
									name="email"
									placeholder="Email (optional)"
									value={this.state.email}
									onChange={this.handleChange}
								/>
							</div>
						</div>
						<div className="form-group">
							<div className="col-1 col-ml-auto">
								<label className="form-label" htmlFor="username">Phone</label>
							</div>
							<div className="col-3 col-mr-auto">
								<input className="form-input"
									type="number"
									id="phone"
									name="phone"
									placeholder="Phone (optional)"
									value={this.state.phone}
									onChange={this.handleChange}
								/>
							</div>
						</div>
						<div className="form-group ">
							<div className="col-7"></div>
							<button
								className="btn btn-primary col-1 col-mr-auto"
								onClick={this.handleSubmit}
								type="submit"
							>Sign up</button>
						</div>
					</form>
				</div>

			)
		}
	}
}

export default Signup
