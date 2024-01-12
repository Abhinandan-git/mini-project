import { Link } from 'react-router-dom';
import { Button } from './Buttons';
import Loading from './Loading';
import React from 'react';
import './css/Signin.css';

function Signin() {
	const submitDetails = async () => {
		setTimeout(() => {
			document.getElementById('signin-block').classList.add('signin-hide');
			document.getElementById('signin-loading').classList.remove('loading-hide');
		}, 200);
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
								className="signin-input-box"
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
					<Button onClick={submitDetails} id='signin'>
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