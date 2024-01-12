import { Link } from 'react-router-dom';
import { Button } from './Buttons';
import Loading from './Loading';
import React from 'react';
import './css/Signup.css';

function Signup() {
	const submitDetails = async () => {
		setTimeout(() => {
			document.getElementById('signup-block').classList.add('signup-hide');
			document.getElementById('signup-loading').classList.remove('loading-hide');
		}, 200);
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
								className="signup-input-box"
							/>
						</div>
					</div>
				</div>
				<div className='signup-button-wrapper'>
					<Button onClick={submitDetails} id='signup'>
						<div className='rect-button-label'>Sign Up</div>
					</Button>
				</div>
				<hr />
				<div className='login-text'>Already have an account?</div>
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