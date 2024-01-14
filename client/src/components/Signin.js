import { useNavigate, Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Button } from './Buttons';
import Loading from './Loading';
import './css/Signin.css';

function Signin() {
	const [username, setUsername] = useState('');
	const navigate = useNavigate();
	// User valid, navigate to home
	let accounts = [];

	const fetchAccountsData = async () => {
		try {
			const response = await fetch('http://localhost:3004/api/accounts');
			const data = await response.json();
			accounts = data;
			console.log('Fetched data:', accounts);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

	fetchAccountsData();

	const submitDetails = () => {
		const userIndex = accounts[0].indexOf(username);

		// Check if the username exists in the array
		if (userIndex !== -1) {
			// Check if the corresponding password matches
			const storedPassword = accounts[1][userIndex];
			const password = document.getElementById('password').value;
			if (password === storedPassword) {
				document.getElementById('signin-block').classList.add('signin-hide');
				document.getElementById('signin-loading').classList.remove('loading-hide');
				setTimeout(() => {
					document.getElementById('signin-loading').classList.add('loading-hide');
					navigate('/home');
				}, 750);
			} else {
				document.getElementById('password').classList.add('pwd-err');
				document.getElementById('pwd-mism-err').classList.remove('text-hide');
			}
		} else {
			document.getElementById('username').classList.add('pwd-err');
			document.getElementById('user-nf-err').classList.remove('text-hide');
		}
	}

	const removeUserStyle = () => {
		document.getElementById('username').classList.remove('pwd-err');
		document.getElementById('user-nf-err').classList.add('text-hide');
	}

	const removePasswordStyle = () => {
		document.getElementById('password').classList.remove('pwd-err');
		document.getElementById('pwd-mism-err').classList.add('text-hide');
	}

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
								value={username}
								onFocus={removeUserStyle}
								className="signin-input-box"
								onChange={evnt => setUsername(evnt.target.value)}
							/>
							<div id='user-nf-err' className="err-txt text text-hide">This username does not exist.</div>
						</div>
						<div className="signin-form-block">
							<label className='signin-label' htmlFor='password'>Password</label>
							<input
								id="password"
								type="password"
								name="password"
								onFocus={removePasswordStyle}
								className="signin-input-box"
							/>
							<div id='pwd-mism-err' className="err-txt text text-hide">That password was incorrect.</div>
						</div>
					</div>
				</div>
				<div className='signin-button-wrapper'>
					<Button onClick={submitDetails} id='signin'>
						<div className='rect-button-label'>Sign In</div>
					</Button>
				</div>
				<hr />
				<div className='text'>New User?</div>
				<div className='signin-button-wrapper'>
					<Link className='signin-link' to="/signup">
						<Button onClick={() => { }} id='signin'>
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