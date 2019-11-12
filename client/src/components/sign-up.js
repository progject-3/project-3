import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import './Styles/Signup.css';

import { validateAll } from 'indicative/validator';

//? This is manual validation function.
// const emailRegex = RegExp(
// 	/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
//   );
  
//   const formValid = ({ formErrors, ...rest }) => {
// 	let valid = true;
  
// 	// validate form errors being empty
// 	Object.values(formErrors).forEach(val => {
// 	  val.length > 0 && (valid = false);
// 	});
  
// 	// validate the form was filled out
// 	Object.values(rest).forEach(val => {
// 	  val === null && (valid = false);
// 	});
  
// 	return valid;
//   };



class Signup extends Component {
	state = {
		username: '',
		password: '',
		password_confirmation: '',
		firstName: '',
		lastName: '',
		age: '',
		email: '',
		phone: '',
		redirectTo: null,
		errors: {}
	}
	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})

	}
	handleSubmit = (event) => {
		event.preventDefault();
		console.log('sign-up handleSubmit, username: ');
		console.log(this.state.username);

		// ? Validating User using indicative Package
		// ? Taking the input from "state"
		const data = {
			username: this.state.username,
			password: this.state.password,
			password_confirmation: this.state.password_confirmation,
			age: this.state.age,
			firstName: this.state.firstName,
			lastName: this.state.lastName,
		};
		console.log(data);
		
		const rules = {
			username: 'required|alpha_numeric',
			password: 'required|string|min:6',
			password_confirmation: 'same:password',
			firstName: 'required|string',
			lastName: 'required|string',
			age: 'required|above:18',
			// email: '',
			// phone: '',
		}
		//displaying custom message for errors
		const messages = {
			required: '{{ field }} is required.',
			// 'username.required': '.',
			// 'password.min': 'Your password must be 6 characters at least',
			'password_confirmation.required':'Enter the same password',
			// 'firstName': 'Your name has to be at least 3 letters',
			// 'lastName': 'Your last name has to be at least 3 letters',
			// 'age.required': 'Age is required',
		}

		validateAll(data, rules, messages)
			
			.then(() => {
				axios.post('/user/', {
					username: this.state.username,
					password: this.state.password,
					firstName: this.state.firstName,
					lastName: this.state.lastName,
					age: this.state.age,
					email: this.state.email,
					phone: this.state.phone

				}).then(response => {
					console.log(response)
					if (!response.data.messages) {
						// console.log('successful signup')
						this.setState({ //redirect to login page
							redirectTo: '/login'
						})
					} else {
						console.log('username already taken')
						// this.setState({
						// 	redirectTo: '/signup'
						// })
					}
				}).catch(error => {
					console.log('signup error: ')
					console.log(error)

				})
				console.log('success');
			})
			.catch(errors => {
				console.log(errors); //show errors to user
				console.log(this.state)
				const formattedErrors = {}
				errors.forEach(error => formattedErrors[error.field] = error.message)
				this.setState({ errors: formattedErrors })
				console.log(this.state)
			})



		//request to server to add a new username/password

	}


	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		} else {
			return (
				<div className="wrapper">
					<form className="form-inline">
						<div className="form-wrapper">
					<h4 className="signUp">Sign up</h4>
								<label className="form-label" htmlFor="username">Username</label>
								<input className="form-input"
									type="text"
									id="username"
									name="username"
									placeholder="Username"
									value={this.state.username}
									onChange={this.handleChange}
								/>
				

								<div className="err-msg">{this.state.errors !== {} ? (
									<span>
										{this.state.errors.username}
									</span>
								) : (null)}</div>
							
						
								<label className="form-label" htmlFor="password">Password: </label>
								<input className="form-input"
									placeholder="password"
									type="password"
									name="password"
									value={this.state.password}
									onChange={this.handleChange}
								/>

								<div className="err-msg">{this.state.errors !== {} ? (

									<span>{this.state.errors.password}</span>

								) : (null)}</div>
						
							
							

							
						
								<label className="form-label" htmlFor="password">Confirm Password: </label>
								<input className="form-input"
									placeholder="Confirm Password"
									type="password"
									name="password_confirmation"
									value={this.state.password_confirmation}
									onChange={this.handleChange}
								/>

								<div className="err-msg">{this.state.errors !== {} ? (
									<span>
										{this.state.errors.password_confirmation}
									</span>
								) : (null)}</div>
						
					
						

							
						
								<label className="form-label" htmlFor="username">First Name</label>
								<input className="form-input"
									type="text"
									id="firstName"
									name="firstName"
									placeholder="First Name"
									value={this.state.firstName}
									onChange={this.handleChange}
								/>

								<div className="err-msg">{this.state.errors !== {} ? (
									<span>
										{this.state.errors.firstName}
									</span>
								) : (null)}</div>
						
							
							

							
						
								<label className="form-label" htmlFor="username">Last Name</label>
								<input className="form-input"
									type="text"
									id="lastName"
									name="lastName"
									placeholder="Last Name"
									value={this.state.lastName}
									onChange={this.handleChange}
								/>

								<div className="err-msg">{this.state.errors !== {} ? (
									<span>
										{this.state.errors.lastName}
									</span>
								) : (null)}</div>
						
							
						

							

							
						
								<label className="form-label" htmlFor="username">Age</label>
								<input className="form-input"
									type="number"
									id="age"
									name="age"
									placeholder="Type your age"
									value={this.state.age}
									onChange={this.handleChange}
								/>

								<div className="err-msg">{this.state.errors !== {} ? (
									<span>
										{this.state.errors.age}
									</span>
								) : (null)}</div>
						
							
			

							
						
						
								<label className="form-label" htmlFor="username">Email</label>
								<input className="form-input"
									type="text"
									id="email"
									name="email"
									placeholder="Email (optional)"
									value={this.state.email}
									onChange={this.handleChange}
								/>
					
								<label className="form-label" htmlFor="username">Phone</label>
								<input className="form-input"
									type="number"
									id="phone"
									name="phone"
									placeholder="Phone (optional)"
									value={this.state.phone}
									onChange={this.handleChange}
								/>
						
						
						
							<button
								className="btn btn-primary"
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
							
							
							
							
							
