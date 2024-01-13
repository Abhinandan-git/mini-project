import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button } from './Buttons';
import Loading from './Loading';
import './css/Signup.css';

function Signup() {
	const [username, setUsername] = useState('');
	const [loading, setLoading] = useState(false);
	const [userDoesNotExists, setUserDoesNotExists] = useState(null);
	// eslint-disable-next-line
	const navigate = useNavigate();

	useEffect(() => {
		const fetchUsernames = async () => {
			try {
				setLoading(true);
				const response = await fetch('http://localhost:3004/api/usernames');
				let data = await response.json();
				data = data[0].usernames;
				if (username === '') {
					setUserDoesNotExists(null);
				} else {
					const exists = !data.includes(username.toLowerCase());
					setUserDoesNotExists(exists);
				}
			} catch (error) {
				console.error('Error fetching usernames:', error);
			} finally {
				setLoading(false);
			}
		};

		fetchUsernames();
	}, [username]);

	const submitDetails = async () => {
		const validUser = validateUser();
		const validPassword = validatePassword();
		if (validUser === true && validPassword === true) {
			const username = document.getElementById('username').value.toLowerCase();
			const password = document.getElementById('password').value;

			await submitData(username, password).then((res) => {
				navigate('/home');
			}).catch((error) => {
				document.getElementById('signup-block').classList.remove('signup-hide');
				document.getElementById('signup-loading').classList.add('loading-hide');
				console.log('Error:', error);
			});
		}
	}

	const submitData = async (username, password) => {
		return new Promise(async (resolve, reject) => {
			setTimeout(() => {
				document.getElementById('signup-block').classList.add('signup-hide');
				document.getElementById('signup-loading').classList.remove('loading-hide');
				const sendData = async () => {
					try {
						const details = username + "|" + password;
						console.log(details);
						const response = await fetch(`http://localhost:3003/api/signup`, {
							method: 'POST',
							headers: { 'Content-type': 'text/plain' },
							body: details
						});
						if (response.ok) {
							resolve('Data sent successfully');
						} else {
							reject('Failed to send data');
						}
					} catch (error) {
						reject('Error sending data');
					};
				};
				sendData();
			}, 500);
		});
	};

	const validateUser = () => {
		if (userDoesNotExists !== true) {
			document.getElementById('username').classList.add('pwd-err');
			document.getElementById('usnm-err').classList.remove('text-hide');
			return false;
		}
		return true;
	}

	const validatePassword = () => {
		let valid = true;
		const password = document.getElementById('password');
		const cnfmPassword = document.getElementById('cnfm-password');
		if (password.value.length < 6 || password.value.length > 30) {
			password.classList.add('pwd-err');
			document.getElementById('pwd-inv-err').classList.remove('text-hide');
			valid = false;
		}
		if (password.value !== cnfmPassword.value && cnfmPassword.value !== '') {
			password.classList.add('pwd-err');
			cnfmPassword.classList.add('pwd-err');
			document.getElementById('pwd-nmch-err').classList.remove('text-hide');
			valid = false;
		}
		return valid;
	}

	const removeUserStyle = () => {
		document.getElementById('username').classList.remove('pwd-err');
		document.getElementById('usnm-err').classList.add('text-hide');
	}

	const removeStyle = () => {
		document.getElementById('password').classList.remove('pwd-err');
		document.getElementById('cnfm-password').classList.remove('pwd-err');
		document.getElementById('pwd-inv-err').classList.add('text-hide');
		document.getElementById('pwd-nmch-err').classList.add('text-hide');
	}

	return (
		<div className='signup-block-wrapper'>
			<div id="signup-block">
				<div className='signup-block-flex-body'>
					<div className='signup-block-flex-wrapper'>
						<div className="signup-form-block">
							<label className='signup-label' htmlFor='username'>Username</label>
							<div className='username-input'>
								<input
									type="text"
									id="username"
									name="username"
									value={username}
									onFocus={removeUserStyle}
									className="signup-input-box"
									onChange={evnt => setUsername(evnt.target.value)}
								/>
								{loading && <div className='usnm-icon usnm-load'>↻</div>}
								{userDoesNotExists === true && !loading && <div className='usnm-icon' style={{ color: 'green' }}>✓</div>}
								{userDoesNotExists === false && !loading && <div className='usnm-icon' style={{ color: 'red' }}>✗</div>}
							</div>
							<div id='usnm-err' className="err-txt text text-hide">Enter valid username.</div>
						</div>
						<div className="signup-form-block">
							<label className='signup-label' htmlFor='password'>Password</label>
							<input
								id="password"
								type="password"
								name="password"
								onFocus={removeStyle}
								onBlur={validatePassword}
								className="signup-input-box"
							/>
							<div id='pwd-inv-err' className="err-txt text text-hide">Password must be between 6 - 30</div>
						</div>
						<div className="signup-form-block">
							<label className='signup-label' htmlFor='cnfm-password'>Confirm Password</label>
							<input
								type="password"
								id="cnfm-password"
								name="cnfm-password"
								onFocus={removeStyle}
								onBlur={validatePassword}
								className="signup-input-box"
							/>
							<div id='pwd-nmch-err' className="err-txt text text-hide">Passwords do not match!</div>
						</div>
					</div>
				</div>
				<div className='signup-button-wrapper'>
					<Button onClick={submitDetails} id='signup'>
						<div className='rect-button-label'>Sign Up</div>
					</Button>
				</div>
				<hr />
				<div className='text'>Already have an account?</div>
				<div className='signin-button-wrapper'>
					<Link className='signup-link' to="/signin">
						<Button onClick={() => { }} id='signin'>
							<div className='rect-button-label'>Log In</div>
						</Button>
					</Link>
				</div>
			</div>
			<Loading id='signup-loading' classValue='loading-hide' />
		</div>
	);
}

export default Signup;