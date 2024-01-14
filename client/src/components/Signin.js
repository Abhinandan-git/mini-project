import { useNavigate, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Button } from './Buttons';
import Loading from './Loading';
import './css/Signin.css';

function Signin() {
	const [username, setUsername] = useState('');
	// eslint-disable-next-line no-unused-vars
	const navigate = useNavigate();
	// Get list of username-account pair
	// Search for the username in the pair
	// Validate the user
	// User valid, navigate to home
	useEffect(() => {
		const fetchUsernames = async () => {
			try {
				const response = await fetch('http://localhost:3004/api/accounts');
				let data = await response.json();
				console.log(data);
				// data = data[0];
				if (username === '') {
					// setUserDoesNotExists(null);
				} else {
					// const exists = !data.includes(username.toLowerCase());
					// setUserDoesNotExists(exists);
				}
			} catch (error) {
				console.error('Error fetching usernames:', error);
			}
		};

		fetchUsernames();
	}, [username]);

	return (
		<div className='signin-block-wrapper'>
			<div id="signin-block">
				<div className='signin-block-flex-body'>
					<div className='signin-block-flex-wrapper'>
						<div className="signin-form-block">
							<label className='signin-label' htmlFor='username'>Username</label>
							<input
								type="text"
								id="username"
								name="username"
								// value={username}
								className="signin-input-box"
								onChange={evnt => setUsername(evnt.target.value)}
							/>
						</div>
						<div className="signin-form-block">
							<label className='signin-label' htmlFor='password'>Password</label>
							<input
								id="password"
								type="password"
								name="password"
								className="signin-input-box"
							/>
						</div>
					</div>
				</div>
				<div className='signin-button-wrapper'>
					{/* <Button onClick={submitDetails} id='signin'> */}
					<Button id='signin'>
						<div className='rect-button-label'>Sign In</div>
					</Button>
				</div>
				<hr />
				<div className='text'>New User?</div>
				<div className='signin-button-wrapper'>
					<Link className='signin-link' to="/signup">
						<Button onClick={() => {}} id='signin'>
							<div className='rect-button-label'>Create Account</div>
						</Button>
					</Link>
				</div>
			</div>
			<Loading id='signin-loading' classValue='loading-hide' />
		</div>
	);
}

export default Signin;