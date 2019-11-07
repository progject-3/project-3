import React, { Component } from 'react'
import axios from 'axios'
import API from '../utils/API'

//validation function
const emailRegex = RegExp(
	/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

// const formValid = ({ formErrors, ...rest }) => {
// 	let valid = true;

// 	// validate form errors being empty
// 	Object.values(formErrors).forEach(val => {
// 		val.length > 0 && (valid = false);
// 	});

// 	// validate the form was filled out
// 	Object.values(rest).forEach(val => {
// 		val === null && (valid = false);
// 	});

// 	return valid;
// };

class Signup extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			firstName: '',
			lastName: '',
			confirmPassword: '',

		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	// handleChange = e => {
	// 	e.preventDefault();
	// 	const { name, value } = e.target;
	// 	let formErrors = { ...this.state.formErrors };
	
	// 	switch (name) {
	// 	  case "firstName":
	// 		formErrors.firstName =
	// 		  value.length < 3 ? "minimum 3 characaters required" : "";
	// 		break;
	// 	  case "lastName":
	// 		formErrors.lastName =
	// 		  value.length < 3 ? "minimum 3 characaters required" : "";
	// 		break;
	// 	  case "email":
	// 		formErrors.email = emailRegex.test(value)
	// 		  ? ""
	// 		  : "invalid email address";
	// 		break;
	// 	  case "password":
	// 		formErrors.password =
	// 		  value.length < 6 ? "minimum 6 characaters required" : "";
	// 		break;
	// 		// case "password":
	// 		//   formErrors.password =
	// 		// 	value.length < 6 ? "aaaa" : "";
	// 		//   break;
	// 	  default:
	// 		break;
	// 	}
	
	// 	this.setState({ formErrors, [name]: value }, () => console.log(this.state));
	// };
	
	// handleSubmit(event) {
	// 	console.log('sign-up handleSubmit, username: ')
	// 	console.log(this.state.username)
	// 	event.preventDefault()

	// 	//request to server to add a new username/password
	// 	axios.post('/user/', {
	// 		username: this.state.username,
	// 		password: this.state.password,
	// 		firstName: this.state.firstName,
	// 		lastName: this.state.lastName
	// 	})
	// 		.then(response => {
	// 			console.log(response)
	// 			if (!response.data.errmsg) {
	// 				console.log('successful signup')
	// 				this.setState({ //redirect to login page
	// 					redirectTo: '/login'
	// 				})
	// 			} else {
	// 				console.log('username already taken')
	// 			}
	// 		}).catch(error => {
	// 			console.log('signup error: ')
	// 			console.log(error)

	// 		})
	// }

	handleSubmit = e => {
		console.log('sign-up handleSubmit, username: ')
			console.log(this.state.username)
		e.preventDefault();
	
		//request to server to add a new username/password
			// axios.post('/user/', {
			// 	username: this.state.username,
			// 	password: this.state.password,
			// 	firstName: this.state.firstName,
			// 	lastName: this.state.lastName
			// })
	
		// if (formValid(this.state)) {
		//   console.log(`
		// 	--SUBMITTING--
		// 	FirstName: ${this.state.firstName}
		// 	LastName: ${this.state.lastName}
		// 	Email: ${this.state.email}
		// 	Password: ${this.state.password}
		//   `);
			
			API.signUp({
				username: this.state.username,
				password: this.state.password,
				firstName: this.state.firstName,
				lastName: this.state.lastName
			}).then(res => {
				this.setState({
					username: '',
			password: '',
			firstName: '',
			lastName: '',
			confirmPassword: '',
				})
			})
		// } else {
		//   console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
		// }
	  };


	render() {
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
								// className={formErrors.firstName.length > 0 ? "error" : null}
								type="text"
								id="username"
								name="username"
								placeholder="Username"
								value={this.state.username}
								onChange={this.handleChange}
							/>
							  {/* {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span> */}
               
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

export default Signup
