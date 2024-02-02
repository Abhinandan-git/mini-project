import './css/Links.css';
import './css/common.css';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Links() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [username, setUsername] = useState('');
	const location = useLocation();

	useEffect(() => {
		const handleCookieChange = () => {
			const [valid, uname] = document.cookie.split('=');
			setIsLoggedIn(valid === 'username');
			setUsername(uname);
		};

		handleCookieChange();
	}, [location.pathname]);

	const logout = () => {
		document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
		setIsLoggedIn(false);
	};

	return (
		<div className="links-bar">
			{isLoggedIn ? <>
				<Link className='sign-link' to="/signin">{username}</Link>
				<div className='sign-link logout' onClick={logout}>Logout</div>
			</> : <>
				<Link className='sign-link logout' to="/signup">Sign up</Link>
				<Link className='sign-link logout' to="/signin">Sign in</Link>
			</>}
		</div>
	);
}

export default Links;