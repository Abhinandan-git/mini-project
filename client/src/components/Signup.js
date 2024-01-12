import { Link } from 'react-router-dom';
import { Button } from './Buttons';
import Loading from './Loading';
import React from 'react';
import './css/Signup.css';

function Signup() {
	const submitDetails = async () => {
		if (validatePassword()) {
			setTimeout(() => {
				document.getElementById('signup-block').classList.add('signup-hide');
				document.getElementById('signup-loading').classList.remove('loading-hide');
			}, 200);
		}
	}

	const validatePassword = () => {
		const password = document.getElementById('password');
		const cnfmPassword = document.getElementById('cnfm-password');
		if (password.value.length < 6 || password.value.length > 30) {
			password.classList.add('pwd-err');
			document.getElementById('pwd-inv-err').classList.remove('text-hide');
			return false;
		} else if (cnfmPassword.value !== '' && password.value !== cnfmPassword.value) {
			password.classList.add('pwd-err');
			cnfmPassword.classList.add('pwd-err');
			document.getElementById('pwd-nmch-err').classList.remove('text-hide');
			return false;
		}
		return true;
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
						<div class="signup-form-block">
							<label className='signup-label' for='username'>Username</label>
							<input
								type="text"
								id="username"
								name="username"
								className="signup-input-box"
							/>
						</div>
						<div class="signup-form-block">
							<label className='signup-label' for='password'>Password</label>
							<input
								id="password"
								type="password"
								name="password"
								onFocus={removeStyle}
								onBlur={validatePassword}
								className="signup-input-box"
							/>
							<div id='pwd-inv-err' class="pwd-err-txt text text-hide">Password must be between 6 - 30</div>
						</div>
						<div class="signup-form-block">
							<label className='signup-label' for='cnfm-password'>Confirm Password</label>
							<input
								type="password"
								id="cnfm-password"
								name="cnfm-password"
								onFocus={removeStyle}
								onBlur={validatePassword}
								className="signup-input-box"
							/>
							<div id='pwd-nmch-err' class="pwd-err-txt text text-hide">Passwords do not match!</div>
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
						<Button onClick={() => {}} id='signin'>
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